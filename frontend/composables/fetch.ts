/* eslint-disable prettier-vue/prettier */
import { authStore } from '~/stores/auth';

type optsFetch = {
	method?: string | any;
	data?: any;
	params?: any;
	headers?: any;
	onResponse?: (response: any) => void;
};

type FetchProps = {
	url: string;
} & optsFetch;

export async function useSPFetch<T>({ url, method, data, params, onResponse, headers }: FetchProps) {
	const {
		public: { apiUrl },
	} = useRuntimeConfig();

	const {
		session: { token },
	} = authStore();

	if (headers === undefined) {
		headers = {};
		headers.accept = 'application/json';
	}

	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}

	const body = headers['Content-Type'] === 'application/json' ? JSON.stringify(data) : data || null;

	const optsRequest = {
		headers,
		params,
		body,
		onResponse: onResponse || undefined,
		method,
	};

	return await useFetch<T>(`${apiUrl}${url}`, {
		...optsRequest,
	});
}

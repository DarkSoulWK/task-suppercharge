import { defineStore } from 'pinia';
import * as __ from 'pinia-plugin-persistedstate';
import type { IAuthStore } from '@/types/global';

export const authStore = defineStore(
	'__session',
	() => {
		const session = reactive({
			user: null,
			token: null,
		}) as IAuthStore;

		const setSession = (data: IAuthStore) => {
			session.user = data.user;
			session.token = data.token;
		};

		const clearSession = () => {
			session.user = null;
			session.token = null;
		};

		return { session, setSession, clearSession };
	},
	{ persist: { storage: persistedState.cookies } },
);

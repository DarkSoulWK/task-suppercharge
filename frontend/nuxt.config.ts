import { Rules, landingRules } from './config/routes-rules';
export default defineNuxtConfig({
	devtools: { enabled: true },

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	extends: ['./layers/tairo', './layers/tairo-layout-collapse'],

	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore'],
			},
		],
		'@pinia-plugin-persistedstate/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/seo',
		'@nuxt/image',
	],

	css: [
		'~/assets/css/colors.css',
		'@fontsource-variable/fira-code/index.css',
		'@fontsource-variable/inter/index.css',
		'@fontsource-variable/karla/index.css',
	],

	features: {
		inlineStyles: false,
	},

	experimental: {
		// Write early hints when using node server.
		writeEarlyHints: true,
		// Render JSON payloads with support for revivifying complex types.
		renderJsonPayloads: true,
		// Render tags in of the head in a more performant way
		headNext: true,
		// Use the new View Transitions API
		viewTransition: true,

		defaults: {
			useAsyncData: {
				// Use shallowRef in asyncData/fetch data
				deep: false,
			},
		},
	},

	typescript: {
		tsConfig: {
			// Here you can customize the generated tsconfig.json file
			vueCompilerOptions: {
				target: 3.4,
			},
		},
	},

	delayHydration: {
		/* debug: import.meta.env.NODE_ENV === 'development', */
		debug: true,
		mode: false,
	},

	runtimeConfig: {
		public: {
			apiUrl: process.env.NUXT_API_URL || 'http://localhost:8000/api',
			backendUrl: process.env.NUXT_BACKEND_URL || 'http://localhost:8000',
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
			siteName: process.env.NUXT_APP_NAME,
			siteDescription: process.env.NUXT_APP_DESCRIPTION,
			language: process.env.NUXT_LANGUAGE,
			pushe_echo_key: process.env.NUXT_PUSHE_ECHO_KEY || '',
		},
	},

	site: {
		url: process.env.NUXT_API_URL || 'http://localhost:8000/api',
		name: process.env.NUXT_APP_NAME,
		description: process.env.NUXT_APP_DESCRIPTION,
		defaultLocale: process.env.NUXT_LANGUAGE,
	},

	vite: {
		build: {
			target: 'esnext',
		},
		// Defining the optimizeDeps.include option prebuilds the dependencies, this avoid
		// some reloads when navigating between pages during development.
		// It's also useful to track them usage.
		optimizeDeps: {
			include: [
				// AddonCarouselTeam
				// 'vue3-carousel',
				// AddonApexcharts
				'vue3-apexcharts',
				// AddonInputPhone
				'libphonenumber-js/max',
				'country-codes-list',
				// form validation
				'@vee-validate/zod',
				'vee-validate',
				'zod',
				// calendar app
				'date-fns',
				'date-fns/locale',
				// 'date-fns-tz',
				// profile edit page
				'imask',
			],
		},
	},

	routeRules: {
		...Rules,
		...landingRules,
	},

	compatibilityDate: '2024-10-05',
});

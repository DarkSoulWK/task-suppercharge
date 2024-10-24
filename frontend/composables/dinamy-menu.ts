import { authStore } from '~/stores/auth';

export const useDinamyMenu = () => {
	const superAdminMenu = [
		{
			name: 'Dashboards',
			icon: { name: 'ph:sidebar-duotone', class: 'size-5' },
			to: '/dashboard/',
			activePath: '/dashboard',
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Reportes',
			icon: { name: 'ph:chart-bar', class: 'size-5' },
			to: '/dashboard/reports/',
			activePath: '/dashboard/reports',
		},
		{
			name: 'Preguntas de Reportes',
			icon: { name: 'ph:question-fill', class: 'size-5' },
			to: '/dashboard/questions/',
			activePath: '/dashboard/questions',
		},
		{
			name: 'Historial',
			icon: { name: 'material-symbols:family-history-outline', class: 'size-5' },
			activePath: '/dashboard/history',
			children: [
				{
					name: 'Panel',
					to: '/dashboard/history/',
					icon: { name: 'material-symbols:family-history-outline', class: 'size-4' },
					activePath: '/dashboard/history',
				},
				{
					name: 'Listado',
					to: '/dashboard/history/list',
					icon: { name: 'icon-park-outline:history-query', class: 'size-4' },
					activePath: '/dashboard/history/list',
				},
			],
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Sucursales',
			icon: { name: 'ph:circles-three-plus', class: 'size-5' },
			to: '/dashboard/branches/',
			activePath: '/dashboard/branches',
		},
		{
			name: 'Usuarios',
			icon: { name: 'ph:users-four-light', class: 'size-5' },
			to: '/dashboard/users/',
			activePath: '/dashboard/users',
		},
		{
			name: 'Supervisores',
			to: '/dashboard/supervisor',
			icon: { name: 'ph:user-gear', class: 'size-4' },
			activePath: '/dashboard/supervisor',
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Incidentes',
			to: '/dashboard/incidents',
			icon: { name: 'ph:cardholder', class: 'size-5' },
			activePath: '/dashboard/incidents/',
		},
		{
			name: 'Tipo de Pantalla',
			to: '/dashboard/equipment_types',
			icon: { name: 'ph:selection-inverse', class: 'size-5' },
			activePath: '/dashboard/equipment_types/',
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Status',
			icon: { name: 'ph:activity-light', class: 'size-5' },
			to: '/dashboard/status/',
			activePath: '/dashboard/status',
		},
		{
			name: 'Tickets',
			icon: { name: 'ion:ticket-outline', class: 'size-5' },
			to: '/dashboard/tickets/',
			activePath: '/dashboard/tickets',
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Configuración',
			icon: { name: 'ph:gear', class: 'size-5' },
			to: '/dashboard/settings/',
			activePath: '/dashboard/settings',
			position: 'end',
		},
	];

	const adminMenu = [
		{
			name: 'Dashboards',
			icon: { name: 'ph:sidebar-duotone', class: 'size-5' },
			to: '/dashboard/',
			activePath: '/dashboard',
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Reportes',
			icon: { name: 'ph:chart-bar', class: 'size-5' },
			to: '/dashboard/reports/',
			activePath: '/dashboard/reports',
		},
		{
			name: 'Sucursales',
			icon: { name: 'ph:circles-three-plus', class: 'size-5' },
			children: [
				{
					name: 'Listado',
					to: '/dashboard/branches/',
					icon: { name: 'ph:circles-three-plus', class: 'size-4' },
				},
				{
					name: 'Crear',
					to: '/dashboard/branches/create',
					icon: { name: 'ph:circles-three-plus', class: 'size-4' },
				},
			],
		},
		{
			name: 'Usuarios',
			icon: { name: 'ph:users-four-light', class: 'size-5' },
			children: [
				{
					name: 'Listado',
					to: '/dashboard/users/',
					icon: { name: 'ph:users-four-light', class: 'size-4' },
				},
				{
					name: 'Crear',
					to: '/dashboard/users/create',
					icon: { name: 'ph:users-four-light', class: 'size-4' },
				},
			],
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Status',
			icon: { name: 'ph:activity-light', class: 'size-5' },
			to: '/dashboard/status/',
			activePath: '/dashboard/status',
		},
	];

	const supervisorMenu = [
		{
			name: 'Dashboards',
			icon: { name: 'ph:sidebar-duotone', class: 'size-5' },
			to: '/dashboard/',
			activePath: '/dashboard',
		},
		{
			name: 'Divider',
			divider: true,
		},
		{
			name: 'Reportes',
			icon: { name: 'ph:chart-bar', class: 'size-5' },
			to: '/dashboard/reports/',
			activePath: '/dashboard/reports',
		},
	];

	const appConfig = useAppConfig();

	const lengthMenuActual = appConfig.tairo.collapse?.navigation?.items?.length || 0;

	const { session } = authStore();

	if (session.user?.role.name === 'superadmin') {
		appConfig.tairo.collapse?.navigation?.items?.splice(0, lengthMenuActual, ...superAdminMenu);
	}

	if (session.user?.role.name === 'admin') {
		appConfig.tairo.collapse?.navigation?.items?.splice(0, lengthMenuActual, ...adminMenu);
	}

	if (session.user?.role.name === 'supervisor') {
		appConfig.tairo.collapse?.navigation?.items?.splice(0, lengthMenuActual, ...supervisorMenu);
	}
};

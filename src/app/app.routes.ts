export const routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register.component').then((m) => m.RegisterComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'animals',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/animals/list/animal-list.component').then((m) => m.AnimalListComponent),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./features/animals/form/animal-form.component').then((m) => m.AnimalFormComponent),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./features/animals/detail/animal-detail.component').then((m) => m.AnimalDetailComponent),
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./features/animals/form/animal-form.component').then((m) => m.AnimalFormComponent),
      },
    ],
  },
  {
    path: 'marketplace',
    loadComponent: () =>
      import('./features/marketplace/marketplace.component').then((m) => m.MarketplaceComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then((m) => m.ProfileComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
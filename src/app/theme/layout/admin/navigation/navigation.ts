export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group' | 'admin';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;

  children?: NavigationItem[];
}

// On récupère l'utilisateur depuis le localStorage
const user = JSON.parse(localStorage.getItem('user') || '{}');

// On crée une nouvelle constante `navigationItems` où l'on conditionne l'ajout du lien "user"
export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',  // Utiliser un type spécifique ici
    icon: 'icon-navigation',
    children: [
      {
        id: 'Dashboard',
        title: 'Dashboard',
        type: 'item',  // Type spécifique ici
        url: '/dashboard',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'pages',
    title: 'Notifications',
    type: 'group',  // Type spécifique ici
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',  // Type spécifique ici
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',  // Type spécifique ici
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',  // Type spécifique ici
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'sample-page',
        title: 'Logs',
        type: 'item',  // Type spécifique ici
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },

    ]
  }
];

// Ajouter le lien "user" uniquement si l'utilisateur est un admin
if (user.role === 'ADMIN') {
  NavigationItems[1].children.push({
    id: 'user',
    title: 'user',
    type: 'item',  // Type spécifique ici
    url: '/user',
    classes: 'nav-item',
    icon: 'feather icon-sidebar'
  });
}

if (user.role === 'ADMIN') {
  NavigationItems[1].children.push({
id: 'equipment',
title: 'Equipment',
type: 'item',  // Type spécifique ici
url: '/equipment',
classes: 'nav-item',
icon: 'feather icon-sidebar'
  });
}

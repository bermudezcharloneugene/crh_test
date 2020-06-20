import Login from './components/Home/Login';
import Dashboard from './components/Home/Dashboard'

export const routes = [
    {
        name: 'Login',
        path: '/',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },

];
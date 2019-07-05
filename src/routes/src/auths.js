import Login from '../../pages/authentication/login';
// import Login2 from '../../pages/authentication/login2.jsx';
// import Register from '../../pages/authentication/register.jsx';
// import Register2 from '../../pages/authentication/register2.jsx';
// import Lockscreen from '../../pages/authentication/lockscreen.jsx';
// import Recoverpwd from '../../pages/authentication/recover-pwd.jsx';
// import Maintanance from '../../pages/authentication/maintanance.jsx';

let auths = [
    { path: '/', name: 'Login', icon: 'mdi mdi-account-key', component: Login },
    // { path: '/login2', name: 'Login with Firebase', icon: 'mdi mdi-account-key', component: Login2 },
    // { path: '/register', name: 'Register', icon: 'mdi mdi-account-plus', component: Register },
    // { path: '/register2', name: 'Register with Firebase', icon: 'mdi mdi-account-plus', component: Register2 },
    // { path: '/lockscreen', name: 'Lockscreen', icon: 'mdi mdi-account-off', component: Lockscreen },
    // { path: '/recover-pwd', name: 'Recover Password', icon: 'mdi mdi-account-convert', component: Recoverpwd },
    // { path: '/maintanance', name: 'Maintanance', icon: 'mdi mdi-pencil-box-outline', component: Maintanance },
    // { path: '/authentication', pathTo: '/authentication/login', name: 'Login', redirect: true }
];
export default auths; 
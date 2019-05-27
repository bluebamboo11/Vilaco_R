import Login from '../views/authentication/login.jsx';
import Register from '../views/authentication/register.jsx';
import RegistrationForm from "../views/authentication/registrationForm";
import RegistrationFormTest from "../views/authentication/RegistrationFormTest";
//Cấu hình đường dẫn của các trang bên dưới
let authRoutes = [
    { path: '/xac-thuc/dang-nhap', name: 'Login', icon: 'mdi mdi-account-key', component: Login },
    { path: '/xac-thuc/dang-ky', name: 'Register', icon: 'mdi mdi-account-plus', component: Register },
    { path: '/xac-thuc/dang-ky-test', name: 'Register', icon: 'mdi mdi-account-plus', component: RegistrationFormTest },
    { path: '/xac-thuc/mau-dang-ky', name: 'RegistrationForm', icon: 'mdi mdi-account-key', component: RegistrationForm }
];
export default authRoutes; 

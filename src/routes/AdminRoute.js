import AdminLayout from "../layout/AdminLayout.vue"
import {Dashboard, AdminAbout, AdminContac, AdminHome, AdminProject} from "../pages/admin"

const adminRouters = {
    path: "/admin",
    component: AdminLayout,
    children:[
        {path:'', component: Dashboard},
        {path:'admin-home', component: AdminHome},
        {path:'admin-contact', component: AdminContac},
        {path:'admin-about', component: AdminAbout},
        {path:'admin-project', component: AdminProject},
    ]
}

export default adminRouters
import ClientLayout from "../layout/ClientLayout.vue"
import { About, Contac, Home, Project, Services } from "../pages/client"


const clientRouters = {
    path: "",
    component: ClientLayout,
    children:[
        {path: "", component: Home},
        {path: "about", component: About},
        {path: "contact", component: Contac},
        {path: "project", component: Project},
        {path: "services", component: Services},
    ]
}

export default clientRouters
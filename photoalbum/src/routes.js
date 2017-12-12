import App from './pages/App'
import Home from './pages/Home'
import User from './pages/User'

const routes =[{
    path: '/',
    component:App,
    indexRoute:{component:Home},
    childRoutes:[
        {path: 'user', component:User}
    ]

}]

export default routes
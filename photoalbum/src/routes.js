import App from './pages/App'
import Home from './pages/Home'
import User from './pages/User'
import Album from './pages/Album'

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
        { path: 'user', component: User },
        { path: 'album/:userID(/:title)', component: Album }
    ]

}]

export default routes
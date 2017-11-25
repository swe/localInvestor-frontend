import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Portfolio from 'src/components/Dashboard/Views/Portfolio.vue'
import Explore from 'src/components/Dashboard/Views/Explore.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/overview'
  },
  {
    path: '/',
    component: DashboardLayout,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'explore',
        name: 'Explore',
        component: Explore
      },
      {
        path: 'profile',
        name: 'Profile',
        component: UserProfile
      }
    ]
  },
  {path: '*', component: NotFound}
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes

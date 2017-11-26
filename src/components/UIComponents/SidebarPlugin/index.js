import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Overview',
      icon: 'ti-bar-chart',
      path: '/overview'
    },
    // {
    //   name: 'Portfolio',
    //   icon: 'ti-briefcase',
    //   path: '/portfolio'
    // },
    // {
    //   name: 'Explore',
    //   icon: 'ti-eye',
    //   path: '/explore'
    // },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/profile'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin

import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Overview',
      icon: 'ti-panel',
      path: '/overview'
    },
    {
      name: 'Portfolio',
      icon: 'ti-panel',
      path: '/portfolio'
    },
    {
      name: 'Explore',
      icon: 'ti-panel',
      path: '/explore'
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/profile'
    }
    // {
    //   name: 'Table List',
    //   icon: 'ti-view-list-alt',
    //   path: '/admin/table-list'
    // },
    // {
    //   name: 'Typography',
    //   icon: 'ti-text',
    //   path: '/admin/typography'
    // },
    // {
    //   name: 'Icons',
    //   icon: 'ti-pencil-alt2',
    //   path: '/admin/icons'
    // },
    // {
    //   name: 'Maps',
    //   icon: 'ti-map',
    //   path: '/admin/maps'
    // },
    // {
    //   name: 'Notifications',
    //   icon: 'ti-bell',
    //   path: '/admin/notifications'
    // },
    // {
    //   name: 'Company rating',
    //   icon: 'ti-cup',
    //   path: '/admin/rating'
    // }
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

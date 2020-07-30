<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="/assets/images/logo.png" alt="Workflow logo" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <template v-for="item in menuList">
                  <router-link
                    v-if="item.to.startsWith('/')"
                    :key="item.id"
                    class="px-3 py-2 rounded-md text-sm font-medium
                      text-gray-300 hover:text-white hover:bg-gray-700
                      focus:outline-none focus:text-white"
                    :class="{
                      'text-white': item.id === activeMenu,
                      'bg-gray-900': item.id === activeMenu
                    }"
                    :to="item.to"
                  >
                    {{ item.name }}
                  </router-link>
                  <a
                    class="px-3 py-2 rounded-md text-sm font-medium
                      text-gray-300 hover:text-white hover:bg-gray-700
                      focus:outline-none focus:text-white"
                    :class="{
                      'text-white': item.id === activeMenu,
                      'bg-gray-900': item.id === activeMenu
                    }" :href="item.to" target="_blank" :key="item.id" v-else>{{ item.name }}</a>
                </template>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button class="p-1 border-2 border-transparent text-gray-400 rounded-fullhover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    class="max-w-xs flex items-center text-sm rounded-full text-white
                    focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @click="toggleShowMenu"
                  >
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                <!--
                  Profile dropdown panel, show/hide based on dropdown state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-if="isShowMenu">
                  <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400
              hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              @click="toggleMobileMenu"
            >
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" v-if="isShowMobileMenu">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" v-if="!isShowMobileMenu">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <div v-if="isShowMobileMenu">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
    <header class="bg-white shadow">
      <div class="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="inline-block text-3xl font-bold leading-tight text-gray-900">
          {{activeMenu}}
        </h1>
        <ul
          v-if="activeMenu === 'Components'"
          class="flex items-center px-8 space-x-4"
        >
          <li
            v-for="item in componentsList"
            :key="item.id"
            :class="{'text-blue-500': item.name === $route.name}"
          >
            <router-link :to="item.to">{{ item.name }}</router-link>
            <span v-if="item.version"
              class="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-green-100 text-green-900">
              {{item.version}}
            </span>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data: () => ({
    isShowMenu: false,
    isShowMobileMenu: false,
    menuList: [
      { id: 'Home', name: 'Home', to: '/home' },
      { id: 'Components', name: 'Components', to: '/components' },
      // { id: 'Projects', name: 'Projects', to: '/projects' },
      { id: 'About', name: 'About', to: '/about' },
      { id: 'GitHub', name: 'GitHub', to: 'https://github.com/xiaoluoboding/tailwind-pre-processor' }
    ],
    activeMenu: 'Home',
    componentsList: [
      { id: 'Alert', name: 'Alert', to: '/components/alert' },
      { id: 'Navigation', name: 'Navigation', to: '/components/navigation' },
      { id: 'Animation', name: 'Animation', to: '/components/animation', version: 'v1.6.0+' }
    ]
  }),
  watch: {
    '$route': function (newVal) {
      const idx = this.menuList.findIndex(v => this.$route.path.includes(v.to))
      if (idx !== -1) {
        this.activeMenu = this.menuList[idx].id
      }
    }
  },
  mounted () {
    // console.log(this.$route)
  },
  methods: {
    toggleShowMenu () {
      this.isShowMenu = !this.isShowMenu
    },
    toggleMobileMenu () {
      this.isShowMobileMenu = !this.isShowMobileMenu
    }
  }
}
</script>

<style scoped>

</style>

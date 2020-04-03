<template>
  <div id="app">
    <div id="nav" class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/alerts">Alerts</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@vue-color-primary: #2c3e50;
@vue-color-secondary: #42b983;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}

#nav {
  @apply text-center p-8;

  a {
    @apply font-semibold;
    color: @vue-color-primary;

    &.router-link-exact-active {
      color: @vue-color-secondary;
    }
  }
}
</style>

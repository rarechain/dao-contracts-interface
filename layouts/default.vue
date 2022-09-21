<template>
  <div id="appRoot">
    <template>
      <v-app id="inspire" class="app">
        <app-drawer class="app--drawer" />
        <app-toolbar class="app--toolbar" />
        <v-content>
          <!-- Page Header -->
          <div class="page-wrapper">
            <transition name="fade">
              <nuxt />
            </transition>
          </div>
        </v-content>
      </v-app>
    </template>
  </div>
</template>

<script>
import AppDrawer from '@/components/AppDrawer.vue'
import AppToolbar from '@/components/AppToolbar.vue'

export default {
  components: {
    AppDrawer,
    AppToolbar
  }
}
</script>

<style lang="scss">
html,body {
  overflow-y: auto;
}

.page-wrapper {
  height: calc(100vh - 64px);
  overflow: auto;
}
.fade {
  &-enter-active, &-leave-active {
    transition: opacity 200ms ease-in-out;
  }

  &-enter, &-leave-to {
    opacity: 0;
  }
}
</style>

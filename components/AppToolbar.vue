<template>
  <v-app-bar
    color="theme_color"
    fixed
    dark
    app
  >
    <v-app-bar-nav-icon class="ms-2" @click="toggleDrawer()" />
    <v-spacer />
    <v-menu :left="!$vuetify.rtl" offset-y :nudge-right="$vuetify.rtl ? -10 : 10" :nudge-bottom="5" transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn class="mx-2" icon large text v-on="on">
          <v-avatar size="30px">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item @click="() => {}">
          <v-list-item-action><v-icon>mdi-account</v-icon></v-list-item-action>
          <v-list-item-content>Profile</v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action><v-icon>mdi-logout</v-icon></v-list-item-action>
          <v-list-item-content>Logout</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppToolbar',
  components: {},
  data () {
    return {
      tenantOptions: [],
      items: [
        {
          icon: 'mdi-account',
          href: '#',
          title: 'Profile',
          click: (e) => {}
        },
        {
          icon: 'mdi-fullscreen-exit',
          href: '#',
          title: 'Logout',
          click: (e) => {

          }
        }
      ]
    }
  },
  async fetch() {},
  methods: {
    toggleDrawer () {
      this.$store.commit('toggleDrawer')
    },
    async logout() {
      this.$router.push("/logout")
    }
  }
}
</script>

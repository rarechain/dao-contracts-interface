<template>
  <v-navigation-drawer
    id="appDrawer"
    v-model="drawer"
    :light="$vuetify.light"
    app
    width="260"
    temporary
  >
    <v-toolbar color="theme_color" dark>
      <img class="mx-auto" src="" height="55" alt="Rocket Brains Technologies">
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list expand>
        <template v-for="(item, i) in menus">
          <!--group with subitems-->
          <v-list-group
            v-if="item.items"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
            v-role:any="item.roles ? item.roles : false"
          >
            <v-list-item-content slot="activator">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <template v-for="(subItem, i) in item.items">
              <!--sub group-->
              <v-list-group 
                v-if="subItem.items" 
                :key="subItem.name" 
                :group="subItem.group" 
                sub-group="sub-group"
                v-role:any="subItem.roles ? subItem.roles : false"
              >
                <v-list-item slot="activator">
                  <v-list-item-content>
                    <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  v-for="(grand, i) in subItem.children"
                  :key="i"
                  :to="grand.href? grand.href : null"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ grand.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <!--child item-->
              <v-list-item
                v-else
                :key="i"
                :to="subItem.href? subItem.href : null"
                :disabled="subItem.disabled"
                :target="subItem.target"
              >
                <v-list-item-content>
                  <v-list-item-title><span>{{ subItem.title }}</span></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action v-if="subItem.action">
                  <v-icon :class="[subItem.actionClass || 'success--text']">
                    {{ subItem.action }}
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="i" class="text-truncate">
            {{ item.header }}
          </v-subheader>
          <v-divider v-else-if="item.divider" :key="i" />
          <!--top-level link-->
          <v-list-item
            v-else
            :key="item.name"
            :to="item.href ? item.href : null"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            exact
            v-role:any="item.roles ? item.roles : false"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action v-if="item.subAction">
              <v-icon class="success--text">
                {{ item.subAction }}
              </v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
//import menus from '@/util/menu'

export default {
  name: 'AppDrawer',
  components: {
    VuePerfectScrollbar,
  },
  props: {
    expanded: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mini: false,
      scrollSettings: {
        maxScrollbarLength: 160
      },
      menus: [
        {
          icon: 'mdi-monitor-dashboard',
          title: 'Home',
          name: 'index',
          href: '/'
        }
      ],
      punchClockDialog: false
    }
  },
  computed: {
    //menus,
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('drawer', val)
      }
    }
  },
  created () {},
  methods: {}
}
</script>

<style lang="scss">
#appDrawer {
  overflow: hidden;
  .v-toolbar {
    z-index: 2;
  }
  .drawer-menu--scroll {
    height: calc(100vh - 64px);
    overflow: auto;
  }
}
</style>

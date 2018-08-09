<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Rare
      <mu-button v-if="!$store.getters.token" flat slot="right" @click="$router.push({path: '/login'})">登录</mu-button>
      <mu-menu v-else cover open-on-hover slot="right">
        <!-- <mu-avatar size="64">
          <img :src="$store.getters.avatar">
        </mu-avatar> -->
        <mu-button icon>
          <mu-icon value="more_vert"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button @click="logout">
            <mu-list-item-title>退出登录</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </mu-appbar>

    <mu-drawer :open.sync="open" :docked="false">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      open: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('Logout').then(() => {
        this.$router.push({path: '/'})
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Rare
      <mu-button v-if="!$store.getters.token" flat slot="right" @click="$router.push({path: '/login'})">登录</mu-button>
      <mu-avatar v-else :size="50" slot="right">
        <img :src="$store.getters.avatar">
      </mu-avatar>
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
  }
}
</script>

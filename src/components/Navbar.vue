<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" @click="open = !open">
            <mu-icon value="menu"></mu-icon>
        </mu-button>
        <router-link :to="{name: 'Index'}">Rare</router-link>
        <mu-menu v-if="avatar" placement="bottom-start" open-on-hover slot="right">
            <div class="img-content">
              <mu-avatar :size="48">
                <img :src="avatar">
              </mu-avatar>
            </div>
            <mu-list slot="content">
            <mu-list-item button @click="logout">
                <mu-list-item-title>退出登录</mu-list-item-title>
            </mu-list-item>
            </mu-list>
        </mu-menu>
        <mu-button v-else flat slot="right" @click="$router.push({path: '/login'})">登录</mu-button>
        </mu-appbar>

        <mu-drawer :open.sync="open" :docked="false">
          <div class="drawer-header">
            Rare's Blog
          </div>
          <admin-side-list v-if="isAdminList"></admin-side-list>
          <index-side-list v-else></index-side-list>
        </mu-drawer>
    </div>
</template>

<script>
import AdminSideList from '@/components/AdminSideList.vue'
import IndexSideList from '@/components/IndexSideList.vue'
import {mapGetters} from 'vuex'
export default {
  name: "Header",
  data() {
    return {
      open: false,
      isAdminList: this.$route.path.includes('/admin'),
      hide: this.avatar
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('Logout').then(() => {
        location.reload()
      }).catch(error => {
        console.log(error)
      })
    }
  },
  components: {
    AdminSideList,
    IndexSideList
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  }
}
</script>

<style scoped>
.drawer-header {
  height: 64px;
  line-height: 64px;
  padding-left: 50px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #eeeeee;
}
.img-content {
  height: inherit;
  display: flex;
  align-items: center;  
}
</style>

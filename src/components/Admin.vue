<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: "Admin",
  data() {
    return {
      
    }
  },
  components: {
    Navbar
  }
}
</script>
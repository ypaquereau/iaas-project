<template>
  <div>
      <Navbar />
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
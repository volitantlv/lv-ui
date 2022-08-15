<template>
  <div id="app">
    <lv-dialog></lv-dialog>
  </div>
</template>

<script>
import LvDialog from '../packages/dialog/src/index.vue'
export default {
  name: 'App',
  components: { LvDialog },
  data () {
    return {}
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-image: url('https://cdn.pixabay.com/photo/2022/07/26/03/31/sea-7344974_960_720.jpg');
  background-size: 100% 100%;
}
</style>

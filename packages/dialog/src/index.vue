<template>
  <div class="lv-dialog" @click.self="$emit('close')">
    <div class="lv-dialog__container" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LvDialog',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.lv-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(3px);
  .lv-dialog__container{
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(58, 23, 23, 0.53);
    width: 800px;
    height: 500px;
    border-radius: 8px;
    box-shadow: 0 2px 30px #fff5;
  }
}
</style>

<template>
  <div class="header-box">
    <div class="header-box__title">
      {{ title }}
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      title: '配置项'
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  padding: 16px;
  .header-box__title {
    text-align: start;
  }
}
</style>

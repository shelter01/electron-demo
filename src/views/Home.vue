<template>
  <div class="home">
    <div class="header">
      <header-box></header-box>
    </div>
    <div class="content">
      <content-box></content-box>
    </div>
    <!-- <div class="footer">
      <footer-box></footer-box>
    </div> -->
  </div>
</template>

<script>
import HeaderBox from '@/components/Unit/HeaderBox.vue'
import ContentBox from '@/components/Unit/ContentBox.vue'
// import FooterBox from '@/components/Unit/FooterBox.vue'

export default {
  name: 'Home',
  components: {
    'header-box': HeaderBox,
    'content-box': ContentBox,
    // 'footer-box': FooterBox
  }
}
</script>

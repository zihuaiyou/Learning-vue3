<script setup lang="ts">
import Content from "./Content/index.vue";
import Header from "./Header/index.vue";
import Menu from "./Menu/index.vue";
</script>

<template>
  <div class="zihyou-wrapper">
    <div class="zihyou-wrapper__left">
      <Menu />
    </div>
    <div class="zihyou-wrapper__right">
      <Header />
      <Content />
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b("wrapper") {
  @include flex;
  @include bfc;

  @include e("left"){
    @include flex
  }

  @include e("right"){
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>

<script setup lang="ts"></script>

<template>
  <div>
    <div class="zihyou-parent">
      我是父亲
      <div class="zihyou-parent__elem">我是儿子</div>
      <div class="zihyou-parent--uncle">我是叔叔</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b("parent") {
  color: red;
  @include e("elem") {
    color: blue;
  }
  @include m("uncle") {
    color: yellow;
  }
}
</style>

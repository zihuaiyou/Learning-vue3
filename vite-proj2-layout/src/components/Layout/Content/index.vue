<script setup lang="ts"></script>

<template>
  <div class="zihyou-content">
    <div v-for="item in 100" class="zihyou-content__items">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b("content") {
  overflow: auto;
  flex : 1;
  @include e("items") {
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
  }
}
</style>

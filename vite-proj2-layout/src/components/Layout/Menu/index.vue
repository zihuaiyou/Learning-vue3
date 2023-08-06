<script setup lang="ts">
import { reactive } from 'vue';
import Tree from '../Tree/Tree.vue';
type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}
const treeList = reactive<TreeList[]>(
  [{
    name: "no.1",
    children: [
      {
        name: "no.1-1",
        children: [
          {
            name: "no.1-1-1",
          },
        ],
      },
    ],
  },
  {
    name: "no.2",
    children: [
      {
        name: "no.2-1",
      },
    ],
  },
  {
    name: "no.3",
  },
  ]
)
</script>

<template>
  <div class="zihyou-menu">menu
    <Tree :data="treeList" />
  </div>
</template>

<style scoped lang="scss">
@include b("menu") {
  min-width: 200px;
  border-right: 1px solid #ccc;
  flex: 1;
  height: 100%;
}
</style>

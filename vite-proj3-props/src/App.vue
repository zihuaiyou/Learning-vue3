<script setup lang="ts">
import {ref} from 'vue';
import WaterFall from './components/WaterFall.vue';
let name:string = "zihyou"
const handleEmit = (age:number) =>  console.log(age);

// 父组件想拿到子组件的数据，可以获取子组件的实例
const waterFallRef = ref<InstanceType<typeof WaterFall>>()
// console.log(waterFallRef.value);  无法打印出来，或许是异步原因？？

</script>

<template>
  <div>
    <WaterFall :name="name" @on-click="handleEmit"  ref="waterFallRef"/>
    {{ waterFallRef.list }}
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { reactive } from "vue";
type Props = {
  name?: string;
  data?: number[];
};
// 1.props 的传递（父 ==> 子）
// withDefaults可以设置默认值
// 引用类型的默认值需要使用回调的形式
const props = withDefaults(defineProps<Props>(), {
  data: () => [1, 2, 3],
});
console.log(props.data);

// 2.子组件触发父组件的事件（子 ==> 父）
//纯js的写法
// const emit = defineEmits(["on-click"])
const emit = defineEmits<{
  (event: "on-click", age: number): void; //多个emit就写多个
}>();
const send = () => {
  emit("on-click", 18);
};

// 3. 子组件暴露属性 供父组件使用
const list = reactive<number[]>([6,6,6]);
defineExpose({ list });
</script>

<template>
  <button @click="send">子组件触发父组件的方法</button>
  <div>{{ name }}</div>
</template>

<style scoped></style>

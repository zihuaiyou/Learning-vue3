<script setup lang="ts">
type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}
defineProps<{
    data?: TreeList[] | []
}>()

const clickItem = (item) => console.log(item);

</script>
<template>
    <div v-for="(item, index) in data" style="margin-left:10px">
        <div :key="index" @click = "clickItem"> {{ item.name }}</div>
        <Tree v-if="item?.children?.length" :data="item?.children" />
    </div>
</template>
<style scoped></style>
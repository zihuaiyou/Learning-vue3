<script setup lang="ts">
import { reactive, onMounted } from 'vue';
type List = {
  height: number;
  background: string;
  top?: number;
  left?: number;
}
const props = defineProps<{ list: List[] }>()
const waterFallList = reactive<any[]>([])
const heightList:any[] = []
const init = () => {
  const width = 130
  const coulmn = Math.floor(document.body.clientWidth / width)
  for (let i = 0; i < props.list.length; i++) {
    if (i < coulmn) {
      props.list[i].top = 10
      props.list[i].left = i * width
      heightList.push(props.list[i].height + 10)
      waterFallList.push(props.list[i])

    
    } else {
      let cur = heightList[0]
      let index = 0
      heightList.forEach((elem,ind) => {
        if (elem <  cur) {
          cur = elem
          index = ind
        }
      })
      heightList[index] = cur + 10 + props.list[i].height
      props.list[i].top = 10 + cur
      props.list[i].left = index * width
      waterFallList.push(props.list[i])
    }
  }
}





onMounted(() => {
  window.onresize = () => init()
  init()
})

</script>
<template>
  <div class="wrap">
    <div v-for="item in waterFallList" class="items"
      :style="{ top: item.top + 'px', left: item.left + 'px', background: item.background, height: item.height + 'px' }"></div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  // position: relative;

  .items {
    position: absolute;
    width: 120px;
  }
}
</style>
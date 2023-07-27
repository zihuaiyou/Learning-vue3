<script setup lang="ts">
import { reactive, computed,ref } from 'vue';
interface Data {
  name: string,
  price: number,
  num: number,
}
const data = reactive<Data[]>([
  {
    name: "绿帽子",
    price: 100,
    num: 1,
  },
  {
    name: "红衣服",
    price: 200,
    num: 1,
  },
  {
    name: "黑袜子",
    price: 300,
    num: 1,
  }
])

const keywords = ref<string>("")
const searchData = computed<Data[]>(() => {
  return data.filter((obj:Data,index:number) => {
    return obj.name.includes(keywords.value)
  })
})

const total = computed<string>(
  () => {
    return searchData.value.reduce((pre: number, cur: Data) => {
      return pre + cur.num * cur.price
    }, 0)
  }
)
const del = (index: number) => {
  return data.splice(index,1)
}
</script>

<template>
  <div>
    <input type="text" v-model="keywords" placeholder="请输入商品名称" style="background: #fff;color: #111;">
    <table style="margin-top:10px;" width="500" cellspacing="0" cellpadding="0" border>
      <thead>
        <tr>
          <th>物品</th>
          <th>单价</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchData">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.num }}</td>
          <td>
            <button @click="item.num < 99 ? item.num++ : null">+</button>
            {{ item.num * item.price }}
            <button @click="item.num > 1 ? item.num-- : null">-</button>
          </td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <span>总价{{ total }}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>



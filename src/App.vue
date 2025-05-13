<script setup>
import moment from "moment";
import { computed, ref, watch } from "vue";
let time1 = ref(1725123600000000000);
let time2 = ref(1727625600000000000);
let time3 = ref(0)
let tz1 = ref(0)

const time1Formatter = computed(() => {
    return moment(time1.value / 1e6).format("YYYY-MM-DD HH:mm:ss"); 
});
const time2Formatter = computed(() => {
    return moment(time2.value / 1e6).format("YYYY-MM-DD HH:mm:ss");
});
const time3Formatter = computed(() => {
  return moment(time3.value / 1e6).format("YYYY-MM-DD HH:mm:ss.SSS");
});
const tz1_str = moment().format('Z')

const op1 = moment().startOf('day').date(3).format("YYYY-MM-DD HH:mm:ss")
const op2 = moment().startOf('day').endOf('month').startOf('day').format("YYYY-MM-DD HH:mm:ss")
const op3 = moment().day(0).format("YYYY-MM-DD HH:mm:ss")
const op4 = moment().clone().startOf('month').format("YYYY-MM-DD HH:mm:ss")
const opMap={
  op1,
  op2,
  op3,
  op4,
  op5: moment().clone().startOf('month').format("YYYY-MM-DD HH:mm:ss"),
  op6:  moment().clone().startOf('month').subtract(1, 'days').format("YYYY-MM-DD HH:mm:ss")
}
</script>

<template>
<div>
  <h3>19位时间戳</h3>
  <div>
    <input v-model="time1"></input>
    <span >{{time1Formatter}}</span>
  </div>
  <div>
    <input v-model="time2"></input>
    <span >{{time2Formatter}}</span>
  </div>
  <hr/>
  <div>
    <h3>带有毫秒</h3>
   <input v-model="time3"></input>
    <span >{{time3Formatter}}</span>
  </div>
  <hr/>
  <div>
    <h3>时区</h3>
   <input v-model="tz1"></input>
    <span >{{tz1_str}}</span>
  </div>
  <hr/>
  <div>
    <div v-for="(item,index) in opMap" :key="index">{{index}}: {{item}}</div>
  </div>

</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
input {
  width: 300px;
  padding: 5px 10px;
}
div {
  margin-top: 20px;
}
span {
  margin-left: 20px;
}
.input-answer {
  width: 30px;
}
.content {
  display: flex;
}
hr{
  margin: 30px 0;
}
</style>

//赛程提交表单
<template>
  <mu-container>
    <mu-date-input v-model="value" label="日期" container="bottomSheet" label-float></mu-date-input>
    <br>
    <mu-text-field v-model="item" label="比赛项目" label-float></mu-text-field>
    <br>
    <mu-select label="状态：决赛或者预赛" v-model="state">
      <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
    </mu-select>
    <br>
    <mu-date-input
      type="time"
      landscape
      label="选择时间"
      label-float
      v-model="time"
      container="bottomSheet"
    ></mu-date-input>
    <br>
    <mu-button color="success" @click="subSche">提交</mu-button>
  </mu-container>
</template>
<style>
</style>

<script>
import { close } from 'fs';
export default {
  data() {
    return {
      item: null,
      value6: null,
      value: undefined, //日期
      options: ["决赛", "预赛"],
      state: null,
      time: undefined,
      landscape: false,
      display: true,
      type: "24hr",
      viewType: "list",
      showflag: false
    };
  },
  components: {},
  methods: {
    showTime: function() {
      this.showflag = true;
    },
    visTime: function() {
      this.showflag = false;
    },
    subSche: function() {

      console.log(this.time.getHours());
      let that=this;
      this.axios
        .post("https://csdn.design/temp/submit", {
          state:that.state,
          time:that.time,
          item:that.item
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  //  mounted: function() {
  //   let that=this;
  //   this.axios.get('https://csdn.design/temp', {
  // })
  // .then(function (response) {
  //   that.list=response.data;
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // }
};
</script>

<style>
</style>
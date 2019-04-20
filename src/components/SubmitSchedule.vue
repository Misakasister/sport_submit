//赛程提交表单
<template>
  <mu-container>
    <mu-date-input v-model="date" label="日期" container="bottomSheet" label-float></mu-date-input>
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

export default {
  data() {
    return {
      item: null,
      date: undefined, //日期
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
     let subtime=[];
     let i;
     for(i=0;i<17;i++){
       subtime[i]=this.date.toUTCString()[i];
     }
     for(i=17;i<=this.time.toUTCString().length;i++){
        subtime[i]=this.time.toUTCString()[i];
     }
      let that=this;
      this.axios
        .post("https://csdn.design/temp/submit", {
          state:that.state,
          time:subtime.join(''),
          item:that.item
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
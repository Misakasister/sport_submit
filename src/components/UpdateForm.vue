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
    <mu-row>
      <mu-col span="6">
        <mu-button color="success" @click.stop="update">修改这条记录</mu-button>
      </mu-col>
      <mu-col span="6">
        <mu-button color="warning" class="font" @click.stop="drop">删除这条记录</mu-button>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
<style>
</style>

<script>
export default {
  props: ["updateId"],
  data() {
    return {
      date: null,
      time: null,
      item: null,
      options: ["决赛", "预赛"],
      state: null,
      alterId: null
    };
  },
  methods: {
    drop: function() {
      var str = "https://csdn.design/temp/" + this.alterId + "/delete";
      this.axios
        .get(str, {})
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update: function() {
      let that = this;
      //时间拼接
      let subtime = [];
      let i;
      for (i = 0; i < 17; i++) {
        subtime[i] = this.date.toUTCString()[i];
      }
      for (i = 17; i <= this.time.toUTCString().length; i++) {
        subtime[i] = this.time.toUTCString()[i];
      }
      this.axios
        .post("https://csdn.design/temp/edit", {
          id: that.updateId,
          time: subtime.join(""),
          state: that.state,
          item: that.item
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  components: {},
  mounted: function() {
    let that = this;
    var str = "https://csdn.design/temp/schedule/" + this.updateId;
    this.axios
      .get(str, {})
      .then(function(response) {
        that.item = response.data[0].item;
        that.time = response.data[0].time;
        that.state = response.data[0].state;
        that.alterId = response.data[0].id;
        that.date = response.data[0].time;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style>
.font {
  color: black !important;
}
</style>
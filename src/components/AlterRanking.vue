<template>
  <mu-container>
    <mu-row fluid>
      <p>当前正在修改第{{alterId+1}}名</p>
      <mu-col span="12">
        <mu-select label="学院" v-model="college" class="w">
          <mu-option v-for="option in colleges" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col span="12">
        <mu-text-field v-model="name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="score" label="成绩(请带上单位)" label-float class="w"></mu-text-field>
      </mu-col>
    </mu-row>
    <mu-row fluid>
      <mu-col span="4" offset="8">
        <mu-button color="success">修改</mu-button>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
export default {
  props: ["alterId"],
  data() {
    return {
      college: null,
      name: null,
      score: null,
      colleges: []
    };
  },
  mounted: function() {
    //填载学院名
    let that = this;
    let i;
    this.axios
      .get("https://api.youthol.cn/api/college")
      .then(function(response) {
        for (i = 0; i < response.data.data.length; i++) {
          that.colleges.push(response.data.data[i].name);
        }
      });
  }
};
</script>


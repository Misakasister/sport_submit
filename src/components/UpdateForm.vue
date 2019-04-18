//赛程提交表单
<template>
    <mu-container>
      <mu-date-input   v-model="value" label="日期" container="bottomSheet" label-float ></mu-date-input><br/>
  <mu-text-field v-model="value2" label="比赛项目" label-float></mu-text-field><br/>
<mu-select label="状态：决赛或者预赛" v-model="normal.value1">
        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select><br/>
      <mu-date-input type="time" landscape label="选择时间" label-float v-model="time" container="bottomSheet"></mu-date-input><br/>
      <mu-row>
        <mu-col span=6>
      <mu-button color="success">修改这条记录</mu-button>
      </mu-col><mu-col span=6>
      <mu-button color="warning" class="font">删除这条记录</mu-button>
      </mu-col>
      </mu-row>
</mu-container>
</template>
<style>

</style>

<script>
export default {
  data () {
    return {
     value:null,
     time:null,
     value2:null,
     options: [
        '决赛','预赛'
      ],
      normal: {
        value1: '',
        value2: '',
      }
    }
  },
  components:{
  },
};
</script>

<style>
.font{
  color:black !important;
}
</style>
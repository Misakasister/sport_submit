//赛程提交表单
<template>
    <mu-container>
  <mu-text-field v-model="item" label="比赛项目" label-float></mu-text-field><br/>
<mu-select label="状态：决赛或者预赛" v-model="normal.value1">
        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select><br/>



       <mu-date-input type="time" landscape label="选择时间" label-float v-model="time" container="bottomSheet"></mu-date-input><br/>



      <mu-button color="success">提交</mu-button>
</mu-container>
</template>
<style>
.timeP{
  display:none;
}
</style>

<script>
export default {
  data () {
    return {
      item:null,
      value6:null,
     options: [
        '决赛','预赛'
      ],
      normal: {
        value1: '',
        value2: '',
      },
      time: undefined,
      landscape: false,
      display: true,
      type: '24hr',
      viewType: 'list',
      showflag:false
    }
    },
  components:{
  },
  methods:{
    showTime:function(){
      this.showflag=true;
    },
    visTime:function(){
      this.showflag=false;
    }
  }
};
</script>

<style>

</style>
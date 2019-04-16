<template>
  <div id="app" class="grid">
 <Bar></Bar>
    <router-view>
      <router-link to="/"><SubmitSchedule></SubmitSchedule></router-link>|
      <router-link to="/notice"></router-link>
      <router-link to="/medal"></router-link>
    </router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
import Bar from '@/components/Bar'
import SubmitSchedule from '@/components/SubmitSchedule'
export default {
  data:function(){
    return{

    }
  },
  methods:{},
  components:{
    SubmitSchedule,
    Bar
  }
}
</script>

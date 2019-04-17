//顶部菜单
<template>
  <mu-appbar style="width:100%;" color="primary">
    <button color="primary" @click="open = !open" class="menu" slot="left">菜单</button>
    <div class="mmf">
      <button color="primary"  slot="left" class="mm" @click.stop="goToSubSchedule">提交、修改赛程</button>
      <button color="primary"  slot="left" class="mm" @click.stop="goToSubRanking">提交决赛名次</button>
      <button color="primary"  slot="left" class="mm" @click.stop="goToAlterRanking">修改决赛名次</button>
    </div>
    <span slot="right" class="right">运动会后台</span>
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button to="/">
          <mu-list-item-title>提交、修改赛程</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button to="/subranking">
          <mu-list-item-title>提交决赛名次</mu-list-item-title>
        </mu-list-item>
         <mu-list-item button to="/alterranking">
          <mu-list-item-title>修改决赛名次</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </mu-appbar>
</template>
<style>
@media screen and (min-width:768px) {
  .menu{
    display: none;
  }
  .mmf{
    display: block;
  }
}

@media screen and (max-width:768px){
  .menu{
    display: block;
  }
  .mmf{
    display:none;
  }
}
.mm{
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-left: 16px;
  color: white;
}
.mm:hover{
  color: burlywood;
}
.mmf{
  float: left;
}
.right {
  margin-right: 16px;
  color: white;
  font-size: 36px;
}
.menu {
  border: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  margin-left: 16px;
  color: white;
  font-size: 24px;
}
</style>

<script>
export default {
  data() {
    return {
      docked: false,
      open: false,
      position: "left"
    };
  },
  methods:{
    goToSubSchedule:function(){
      this.$router.push({path:'/'})
    },
    goToSubRanking:function(){
      this.$router.push({path:'/subranking'})
    },
    goToAlterRanking:function(){
      this.$router.push({path:'/alterranking'})
    },
  }
};
</script>

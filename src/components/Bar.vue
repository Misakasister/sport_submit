//顶部菜单
<template>
  <mu-appbar style="width:100%;" color="primary"  >
    
  <button color="primary" @click="open = !open" class="menu" slot="left">菜单</button>
<span slot="right">运动会后台</span>
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </mu-appbar>
</template>
<style>

/* .mu-appbar-title {
  display: flex;
  align-items: center;
  text-align: center;
} */
span {
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
      position: "left",
    };
  },
 
};
</script>

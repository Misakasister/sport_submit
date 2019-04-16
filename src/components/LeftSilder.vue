//菜单滑块
<template>
<mu-container>
  <mu-flex justify-content="center" align-items="center">
    <mu-button color="primary" style="margin-left: 16px" @click="open = !open">
      toggle
    </mu-button>
  </mu-flex>
  <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
    <mu-list>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="open = false" button>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
</mu-container>
</template>
<script>
export default {
  data () {
    return {
      docked: false,
      open: false,
      position: 'left'
    }
  }
}
</script>
//修改赛程的按钮
<template>
    <mu-container>
  <mu-flex justify-content="center">
    <mu-button @click="openSimpleDialog(tranId)" color='error'>修改</mu-button>
  </mu-flex>
  <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
      {{tranid}}
    <UpdateForm></UpdateForm>
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
  </mu-dialog>
</mu-container>
</template>

<script>
import UpdateForm from '@/components/UpdateForm'
export default {
    props:["tranid"],
  data () {
    return {
      openSimple: false,
      value2:null
    };
  },
  methods: {
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    }
  },
  components:{
      UpdateForm
  },
};
</script>

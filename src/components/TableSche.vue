//赛程 展示表单
<template>
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 12)">
      <template slot-scope="scope">
        <td class="is-center">{{scope.row.item}}</td>
        <td class="is-center">{{scope.row.state}}</td>
        <td class="is-center">{{scope.row.time}}</td>
        <td class="is-center"><mu-button color="secondary" @click="openSimpleDialog">修改</mu-button></td>
      </template>
    </mu-data-table>
  </mu-paper>
<!-- 弹出框 -->
   <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
    <UpdateForm></UpdateForm>
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
  </mu-dialog>
<!-- 分页器 -->
  <mu-flex justify-content="center" class="pag">
    <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
  </mu-flex>

</mu-container>
</template>
<style>
.update{
  margin-top: 6px;
}

.pag{
  margin-top: 20px;
}
</style>

<script>
import UpdateForm from '@/components/UpdateForm'
export default {
  data () {
    return {
       openSimple: false,
      current: 1,
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: '项目',  name: 'item' ,align: 'center'},
          { title: '状态', name: 'state',align: 'center' },
          { title: '时间', name: 'time' ,align: 'center'},
          { title: '修改', name: 'update' ,align: 'center'},
      ],
      list: [
        {
            item:'跑步',
            state:'预赛',
            time:'9.30'
          },
        {
            item:'跑步',
            state:'预赛',
            time:'9.30'
          },
         {
            item:'跑步',
            state:'预赛',
            time:'9.30'
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    }
  },
  components:{
    UpdateForm
  }
};
</script>
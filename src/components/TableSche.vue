//赛程 展示表单
<template>
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 12)">
      <template slot-scope="scope">
        <td class="is-center">{{scope.row.item}}</td>
        <td class="is-center">{{scope.row.state}}</td>
        <td class="is-center">{{scope.row.time}}</td>
        <UpdateButton class="update" :tranid="scope.$index"></UpdateButton>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
</template>
<style>
.update{
  margin-top: 6px;
}
</style>

<script>
import UpdateButton from '@/components/UpdateButton'
export default {
  data () {
    return {
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
    tranId:function(el){
      console.log(el);
    },
    ss(){
      console.log("点击了");
    }
  },
  components:{
    UpdateButton
  }
};
</script>
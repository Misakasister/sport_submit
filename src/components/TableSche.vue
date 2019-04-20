//赛程 展示表单
<template>
  <mu-container>
    <mu-paper :z-depth="1">
      <mu-data-table
        stripe
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="showList"
        ref="dom"
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.item}}</td>
          <td class="is-center">{{scope.row.state}}</td>
          <td class="is-center">{{scope.row.subtime}}</td>
          <td class="is-center">
            <mu-button color="secondary" @click="openSimpleDialog(scope.$index)">修改</mu-button>
          </td>
        </template>
      </mu-data-table>
    </mu-paper>
    <!-- 弹出框 -->
    <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
      <UpdateForm :updateId="updateId"></UpdateForm>
      <mu-button slot="actions" flat color="primary" @click.stop="closeSimpleDialog">Close</mu-button>
    </mu-dialog>
    <!-- 分页器 -->
    <mu-flex justify-content="center" class="pag">
      <mu-pagination raised circle :total="length" :current.sync="current" @change="handleSizeChange"></mu-pagination>
    </mu-flex>
  </mu-container>
</template>
<style>
.update {
  margin-top: 6px;
}

.pag {
  margin-top: 20px;
}
</style>

<script>
import UpdateForm from "@/components/UpdateForm";
export default {
  data() {
    return {
      updateId: null,
      openSimple: false,
      current: 1,
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "项目", name: "item", align: "center" },
        { title: "状态", name: "state", align: "center" },
        { title: "时间", name: "time", align: "center" },
        { title: "修改", name: "update", align: "center" }
      ],
      list: [],
      current:1,
      showListStart:0,
      showListEnd:10,
      showList:null,
      length:null,
    };
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
    openSimpleDialog(id) {
      this.updateId = this.list[id].id;
        // console.log(this.current);
        this.openSimple = true;
    },
    closeSimpleDialog() {
      this.openSimple = false;
    },
    handleSizeChange(){
      console.log(this.current);
      console.log(this.$refs.dom);
      this.showListStart=(this.current-1)*10;
      this.showListEnd=this.showListStart+10;
      this.showList=this.list.slice(this.showListStart,this.showListEnd);
    }
  },
  components: {
    UpdateForm
  },
  //更新表格的标志
  created: function() {
    let that = this;
    this.bus.$on("updata", function(flag) {
      if (flag) {
        that.axios
          .get("https://csdn.design/temp", {})
          .then(function(response) {
            that.list = response.data;
            //时间排序
            for (let i = 0; i < that.list.length - 1; i++) {
              for (let j = 0; j < that.list.length - 1 - i; j++) {
                if (that.list[j].time > that.list[j + 1].time) {
                  let t = that.list[j];
                  that.list[j] = that.list[j + 1];
                  that.list[j + 1] = t;
                }
              }
            }
            //时间格式化
            for (let i = 0; i < that.list.length; i++) {
              that.list[i].time = new Date(that.list[i].time);
              let year = that.list[i].time.getFullYear();
              let month = that.list[i].time.getMonth() + 1;
              let day = that.list[i].time.getDate();
              let hour = that.list[i].time.getHours();
              let min = that.list[i].time.getMinutes();
              let timestr =
                year + "-" + month + "-" + day + " " + hour + ":" + min;
              that.list[i].subtime = timestr;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    });
  },
  mounted: function() {
    let that = this;
    this.axios
      .get("https://csdn.design/temp", {})
      .then(function(response) {
        that.list = response.data;
        //时间排序
        for (let i = 0; i < that.list.length - 1; i++) {
          for (let j = 0; j < that.list.length - 1 - i; j++) {
            if (that.list[j].time > that.list[j + 1].time) {
              let t = that.list[j];
              that.list[j] = that.list[j + 1];
              that.list[j + 1] = t;
            }
          }
        }
        //时间格式化
        for (let i = 0; i < that.list.length; i++) {
          that.list[i].time = new Date(that.list[i].time);
          let year = that.list[i].time.getFullYear();
          let month = that.list[i].time.getMonth() + 1;
          let day = that.list[i].time.getDate();
          let hour = that.list[i].time.getHours();
          let min = that.list[i].time.getMinutes();
          let timestr = year + "-" + month + "-" + day + " " + hour + ":" + min;
          that.list[i].subtime = timestr;
        }
        that.length=that.list.length;
        that.showList=that.list.slice(that.showListStart,that.showListEnd);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
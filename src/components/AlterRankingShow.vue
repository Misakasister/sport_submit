<template>
  <mu-container>
    <mu-row>
      <mu-col span="8">
        <mu-select label="项目名" filterable v-model="filterable.value1" full-width>
          <mu-option v-for="city in citys" :key="city" :label="city" :value="city"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col span="4" class="search">
        <mu-button color="error">查询</mu-button>
      </mu-col>
    </mu-row>

    <mu-paper :z-depth="1">
      <mu-data-table
        :columns="columns"
        :data="list.slice(0, 6)"
      >
        <template slot-scope="scope">
          <td class="is-center">{{scope.row.place}}</td>
          <td class="is-center">{{scope.row.college}}</td>
          <td class="is-center">{{scope.row.name}}</td>
          <td class="is-center">{{scope.row.score}}</td>
          <td class="is-center"><mu-button color="secondary" @click="openSimpleDialog(scope.$index)">修改</mu-button></td>
        </template>
      </mu-data-table>
    </mu-paper>
     <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
    <AlterRanking :alterId='alterId'></AlterRanking>
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
  </mu-dialog>
  </mu-container>
</template>
<style>
.search {
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import AlterRanking from '@/components/AlterRanking'
export default {
  data() {
    return {
      alterId:null,
      openSimple: false,
      citys: ["Alabama", "Alaska", "Wyoming"],
      filterable: {
        value1: "",
        value2: [],
        value3: []
      },
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        {
          title: "名次",
          name: "place",
          align: "center",
        },
        {
          title: "学院",
          name: "college",
          align: "center",
     
        },
        {
          title: "姓名",
          name: "name",
          align: "center",
      
        },
        {
          title: "成绩",
          name: "score",
          align: "center",
      
        },
        {
          title: "修改",
          name: "alter",
          align: "center",
      
        }
      ],
      list: [
        {
          place:1,
          college:"建工",
          name:"xxx",
          score:"9.6"
        },
          {
          place:1,
          college:"建工",
          name:"xxx",
          score:"9.6"
        },
          {
          place:1,
          college:"建工",
          name:"xxx",
          score:"9.6"
        },
  {
          place:1,
          college:"建工",
          name:"xxx",
          score:"9.6"
        },
          {
          place:1,
          college:"建工",
          name:"xxx",
          score:"9.6"
        },
          {
          place:1,
          college:"建工",
          name:"xxx",
          score:"9.6"
        }
      ]
    };
  },
   methods: {
      handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    openSimpleDialog (p) {
      this.alterId=p;
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    }
  },
  components:{
    AlterRanking
  }
};
</script>


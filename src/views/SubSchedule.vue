//赛程提交视图
<template>
  <mu-container>
    <h1>提交赛程</h1>
    <mu-row>
      <mu-col sm="12" md="12" lg="6" xl="6" class="sub">
        <SubmitSchedule></SubmitSchedule>
      </mu-col>
      <mu-col sm="12" md="12" lg="6" xl="6">
        <TableSche></TableSche>
      </mu-col>
    </mu-row>
  </mu-container>
</template>

<script>
import TableSche from "@/components/TableSche";
import SubmitSchedule from "@/components/SubmitSchedule";
export default {
  data: function() {
    return {};
  },
  components: {
    SubmitSchedule,
    TableSche
  }
};
</script>

<style>
.sub{
  margin-bottom: 20px;
}
</style>



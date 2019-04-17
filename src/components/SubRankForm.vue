<template>
  <mu-container>
    <mu-select label="项目名" filterable v-model="filterable.value1" full-width>
      <mu-option v-for="city in citys" :key="city" :label="city" :value="city"></mu-option>
    </mu-select>
    <mu-row fluid>
      <mu-col sm="12" md="12" lg="3" xl="3" class="H">
        <p>第一名：</p>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-select label="学院" v-model="list[0].college"  class="w">
          <mu-option v-for="option in college" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[0].name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[0].score" label="成绩(请带上单位)" label-float  class="w"></mu-text-field>
      </mu-col>
    </mu-row>

    <mu-row fluid>
      <mu-col sm="12" md="12" lg="3" xl="3" class="H">
        <p>第二名：</p>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-select label="学院" v-model="list[1].college"  class="w">
          <mu-option v-for="option in college" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[1].name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[1].score" label="成绩(请带上单位)" label-float  class="w"></mu-text-field>
      </mu-col>
    </mu-row>

    <mu-row fluid>
      <mu-col sm="12" md="12" lg="3" xl="3" class="H">
        <p>第三名：</p>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-select label="学院" v-model="list[2].college"  class="w">
          <mu-option v-for="option in college" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[2].name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[2].score" label="成绩(请带上单位)" label-float  class="w"></mu-text-field>
      </mu-col>
    </mu-row>

    <mu-row fluid>
      <mu-col sm="12" md="12" lg="3" xl="3" class="H">
        <p>第四名：</p>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-select label="学院" v-model="list[3].college"  class="w">
          <mu-option v-for="option in college" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[3].name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[3].score" label="成绩(请带上单位)" label-float  class="w"></mu-text-field>
      </mu-col>
    </mu-row>

    <mu-row fluid>
      <mu-col sm="12" md="12" lg="3" xl="3" class="H">
        <p>第五名：</p>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-select label="学院" v-model="list[4].college"  class="w">
          <mu-option v-for="option in college" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[4].name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[4].score" label="成绩(请带上单位)" label-float  class="w"></mu-text-field>
      </mu-col>
    </mu-row>

    <mu-row fluid>
      <mu-col sm="12" md="12" lg="3" xl="3" class="H">
        <p>第六名：</p>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-select label="学院" v-model="list[5].college"  class="w">
          <mu-option v-for="option in college" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[5].name" label="姓名" label-float class="w"></mu-text-field>
      </mu-col>
      <mu-col sm="12" md="4" lg="3" xl="3">
        <mu-text-field v-model="list[5].score" label="成绩(请带上单位)" label-float  class="w"></mu-text-field>
      </mu-col>
    </mu-row>
  </mu-container>
</template>
<style>
@media screen and (max-width: 577px) {
   .H{
       display:block !important;
       /* width: 300px !important; */
   } 
}
.H>p{
    line-height: 54px;
    font-size: 15px;
    font-weight: 500;
}
.w{
    width: 220px !important;
}
</style>
<script>
export default {
  data() {
    return {
    list:[{
        place:1,
        college:null,
        name:null,
        score:null,
    },
    {
        place:2,
        college:null,
        name:null,
        score:null,
    },
    {
        place:3,
        college:null,
        name:null,
        score:null,
    },
    {
        place:4,
        college:null,
        name:null,
        score:null,
    },
    {
        place:5,
        college:null,
        name:null,
        score:null,
    },
    {
        place:6,
        college:null,
        name:null,
        score:null,
    }
    ],
      citys: [
        "Alabama",
        "Alaska",
        "Wyoming"
      ],
      value6: null,
      value7: null,
      college: [],
      normal: {
        value1: "",
        value2: "",
        value3: "",
        value4: "Option 1",
        value5: "Option 2"
      },
      filterable: {
        value1: "",
        value2: [],
        value3: []
      }
    };
  },
  mounted: function() {
    //填载学院名
    let that = this;
    let i;
    this.axios
      .get("https://api.youthol.cn/api/college")
      .then(function(response) {
        for (i = 0; i < response.data.data.length; i++) {
          that.college.push(response.data.data[i].name);
        }
      });
  }
};
</script>


<template>
  <div class="wrapper">
    <!-- 商品档案清单 -->
    <div class="search_box">
      <el-form
        ref="form"
        :model="form"
        label-width="20px"
        class="flex_container"
      >
        <el-form-item>
          <el-input
            v-model="form.name"
            placeholder="条形码/商品全称"
            size="small"
          />
        </el-form-item>

        <el-form-item>
          <el-select v-model="form.type" placeholder="商品类型" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.brand" placeholder="商品品牌" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.package" placeholder="包装形式" size="small">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small" class="btn"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>

      <!-- table -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="img" label="24位图" fixed="left">
      </el-table-column>
      <el-table-column
        prop="product"
        label="商品全称"
        fixed="left"
        width="120,"
      >
      </el-table-column>
      <el-table-column prop="barCode" label="条形码"> </el-table-column>
      <el-table-column prop="packageCode" label="外观序号"> </el-table-column>
      <el-table-column prop="type" label="商品类型"> </el-table-column>
      <el-table-column prop="isSelf" label="本竞品"> </el-table-column>
      <el-table-column prop="brand" label="商品品牌"> </el-table-column>
      <el-table-column prop="packageType" label="包装形式"> </el-table-column>
      <el-table-column prop="status" label="印射状态"> </el-table-column>
      <el-table-column prop="time" label="新增时间"> </el-table-column>

      <el-table-column label="操作" width="220">
        <template slot-scope="{ row }">
          <el-button size="small" type="text">停用</el-button>
          <el-button size="small" type="text">映射</el-button>
          <el-button size="small" type="text">修改</el-button>
          <el-button size="small" type="text">详情</el-button>
          <el-button size="small" type="text">操作记录</el-button>
        </template>
      </el-table-column>
    </el-table>
   
  </div>
</template>

<script>
export default {
  name: "Produc",
  components: {
  
  },
  computed: {
  },
  data() {
    return {
      form: {
        keyword: "",
        type: "",
        brand: "",
        package: "",
      },
       tableData: [
        {
          img: "",
          product: "雪花-脸谱300ml",
          barCode: 692319381,
          packageCode: "11",
          type: "POSM",
          isSelf: "本品",
          brand: "雪花",
          AIID: "122331",
          status: "CRM",
          packageType: "瓶装",
          time: "2020-09-22",
          name: "脸谱300ml",
          reporter: "张三",
          phone: 18082823838,
          time: "2020-12-12 19:00:00",
        }
      ],
    };
  },
  methods: {
    onSubmit(){}
   
  },
};
</script>

<style lang="scss" scoped>

</style>

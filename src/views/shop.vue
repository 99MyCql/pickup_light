<template>
  <div id="shop">
    <!-- Main Menu Section -->
    <head-er></head-er>

    <page-header pageName="category"></page-header>

    <section class="product-category">
      <div class="container">
        <div class="row" v-for="(category, index) in this.categories" :key="index">
          <div :class="[index%2 == 1 ? 'col-sm-5 col-sm-push-7': 'col-sm-5']">
            <el-carousel height="250px">
              <el-carousel-item v-for="item in category.images" :key="item">
                <div class="category-box">
                  <a href=""><img :src="item" alt="" /></a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- carousel -->

          <div :class="[index%2 == 1 ? 'col-sm-7 col-sm-pull-4': 'col-sm-5 col-sm-offset-2']">
            <h1>{{ category.title }}</h1>
            <p v-html="category.description"></p>
          </div>
          <!-- content -->
        </div>
      </div>
    </section>

    <!-- Footer -->
    <foot-er></foot-er>
  </div>
</template>

<script>
import headEr from '@/components/header'
import footEr from '@/components/footer'
import pageHeader from '@/components/page-header'

export default {
  components: {
    headEr,
    footEr,
    pageHeader,
  },
  data() {
    return {
      categories: [
        {
          title: '笔记本款式',
          description: '品名：抗战地风景——瓦屋山宝藏禅寺笔记本<br>单位：3本一套<br>规格：50页<br>尺寸：130mm*180mm*20mm<br>重量：约293g<br>封面封底：压纹珠光纸<br>包装：塑封包装<br>内页：道林纸空白页+牛皮纸空白内页<br>书脊：硬壳裸脊<br>工艺：四色印刷、过油、烫金、印金、滚金边<br>颜色：藏蓝 枣红 象牙白<br>款式：瓦屋山 宝藏 禅寺',
          images: [
            require("../assets/shop/products/product-1.jpg"),
            require("../assets/shop/products/product-2.jpg"),
            require("../assets/shop/products/product-3.jpg"),
          ],
        },
        {
          title: '日历款式',
          description: '品名：战地风景——御水温泉日历<br>颜色：暖黄 紫粉 枫叶黄 冰蓝<br>内页数：370p<br>纸张材质：艺美特种纸<br>纸张克数：80g<br>尺寸：240mm*170mm*112mm<br>背板材质：进口荷兰板超韧细布<br>圆环类型：圆环<br>环扣材质：锌合金<br>款式：春  夏  秋  冬',
          images: [
            require("../assets/shop/products/product-4.jpg"),
            require("../assets/shop/products/product-5.jpg"),
            require("../assets/shop/products/product-6.jpg"),
            require("../assets/shop/products/product-15.jpg"),
          ],
        },
        {
          title: '帆布包款式',
          description: '品名：战役回忆——溧阳碉楼帆布包<br>尺寸：肩带垂直长：23cm<br>帆布包：长40cmx宽37cm<br>材质：帆布<br>工艺：喷印<br>颜色：白色、蓝色',
          images: [
            require("../assets/shop/products/product-7.jpg"),
            require("../assets/shop/products/product-8.jpg"),
            require("../assets/shop/products/product-9.jpg"),
          ]
        },
        {
          title: '便利贴产品',
          description: '品名：战地风景——瓦屋山宝藏禅寺便利贴<br>尺寸：84mm*136mm<br>材质：双胶纸<br>数量：80张<br>用途：备忘计划 留言记事 手账装饰<br>粘性：上端2cm有粘性<br>重量：30~50g',
          images: [
            require("../assets/shop/products/product-12.jpg"),
            require("../assets/shop/products/product-13.jpg"),
            require("../assets/shop/products/product-14.jpg"),
          ],
        },
        {
          title: '明信片款式',
          description: '品名：战地风景——御水温泉明信片<br>规格：15cm*10cm<br>页数：12张<br>材质：350g艺术纸<br>工艺：热压uv印刷<br>包装：塑封包装<br>尺寸：22cm*31cm<br>款式：春 夏 秋 冬',
          images: [
            require("../assets/shop/products/product-16.jpg"),
            require("../assets/shop/products/product-17.jpg"),
          ],
        },
        {
          title: '手机壳款式',
          description: '品名：励志名言——文字手机壳<br>材质：TPU、PET<br>工艺：IMD印刷<br>尺寸：长19*宽10.6*高1.8cm<br>款式：文字<br>型号：Iphone7/8、7P/8P、X/XS',
          images: [
            require("../assets/shop/products/product-10.jpg"),
            require("../assets/shop/products/product-11.jpg"),
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
#shop {
  background-color: #f3f3f3;
}

.product-category .row {
  margin-bottom: 100px;
}

@media (min-width: 768px) {
  .product-category .row {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .product-category .row h1 {
    text-align: center;
  }
  .product-category .row p {
    padding-left: 60px;
  }
}

.product-category .row h1 {
  color: #9d2933;
}
</style>
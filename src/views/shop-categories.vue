<template>
  <div id="shop">
    <!-- Main Menu Section -->
    <head-er></head-er>

    <page-header pageName="category"></page-header>

    <section class="product-category">
      <div class="container">
        <!-- range categories -->
        <div class="row" v-for="(category, index) in this.categories" :key="index">
          <div class="col-sm-5" :class="{'col-sm-push-7': index%2 == 1}">
            <el-carousel height="250px" indicator-position="outside">
              <!-- range category.products -->
              <el-carousel-item v-for="product in category.products" :key="product">
                <div class="category-box">
                  <a @click="toProduct(product)" style="cursor: pointer;"><img :src="product.imgUrl" alt="" /></a>
                </div>
              </el-carousel-item>
              <!-- ./range category.products -->
            </el-carousel>
          </div>
          <!-- ./carousel -->

          <div class="col-sm-7" :class="{'col-sm-pull-5': index%2 == 1}" style="padding-bottom: 50px;">
            <h1>{{ category.title }}</h1>
            <p v-html="category.content"></p>
          </div>
          <!-- ./content -->
        </div>
        <!-- ./range categories -->
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
import store from '@/store/index'

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
          title: '书签',
          content: '为了致敬所有在抗战中为国效劳的光荣战士，体现人文关怀，为退休老兵们创造更好的纪念方式。',
          products: [
            {
              name: '光荣抗战——纪念老兵书签套装',
              imgUrl: require("../assets/shop/products/product-20.jpg"),
              description: '设计尺寸（长x宽）： 120mm x 25mm<br>人物高度：40mm<br>书签高度：80mm<br>选用材质：160g着色硬牛皮纸（双面糙面，手感较好，较高厚度，容易保存。）<br>书签颜色：红棕<br>工艺：双面磨砂，前侧印白条框',
              otherImgs: [
                require("../assets/shop/products/product-21.jpg"),
                require("../assets/shop/products/product-22.jpg"),
                require("../assets/shop/products/product-23.jpg"),
                require("../assets/shop/products/product-24.jpg"),
                require("../assets/shop/products/product-25.jpg"),
              ]
            },
            {
              name: '光荣抗战——纪念老兵书签套装',
              imgUrl: require("../assets/shop/products/product-21.jpg"),
              description: '设计尺寸（长x宽）： 120mm x 25mm<br>人物高度：40mm<br>书签高度：80mm<br>选用材质：160g着色硬牛皮纸（双面糙面，手感较好，较高厚度，容易保存。）<br>书签颜色：红棕<br>工艺：双面磨砂，前侧印白条框',
              otherImgs: [
                require("../assets/shop/products/product-20.jpg"),
                require("../assets/shop/products/product-22.jpg"),
                require("../assets/shop/products/product-23.jpg"),
                require("../assets/shop/products/product-24.jpg"),
                require("../assets/shop/products/product-25.jpg"),
              ]
            },
          ],
        },
        {
          title: '帆布包 抱枕',
          content: '回忆溧阳大事记，为防范日军抢掠，溧阳前马成立自卫团以前马碉楼为制高点，武装保卫家园，前马碉楼不容小觑。',
          products: [
            {
              name: '战役回忆——溧阳碉楼帆布包',
              imgUrl: require("../assets/shop/products/product-7.jpg"),
              description: '尺寸：肩带垂直长：23cm<br>帆布包：长40cm x 宽37cm<br>材质：帆布<br>工艺：喷印<br>颜色：白色、蓝色',
              otherImgs: [
                require("../assets/shop/products/product-8.jpg"),
                require("../assets/shop/products/product-9.jpg"),
                require("../assets/shop/products/product-26.jpg"),
                require("../assets/shop/products/product-27.jpg"),
                require("../assets/shop/products/product-28.jpg"),
              ]
            },
            {
              name: '战役回忆——溧阳碉楼帆布包',
              imgUrl: require("../assets/shop/products/product-8.jpg"),
              description: '尺寸：肩带垂直长：23cm<br>帆布包：长40cm x 宽37cm<br>材质：帆布<br>工艺：喷印<br>颜色：白色、蓝色',
              otherImgs: [
                require("../assets/shop/products/product-7.jpg"),
                require("../assets/shop/products/product-9.jpg"),
                require("../assets/shop/products/product-26.jpg"),
                require("../assets/shop/products/product-27.jpg"),
                require("../assets/shop/products/product-28.jpg"),
              ]
            },
            {
              name: '战役回忆——溧阳碉楼帆布包',
              imgUrl: require("../assets/shop/products/product-9.jpg"),
              description: '尺寸：肩带垂直长：23cm<br>帆布包：长40cm x 宽37cm<br>材质：帆布<br>工艺：喷印<br>颜色：白色、蓝色',
              otherImgs: [
                require("../assets/shop/products/product-8.jpg"),
                require("../assets/shop/products/product-7.jpg"),
                require("../assets/shop/products/product-26.jpg"),
                require("../assets/shop/products/product-27.jpg"),
                require("../assets/shop/products/product-28.jpg"),
              ]
            },
            {
              name: '战役回忆——溧阳碉楼抱枕',
              imgUrl: require("../assets/shop/products/product-19.jpg"),
              description: '材质：聚酯纤维<br>工艺：双面印花<br>尺寸：长45 x 宽45cm<br>规格：件<br>颜色：白色、橙色',
              otherImgs: [
                require("../assets/shop/products/product-26.jpg"),
                require("../assets/shop/products/product-27.jpg"),
              ]
            },
          ]
        },
        {
          title: '手机壳',
          content: '抗战时期的励志名言，激励当代人要时刻充满着对生活积极的态度，对未来不惧挑战的精神。',
          products: [
            {
              name: '励志名言——文字手机壳',
              imgUrl: require("../assets/shop/products/product-10.jpg"),
              description: '材质：TPU、PET<br>工艺：IMD印刷<br>尺寸：长19*宽10.6*高1.8cm<br>款式：文字<br>型号：Iphone7/8、7P/8P、X/XS',
              otherImgs: [
                require("../assets/shop/products/product-11.jpg"),
              ]
            },
            {
              name: '励志名言——文字手机壳',
              imgUrl: require("../assets/shop/products/product-11.jpg"),
              description: '材质：TPU、PET<br>工艺：IMD印刷<br>尺寸：长19*宽10.6*高1.8cm<br>款式：文字<br>型号：Iphone7/8、7P/8P、X/XS',
              otherImgs: [
                require("../assets/shop/products/product-10.jpg"),
              ]
            },
          ]
        },
        {
          title: '笔记本 橡皮擦 便利贴',
          content: '溧阳是老兵们充满回忆的老城，溧阳的瓦屋山宝藏禅寺历史悠久，见证了红军革命历程的点点滴滴。',
          products: [
            {
              name: '抗战地风景——瓦屋山宝藏禅寺橡皮擦',
              imgUrl: require("../assets/shop/products/product-18.jpg"),
              description: '单位：6组一套<br>规格：每块长4cm 宽2.5cm 厚0.9cm<br>材质：环保热塑塑料<br>颜色：藏蓝 枣红 象牙黄<br>工艺：花纹印刷<br>款式：瓦屋山 禅 意 寺 象 藏',
              otherImgs: [
                require("../assets/shop/products/product-29.jpg"),
                require("../assets/shop/products/product-30.jpg"),
                require("../assets/shop/products/product-31.jpg"),
                require("../assets/shop/products/product-32.jpg"),
                require("../assets/shop/products/product-33.jpg"),
                require("../assets/shop/products/product-34.jpg"),
              ]
            },
            {
              name: '抗战地风景——瓦屋山宝藏禅寺笔记本',
              imgUrl: require("../assets/shop/products/product-1.jpg"),
              description: '单位：3本一套<br>规格：50页<br>尺寸：130mm x 180mm x 20mm<br>重量：约293g<br>封面封底：压纹珠光纸<br>包装：塑封包装<br>内页：道林纸空白页+牛皮纸空白内页<br>书脊：硬壳裸脊<br>工艺：四色印刷、过油、烫金、印金、滚金边<br>颜色：藏蓝 枣红 象牙白<br>款式：瓦屋山 宝藏 禅寺',
              otherImgs: [
                require("../assets/shop/products/product-37.jpg"),
                require("../assets/shop/products/product-2.jpg"),
                require("../assets/shop/products/product-36.jpg"),
                require("../assets/shop/products/product-3.jpg"),
                require("../assets/shop/products/product-35.jpg"),
              ]
            },
            {
              name: '抗战地风景——瓦屋山宝藏禅寺笔记本',
              imgUrl: require("../assets/shop/products/product-2.jpg"),
              description: '单位：3本一套<br>规格：50页<br>尺寸：130mm x 180mm x 20mm<br>重量：约293g<br>封面封底：压纹珠光纸<br>包装：塑封包装<br>内页：道林纸空白页+牛皮纸空白内页<br>书脊：硬壳裸脊<br>工艺：四色印刷、过油、烫金、印金、滚金边<br>颜色：藏蓝 枣红 象牙白<br>款式：瓦屋山 宝藏 禅寺',
              otherImgs: [
                require("../assets/shop/products/product-36.jpg"),
                require("../assets/shop/products/product-1.jpg"),
                require("../assets/shop/products/product-37.jpg"),
                require("../assets/shop/products/product-3.jpg"),
                require("../assets/shop/products/product-35.jpg"),
              ]
            },
            {
              name: '抗战地风景——瓦屋山宝藏禅寺笔记本',
              imgUrl: require("../assets/shop/products/product-3.jpg"),
              description: '单位：3本一套<br>规格：50页<br>尺寸：130mm x 180mm x 20mm<br>重量：约293g<br>封面封底：压纹珠光纸<br>包装：塑封包装<br>内页：道林纸空白页+牛皮纸空白内页<br>书脊：硬壳裸脊<br>工艺：四色印刷、过油、烫金、印金、滚金边<br>颜色：藏蓝 枣红 象牙白<br>款式：瓦屋山 宝藏 禅寺',
              otherImgs: [
                require("../assets/shop/products/product-35.jpg"),
                require("../assets/shop/products/product-1.jpg"),
                require("../assets/shop/products/product-37.jpg"),
                require("../assets/shop/products/product-2.jpg"),
                require("../assets/shop/products/product-36.jpg"),
              ]
            },
            {
              name: '战地风景——瓦屋山宝藏禅寺便利贴',
              imgUrl: require("../assets/shop/products/product-12.jpg"),
              description: '尺寸：84mm x 136mm<br>材质：双胶纸<br>数量：80张<br>用途：备忘计划 留言记事 手账装饰<br>粘性：上端2cm有粘性<br>重量：30~50g',
              otherImgs: [
                require("../assets/shop/products/product-36.jpg"),
                require("../assets/shop/products/product-13.jpg"),
                require("../assets/shop/products/product-35.jpg"),
                require("../assets/shop/products/product-14.jpg"),
                require("../assets/shop/products/product-37.jpg"),
              ]
            },
            {
              name: '战地风景——瓦屋山宝藏禅寺便利贴',
              imgUrl: require("../assets/shop/products/product-13.jpg"),
              description: '尺寸：84mm x 136mm<br>材质：双胶纸<br>数量：80张<br>用途：备忘计划 留言记事 手账装饰<br>粘性：上端2cm有粘性<br>重量：30~50g',
              otherImgs: [
                require("../assets/shop/products/product-35.jpg"),
                require("../assets/shop/products/product-12.jpg"),
                require("../assets/shop/products/product-36.jpg"),
                require("../assets/shop/products/product-14.jpg"),
                require("../assets/shop/products/product-37.jpg"),
              ]
            },
            {
              name: '战地风景——瓦屋山宝藏禅寺便利贴',
              imgUrl: require("../assets/shop/products/product-14.jpg"),
              description: '尺寸：84mm x 136mm<br>材质：双胶纸<br>数量：80张<br>用途：备忘计划 留言记事 手账装饰<br>粘性：上端2cm有粘性<br>重量：30~50g',
              otherImgs: [
                require("../assets/shop/products/product-37.jpg"),
                require("../assets/shop/products/product-12.jpg"),
                require("../assets/shop/products/product-36.jpg"),
                require("../assets/shop/products/product-13.jpg"),
                require("../assets/shop/products/product-35.jpg"),
              ]
            },
          ],
        },
        {
          title: '明信片 日历',
          content: '小桥流水，山溪潺潺，古树挺拔，春去秋来，乍暖还寒，一年四季不只是氲氤绕梁，更是交织着那些记忆的温暖。',
          products: [
            {
              name: '战地风景——御水温泉日历',
              imgUrl: require("../assets/shop/products/product-6.jpg"),
              description: '颜色：暖黄 紫粉 枫叶黄 冰蓝<br>内页数：370p<br>纸张材质：艺美特种纸<br>纸张克数：80g<br>尺寸：240mm x 170mm x 112mm<br>背板材质：进口荷兰板超韧细布<br>圆环类型：圆环<br>环扣材质：锌合金<br>款式：春  夏  秋  冬',
              otherImgs: [
                require("../assets/shop/products/product-38.jpg"),
                require("../assets/shop/products/product-15.jpg"),
                require("../assets/shop/products/product-39.jpg"),
                require("../assets/shop/products/product-5.jpg"),
                require("../assets/shop/products/product-40.jpg"),
                require("../assets/shop/products/product-4.jpg"),
                require("../assets/shop/products/product-41.jpg"),
              ]
            },
            {
              name: '战地风景——御水温泉日历',
              imgUrl: require("../assets/shop/products/product-15.jpg"),
              description: '颜色：暖黄 紫粉 枫叶黄 冰蓝<br>内页数：370p<br>纸张材质：艺美特种纸<br>纸张克数：80g<br>尺寸：240mm x 170mm x 112mm<br>背板材质：进口荷兰板超韧细布<br>圆环类型：圆环<br>环扣材质：锌合金<br>款式：春  夏  秋  冬',
              otherImgs: [
                require("../assets/shop/products/product-39.jpg"),
                require("../assets/shop/products/product-5.jpg"),
                require("../assets/shop/products/product-40.jpg"),
                require("../assets/shop/products/product-4.jpg"),
                require("../assets/shop/products/product-41.jpg"),
                require("../assets/shop/products/product-6.jpg"),
                require("../assets/shop/products/product-38.jpg"),
              ]
            },
            {
              name: '战地风景——御水温泉日历',
              imgUrl: require("../assets/shop/products/product-5.jpg"),
              description: '颜色：暖黄 紫粉 枫叶黄 冰蓝<br>内页数：370p<br>纸张材质：艺美特种纸<br>纸张克数：80g<br>尺寸：240mm x 170mm x 112mm<br>背板材质：进口荷兰板超韧细布<br>圆环类型：圆环<br>环扣材质：锌合金<br>款式：春  夏  秋  冬',
              otherImgs: [
                require("../assets/shop/products/product-40.jpg"),
                require("../assets/shop/products/product-4.jpg"),
                require("../assets/shop/products/product-41.jpg"),
                require("../assets/shop/products/product-6.jpg"),
                require("../assets/shop/products/product-38.jpg"),
                require("../assets/shop/products/product-15.jpg"),
                require("../assets/shop/products/product-39.jpg"),
              ]
            },
            {
              name: '战地风景——御水温泉日历',
              imgUrl: require("../assets/shop/products/product-4.jpg"),
              description: '颜色：暖黄 紫粉 枫叶黄 冰蓝<br>内页数：370p<br>纸张材质：艺美特种纸<br>纸张克数：80g<br>尺寸：240mm x 170mm x 112mm<br>背板材质：进口荷兰板超韧细布<br>圆环类型：圆环<br>环扣材质：锌合金<br>款式：春  夏  秋  冬',
              otherImgs: [
                require("../assets/shop/products/product-41.jpg"),
                require("../assets/shop/products/product-6.jpg"),
                require("../assets/shop/products/product-38.jpg"),
                require("../assets/shop/products/product-15.jpg"),
                require("../assets/shop/products/product-39.jpg"),
                require("../assets/shop/products/product-5.jpg"),
                require("../assets/shop/products/product-40.jpg"),
              ]
            },
            {
              name: '战地风景——御水温泉明信片',
              imgUrl: require("../assets/shop/products/product-16.jpg"),
              description: '规格：15cm x 10cm<br>页数：12张<br>材质：350g艺术纸<br>工艺：热压uv印刷<br>包装：塑封包装<br>尺寸：22cm x 31cm<br>款式：春 夏 秋 冬',
              otherImgs: [
                require("../assets/shop/products/product-42.jpg"),
                require("../assets/shop/products/product-43.jpg"),
                require("../assets/shop/products/product-17.jpg"),
                require("../assets/shop/products/product-44.jpg"),
                require("../assets/shop/products/product-45.jpg"),
              ]
            },
            {
              name: '战地风景——御水温泉明信片',
              imgUrl: require("../assets/shop/products/product-17.jpg"),
              description: '规格：15cm x 10cm<br>页数：12张<br>材质：350g艺术纸<br>工艺：热压uv印刷<br>包装：塑封包装<br>尺寸：22cm x 31cm<br>款式：春 夏 秋 冬',
              otherImgs: [
                require("../assets/shop/products/product-44.jpg"),
                require("../assets/shop/products/product-45.jpg"),
                require("../assets/shop/products/product-16.jpg"),
                require("../assets/shop/products/product-42.jpg"),
                require("../assets/shop/products/product-43.jpg"),
              ]
            },
          ],
        },
      ]
    }
  },
  methods: {
    toProduct(product) {
      console.log(product)
      store.commit('setProduct', product)
      this.$router.push('/product')
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

.product-category .row h1 {
  color: #9d2933;
  text-align: center;
  font-size: 40px;
}

.product-category .row p {
  color: #065279;
  font-size: 20px;
  padding: 0 60px;
}
</style>
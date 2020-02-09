<template>
  <div id="shop">
    <!-- Main Menu Section -->
    <head-er></head-er>

    <page-header pageName="category"></page-header>

    <section class="product-category">
      <div class="container">
        <div class="row" v-for="(category, index) in this.categories" :key="index">
          <div class="col-sm-5" :class="{'col-sm-push-7': index%2 == 1}">
            <el-carousel height="250px" indicator-position="outside">
              <el-carousel-item v-for="item in category.images" :key="item">
                <div class="category-box">
                  <a @click="toProduct(category)" style="cursor: pointer;"><img :src="item" alt="" /></a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- carousel -->

          <div class="col-sm-7" :class="{'col-sm-pull-5': index%2 == 1}" style="padding-bottom: 50px;">
            <h1>{{ category.title }}</h1>
            <p v-html="category.content"></p>
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
          images: [
            require("../assets/shop/products/product-20.jpg"),
            require("../assets/shop/products/product-21.jpg"),
          ],
        },
        {
          title: '帆布包 抱枕',
          content: '回忆溧阳大事记，为防范日军抢掠，溧阳前马成立自卫团以前马碉楼为制高点，武装保卫家园，前马碉楼不容小觑。',
          images: [
            require("../assets/shop/products/product-7.jpg"),
            require("../assets/shop/products/product-8.jpg"),
            require("../assets/shop/products/product-9.jpg"),
            require("../assets/shop/products/product-19.jpg"),
          ]
        },
        {
          title: '手机壳',
          content: '抗战时期的励志名言，激励当代人要时刻充满着对生活积极的态度，对未来不惧挑战的精神。',
          images: [
            require("../assets/shop/products/product-10.jpg"),
            require("../assets/shop/products/product-11.jpg"),
          ]
        },
        {
          title: '笔记本 橡皮擦 便利贴',
          content: '溧阳是老兵们充满回忆的老城，溧阳的瓦屋山宝藏禅寺历史悠久，见证了红军革命历程的点点滴滴。',
          images: [
            require("../assets/shop/products/product-1.jpg"),
            require("../assets/shop/products/product-2.jpg"),
            require("../assets/shop/products/product-3.jpg"),
            require("../assets/shop/products/product-12.jpg"),
            require("../assets/shop/products/product-13.jpg"),
            require("../assets/shop/products/product-14.jpg"),
            require("../assets/shop/products/product-18.jpg"),
          ],
        },
        {
          title: '明信片 日历',
          content: '小桥流水，山溪潺潺，古树挺拔，春去秋来，乍暖还寒，一年四季不只是氲氤绕梁，更是交织着那些记忆的温暖。',
          images: [
            require("../assets/shop/products/product-4.jpg"),
            require("../assets/shop/products/product-5.jpg"),
            require("../assets/shop/products/product-6.jpg"),
            require("../assets/shop/products/product-15.jpg"),
            require("../assets/shop/products/product-16.jpg"),
            require("../assets/shop/products/product-17.jpg"),
          ],
        },
      ]
    }
  },
  methods: {
    toProduct(category) {
      console.log(category)
      store.commit('setCategory', category)
      this.$router.push('/products')
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
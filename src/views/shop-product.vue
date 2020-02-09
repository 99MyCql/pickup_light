<template>
  <div id="shop">
    <!-- Main Menu Section -->
    <head-er></head-er>

    <page-header pageName="product"></page-header>

    <section class="single-product">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="single-product-slider">
              <el-carousel height="250px" indicator-position="outside" :autoplay="false" arrow="always">
                <el-carousel-item v-for="item in this.category.images" :key="item">
                  <div class="category-box">
                    <img :src="item" alt="" />
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="col-md-7">
            <div class="single-product-details">
              <h2>{{ this.category.title }}</h2>
              <p class="product-price">$300</p>
              <p class="product-description mt-20">品名：光荣抗战——纪念老兵书签套装<br>设计尺寸（长x宽）： 120mm x 25mm<br>人物高度：40mm<br>书签高度：80mm<br>选用材质：160g着色硬牛皮纸（双面糙面，手感较好，较高厚度，容易保存。）<br>书签颜色：红棕<br>工艺：双面磨砂，前侧印白条框</p>
              <a href="#" class="btn btn-main mt-20">Add To Cart</a>
            </div>
          </div>
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
import { mapState } from 'vuex'

export default {
  components: {
    headEr,
    footEr,
    pageHeader,
  },
  computed: {
    ...mapState([
      'category'
    ])
  }
}
</script>

<style scoped>
#shop {
  background-color: #f3f3f3;
}

@media (min-width: 768px) {
  .single-product .row {
    display: flex;
    align-items: center;
  }
}

.single-product .row h2 {
  color: #9d2933;
}

.single-product .row .product-description {
  color: #065279;
}
</style>
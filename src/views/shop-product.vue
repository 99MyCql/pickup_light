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
              <el-carousel height="300px" indicator-position="outside" :autoplay="false" arrow="always" trigger="click">
                <el-carousel-item>
                  <div class="category-box">
                    <img :src="this.product.imgUrl" alt="" />
                  </div>
                </el-carousel-item>
                <el-carousel-item v-for="item in this.product.otherImgs" :key="item">
                  <div class="category-box">
                    <img :src="item" alt="" />
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="col-md-7">
            <div class="single-product-details">
              <h2>{{ this.product.name }}</h2>
              <p class="product-price">$30</p>
              <p class="product-description mt-20" v-html="this.product.description"></p>
              <a href="https://www.taobao.com/" target="_blank" class="btn btn-main mt-20">Add To Cart</a>
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
      'product'
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
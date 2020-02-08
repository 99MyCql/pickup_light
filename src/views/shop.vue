<template>
  <div id="shop">
    <!-- Main Menu Section -->
    <head-er></head-er>

    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content">
              <h1 class="page-name">Category</h1>
              <ol class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li class="active">category</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-category">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <el-carousel>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-1.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-2.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-3.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="col-md-7">
            <h1>Minimal  Summer Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-7">
            <h1>Weeding Business & Casual</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
          </div>
          <div class="col-md-5">
            <el-carousel>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-4.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-5.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-6.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <el-carousel>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-7.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-8.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="category-box">
                  <a href=""><img src="../assets/shop/products/product-9.jpg" alt="" /></a>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="col-md-7">
            <h1>Stylish & Scalable</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
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

export default {
  components: {
    headEr,
    footEr
  },
  data() {
    return {
      categories: [
        [
          "../assets/shop/products/product-1.jpg",
          "../assets/shop/products/product-2.jpg",
          "../assets/shop/products/product-3.jpg",
        ]
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
  margin-bottom: 80px;
}
.product-category .row h1 {
  color: #9d2933;
}
</style>
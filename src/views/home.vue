<template>
  <div>
    <!-- Main Menu Section -->
    <head-er></head-er>

    <!-- Home Slider -->
    <div>
      <el-carousel height="500px" :interval="3000" trigger="click">
        <el-carousel-item>
          <div class="slider-item slider1">
            <div class="container">
              <div class="slide-inner text-left">
                <h1>Minimal  Summer Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-item white-bg slider2">
            <div class="container">
              <div class="slide-inner text-center">
                <h1>Weeding Business & Casual</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-item slider3">
            <div class="container">
              <div class="slide-inner text-left">
                <h1>Stylish & Scalable</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aut illum ratione? <br> Aliquam facilis dolorem dolor illum saepe commodi ratione.</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="post">
              <div class="post-media post-thumb">
                <router-link to="/blog">
                  <img src="../assets/blog/blog-post-1.jpg" alt="">
                </router-link>
              </div>
              <h2 class="post-title"><a href="blog-single.html">How To Wear Bright Shoes</a></h2>
              <div class="post-meta">
                <ul>
                  <li>
                    <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                  </li>
                  <li>
                    <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href=""> TRAVEL</a>, <a href="">FASHION</a>
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae.</p>
                <router-link to="/blog" class="btn btn-main">Continue Reading</router-link>
              </div>
            </div>

            <div class="post">
              <div class="post-media post-thumb">
                <a href="blog-single.html">
                  <img src="../assets/blog/blog-post-2.jpg" alt="">
                </a>
              </div>
              <h2 class="post-title"><a href="blog-single.html">Two Ways To Wear Straight Shoes</a></h2>
              <div class="post-meta">
                <ul>
                  <li>
                    <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                  </li>
                  <li>
                    <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href=""> TRAVEL</a>, <a href="">FASHION</a>
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae.</p>
                <a href="blog-single.html" class="btn btn-main">Continue Reading</a>
              </div>
            </div>
            <div class="post">
              <div class="post-media post-thumb">
                <a href="blog-single.html">
                  <img src="../assets/blog/blog-post-3.jpg" alt="">
                </a>
              </div>
              <h2 class="post-title"><a href="blog-single.html">Making A Denim Statement</a></h2>
              <div class="post-meta">
                <ul>
                  <li>
                    <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                  </li>
                  <li>
                    <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href=""> TRAVEL</a>, <a href="">FASHION</a>
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae.</p>
                <a href="blog-single.html" class="btn btn-main">Continue Reading</a>
              </div>
            </div>
            <div class="post">
              <h2 class="post-title"><a href="blog-single.html">Standard Text Post</a></h2>
              <div class="post-meta">
                <ul>
                  <li>
                    <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                  </li>
                  <li>
                    <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href=""> TRAVEL</a>, <a href="">FASHION</a>
                  </li>
                  <li>
                    <a href=""><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="post-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae.</p>
                <a href="blog-single.html" class="btn btn-main">Continue Reading</a>
              </div>
            </div>
            <div class="text-center">
              <ul class="pagination post-pagination">
                <li><a href="#">Prev</a>
                </li>
                <li class="active"><a href="#">1</a>
                </li>
                <li><a href="#">2</a>
                </li>
                <li><a href="#">3</a>
                </li>
                <li><a href="#">4</a>
                </li>
                <li><a href="#">5</a>
                </li>
                <li><a href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  }
}
</script>

<style>
.slider1 {
  background-image:url('../assets/slider/slider-1.jpg');
}
.slider2 {
  background-image:url('../assets/slider/slider-2.jpg');
}
.slider3 {
  background-image:url('../assets/slider/slider-3.jpg');
}
</style>

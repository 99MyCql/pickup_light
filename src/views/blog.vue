<template>
  <div>
    <!-- Main Menu Section -->
    <head-er></head-er>

    <page-header pageName="blog"></page-header>

    <section class="page-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="post post-single">
              <div class="post-thumb">
                <img class="img-responsive" :src="this.blog.img" alt="">
              </div>
              <h2 class="post-title">{{ this.blog.title }}</h2>
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
              <div class="post-content post-excerpt" v-html="this.blog.content">
              </div>
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
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'blog'
    ])
  }
}
</script>

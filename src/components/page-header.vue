<template>
  <section class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="content">
            <h1 class="page-name">{{ this.pageName[0].toUpperCase() + this.pageName.substring(1) }}</h1>
            <ol class="breadcrumb">
              <li><a @click="back()" style="cursor: pointer;">Back</a></li>
              <li class="active">{{ this.pageName }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageName: {
      required: false,
      type: String
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
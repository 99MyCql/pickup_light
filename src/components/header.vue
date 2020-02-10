<template>
<div>
  <section class="menu">
    <nav class="navbar navigation">
      <div class="container">
        <div class="navbar-header">
          <h1 class="menu-title">菜单</h1>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <!-- / .navbar-header -->

        <!-- Navbar Links -->
        <div id="navbar" class="navbar-collapse collapse text-center">
          <ul class="nav navbar-nav">
            <!-- Home -->
            <li class="dropdown ">
              <router-link to="/">首页</router-link>
            </li>
            <!-- / Home -->

            <!-- Shop -->
            <li>
              <router-link to="/shop">文创</router-link>
            </li>
            <!-- / Shop -->

            <!-- Contact -->
            <li>
              <a href="#">联系</a>
            </li>
            <!-- / Contact -->

            <!-- About -->
            <li>
              <a href="#">关于</a>
            </li>
            <!-- / About -->
          </ul>
        </div>
        <!--/.navbar-collapse -->
      </div>
      <!-- / .container -->
    </nav>
  </section>
</div>
</template>

<script>
export default {

}
</script>
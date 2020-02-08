<template>
<div>
  <section class="menu">
    <nav class="navbar navigation">
      <div class="container">
        <div class="navbar-header">
          <h2 class="menu-title">Main Menu</h2>
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
              <router-link to="/">Home</router-link>
            </li>
            <!-- / Home -->

            <!-- Shop -->
            <li>
              <router-link to="/shop">Shop</router-link>
            </li>
            <!-- / Shop -->

            <!-- Contact -->
            <li>
              <a href="#">Contact</a>
            </li>
            <!-- / Contact -->

            <!-- About -->
            <li>
              <a href="#">About</a>
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
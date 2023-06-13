<template>
  <!-- Social Media Bar -->

  <div id="nav">
    <span id="name">Best Foods in Srilanka</span>
    <router-link :class="{ active: $route.name === 'Home' }" to="/"
      >Home</router-link
    >
    |
    <router-link :class="{ active: $route.name === 'Gallery' }" to="/Gallery"
      >FoodGallery</router-link
    >
    <router-link :class="{ active: $route.name === 'Hotels' }" to="/Hotels"
      >FindBestRestaurant</router-link
    >
    

    <router-link
      :class="{ active: $route.name === 'Contactus' }"
      to="/Contactus"
      >RestaurantReminder</router-link
    >

    
  </div>
  <router-view />

  

  <!-- Footer -->
  <footer class="text-center text-lg-start background">
    <!-- Section: Social media -->
    <section
      class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      "
    >
      
    </section>

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.9)">
      © 2022 Copyright: Kishor Jahan Mohamed Badurdeen
     <br>
     All reserved @Kishor
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style lang="scss"> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#link4{
  text-decoration: none;
  color: white;

  &:hover{
    color: yellow;
  }
}
html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
#nav {
  padding: px;
  //width: 100%;
  //  height: 30px;
  background-color: #2c3e50;
  // line-height: 30px;

  a {
    font-weight: bold;
    font-size: 20px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin: 0 5px 0 5px;
    &.active {
      color: aqua;
    }
  }
}
#nav > a:hover{
  color: yellow !important;
}
#name {
  color: white;
  margin-right: 600px;
  font-family: "Licorice", cursive;
  font-size: 30px;
  margin-right: 200px;
}

#footer {
  //min-height: ;
  bottom: 0;
  padding: px;
  width: 100%;
  height: 30px;
  background-color: #2c3e50;
  color: white;
  line-height: 30px;
}
#social1 {
  margin-left: -800px;
}
#socialBar {
  background-color: #686766;
}
#phone {
  color: white;
}
.background {
  background-color: #2c3e50;
  color: white;
}
</style>

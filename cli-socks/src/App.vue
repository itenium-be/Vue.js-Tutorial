<template>
  <div id="app">
    <div class="nav-bar">
      <h1>CLI Socks</h1>

      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/counter" title="Vuex example">Counter</router-link> |
        <router-link to="/cart" title="Cart summary">Cart</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;

  h1 {
    padding: 5px;
    font-family: cursive;
    margin-left: 10px;
    margin-top: 0;
    float: left;
  }

  .links {
    float: right;
    margin-top: 20px;
    margin-right: 100px;
  }

  a {
    text-decoration: none;
    color: black;
  }
}

.cart {
  position: absolute;
  border: 1px solid #d8d8d8;
  padding: 11px 15px;
  top: 8px;
  right: 13px;
  color: royalblue;
  background-color: antiquewhite;
}
</style>

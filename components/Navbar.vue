<template>
  <div class="navbar">
    <md-toolbar md-elevation="0" class="nav">
      <img src="../assets/img/ph-logo.png" alt="P & H Real Estate Solutions" class="logo">
      <div class="md-toolbar-section-end">
        <md-button
          v-for="(item, i) in menu"
          :key="i"
          @click="changePage(item.to)"
          class="nav-link"
        >{{ item.page }}</md-button>
        <md-button @click="showNavigation = true" class="md-icon-button nav-menu">
          <md-icon class="menu-icon md-accent">
            <i class="fas fa-bars"></i>
          </md-icon>
        </md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" :md-elevation="1">
      <md-list>
        <md-list-item v-for="(item, i) in menu" :key="i" @click="changePage(item.to)">
          <md-icon class="link-icon">
            <i :class="item.icon"></i>
          </md-icon>
          <span class="md-list-item-text">{{ item.page }}</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    showNavigation: false,
    menu: [
      { to: "/", icon: "fas fa-home", page: "Home" },
      { to: "/about", icon: "fas fa-user-circle", page: "About" },
      { to: "/contact", icon: "fas fa-phone", page: "Contact" },
      { to: "/sell", icon: "fas fa-dollar-sign", page: "Sell Your House" }
    ]
  }),
  methods: {
    changePage(to) {
      this.showNavigation = false;
      this.$router.push(to);
    }
  }
};
</script>

<style lang="scss" scoped>
// Colors
// #C82027 Red
// #051B3B Blue
$primary-color: #c82027;
$accent-color: #051b3b;

// Navigation transparent
.md-toolbar.nav {
  background: transparent;
  padding: 10px 20px;
}

.logo {
  width: 200px;
}

button.nav-link {
  color: #fff;

  &:hover {
    background: $primary-color;
  }
}

.nav-menu {
  display: none;
}

.md-list-item-text {
  font-size: 1rem;
}

@media only screen and (max-width: 746px) {
  .nav-link {
    display: none;
  }

  .nav-menu {
    display: block;
  }
}
</style>

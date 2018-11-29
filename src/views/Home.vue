<template>
  <div class="home">
    <div class="logo"><img src="../images/logo.png" alt="" /></div>
    <ul class="wrapper">
      <li v-for="list in lists" :key="list.id">
        <router-link :to="list.link">
          <img :src="list.img" alt="" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { img: require("@/images/start.png"), link: "/level" },
        { img: require("@/images/help.png"), link: "/help" }
      ],
      isShowCover: true
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.home {
  background: url("../images/home_bg.png") no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    position: absolute;
    z-index: 2;
    li {
      width: 5rem;
      margin-top: -0.2rem;
      z-index: 5;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media only screen and (max-height: 414px) {
  .logo {
    top: 0.5rem;
    width: 5rem;
    height: 5rem;
  }
  .home {
    ul {
      margin-top: 1rem;
      li {
        width: 3.5rem;
      }
    }
  }
}

@media only screen and (min-height: 1024px) {
  .logo {
    top: 3.5rem;
    width: 8rem;
    height: 8rem;
  }
  .home {
    ul {
      margin-top: 1rem;
      li {
        width: 6rem;
      }
    }
  }
}
</style>

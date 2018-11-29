<template>
  <div class="help">
    <div class="back" @click="back">
      <img src="../images/back.png" alt="" />
    </div>
    <div class="cover">
      <div class="cover_text">
        <h2>Gameplay</h2>
        <p>
          There will be 4 cards in the opening, you need to use two demonized
          monster cards, and the blood volume is greater than 0 to win,
          otherwise it will be a failure!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.help {
  height: 100vh;
  background: url("../images/help_bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  .back {
    position: absolute;
    bottom: 0.2rem;
    right: 0.4rem;
    width: 5rem;
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.cover {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &_text {
    width: 10rem;
    height: 10rem;
    margin-top: 1rem;
    p {
      margin-top: 0.5rem;
      line-height: 0.8rem;
      font-size: 0.7rem;
    }
  }
}

@media only screen and (max-height: 414px) {
  .help {
    .back {
      transform: scale(0.7);
      right: -0.6rem;
      bottom: -0.2rem;
    }
  }
  .cover {
    h2 {
      font-size: 1rem;
      margin-top: 1rem;
    }
    &_text {
      p {
        font-size: 0.6rem;
      }
    }
  }
}
</style>

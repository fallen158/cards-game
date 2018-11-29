<template>
  <div class="game">
    <audio autoplay loop v-if="isAudio">
      <source src="../assets/in_game.ogg" type="audio/ogg" />
    </audio>
    <header class="head">
      <div class="head_left">
        <div class="mute" @click="mute" v-if="isAudio">
          <img src="../images/play.png" alt />
        </div>
        <div class="play" @click="play" v-else>
          <img src="../images/mute.png" alt />
        </div>
        <div class="timeOut" @click="timeOut">
          <img src="../images/pause.png" alt />
        </div>
      </div>
      <div class="head_right">
        <div class="strip"><img src="../images/strip.png" alt /></div>
        <div class="strip_text" :style="bloodStrip"></div>
        <div class="strip_number">{{ stripNumber }}/20</div>
      </div>
    </header>
    <main class="main">
      <div
        @click="onFlop(list.index, list.attributes);"
        v-for="list in lists"
        :key="list.id"
        :class="['fc_inner', { active: list.isActive === true }]"
      >
        <div class="fc_front">
          <div class="attributes"></div>
          <img :src="list.front" alt />
        </div>
        <div class="fc_back">
          <div class="attributes">
            <span class="attributes_img" v-show="list.isActive">
              <img src="../images/attributes.png" alt />
            </span>
            <span class="attributes_text" v-show="list.isActive">
              {{ list.attributes }}
            </span>
          </div>
          <img :src="list.back" alt />
        </div>
      </div>
    </main>
    <section class="settlement" v-show="isOut">
      <div class="settlement_center">
        <div class="center_title">{{ settlement_text }}</div>
        <div class="center_footer">
          <div class="button" @click="jumpHome">
            <img src="../images/menu.png" alt />
          </div>
          <div class="button" @click="jumpLevel" v-show="isGame">
            <img src="../images/next.png" alt />
          </div>
          <div class="button" @click="carryGame" v-show="!isGame">
            <img src="../images/carry_game.png" alt />
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer_right" @click="back">
        <img src="../images/back.png" alt />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stripNumber: "",
      bloodStrip: "",
      lists: [],
      isOut: false,
      isGame: false,
      settlement_text: "",
      levelIndex: "",
      isAudio: true
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    onFlop(index, attributes) {
      if (!this.lists[index - 1].isActive) {
        return;
      }
      this.lists[index - 1].isActive = false;
      let strip = this.stripNumber;
      let result;
      attributes = attributes.split("");
      if (attributes[0] === "-") {
        //算-法
        result = strip - parseInt(attributes[1]);
        this.stripNumber = result;
      } else {
        result = strip + parseInt(attributes[1]);
        this.stripNumber = result;
      }
      // 卡牌用完弹出结算页面
      let lists = this.lists;
      if (
        !lists[0].isActive &&
        !lists[1].isActive &&
        !lists[2].isActive &&
        !lists[3].isActive
      ) {
        this.isOut = true;
        this.isGame = true;
        this.settlement_text = `Congratulations, the game wins, please choose the next level!`;
        let storge = window.localStorage.getItem("WJCard");
        storge = storge ? JSON.parse(storge) : [];
        storge.push(this.levelIndex);
        window.localStorage.setItem("WJCard", JSON.stringify(storge));
      }
    },
    mute() {
      this.isAudio = false;
    },
    play() {
      this.isAudio = true;
    },
    timeOut() {
      this.isOut = true;
      this.settlement_text = "Paused, you can choose main menu or continue";
    },
    jumpHome() {
      this.$router.push("/");
    },
    jumpLevel() {
      this.$router.push("/level");
    },
    carryGame() {
      this.isOut = false;
    }
  },
  beforeMount() {
    if (this.lists) {
      let time = setInterval(() => {
        this.lists.map(item => {
          return (item.isActive = true);
        });
        clearInterval(time);
      }, 100);
      return time;
    }
  },
  created() {
    this.lists = this.$route.params[0];
    this.stripNumber = this.$route.params[1];
    this.levelIndex = this.$route.params[2];
  },
  watch: {
    stripNumber() {
      let bloodStripNumber = this.stripNumber;
      if (bloodStripNumber <= 0) {
        this.stripNumber = 0;
        this.isOut = true;
        this.isGame = true;
        this.settlement_text = `The game failed, please start over!`;
      } else if (bloodStripNumber >= 20) {
        this.stripNumber = 20;
      }
      let defaultStrip = 20 / bloodStripNumber;
      defaultStrip = 4.1 / defaultStrip;
      this.bloodStrip = `width:${defaultStrip}rem`;
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url("../images/game_bg.png") no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.head {
  display: flex;
  justify-content: space-between;
  &_left {
    display: flex;
    align-items: center;
    .mute {
      height: 1.2rem;
      width: 1.2rem;
      margin: 0.4rem 0.2rem;
    }
    .play {
      @extend.mute;
    }
    .timeOut {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
  &_right {
    margin: 0.2rem 0.4rem;
    position: relative;
    color: white;
    .strip {
      width: 6.8rem;
      height: 1.5rem;
    }
    .strip_text {
      background: #a70900;
      border-radius: 20px;
      height: 0.38rem;
      position: absolute;
      top: 0.52rem;
      left: 1.5rem;
    }
    .strip_number {
      position: absolute;
      top: 0.5rem;
      left: 3.1rem;
      font-size: 0.35rem;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.main {
  flex: 1;
  box-sizing: border-box;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -webkit-perspective: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .fc_inner {
    position: relative;
    width: 4.5rem;
    height: 7rem;
    transform-style: preserve-3d;
    // backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-origin: center center;
    transition: transform 0.8s;
    margin: 0 0.2rem;
  }
  .fc_inner.active {
    transform: rotateY(-180deg) translateZ(0);
    color: #e67e22;
  }
  .fc_front {
    position: absolute;
    z-index: 4;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    .attributes {
      height: 20%;
    }
  }
  .fc_back {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    transform: rotateY(180deg);
    cursor: pointer;
    .attributes {
      height: 20%;
    }
    .attributes_img {
      width: 1.3rem;
      height: 1.3rem;
      position: absolute;
      left: 1rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .attributes_text {
      margin-left: 1.5rem;
    }
  }
  .fc_front img,
  .fc_back img {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
}
.settlement {
  border: 1px solid;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  &_center {
    width: 100%;
    height: 15rem;
    background: url("../images/account.png") no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
}
.center_title {
  color: #1f0303;
  margin: 2.8rem 0 0 2.4rem;
  line-height: 0.8rem;
  width: 5rem;
  height: 3rem;
  font-size: 0.8rem;
}
.center_footer {
  width: 6.5rem;
  display: flex;
  margin: 1rem 0 0 2.4rem;
  justify-content: space-around;
  .button {
    width: 3.1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin: 0.2rem 0.4rem;
  &_right {
    width: 5rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media only screen and (max-height: 414px) {
  .head {
    display: flex;
    align-items: center;
    &_left {
      transform: scale(0.8);
      margin: -0.3rem 0 0 0;
    }
    &_right {
      transform: scale(0.8);
      margin: -0.3rem -0.3rem 0 0;
    }
  }
  .settlement {
    &_center {
      transform: scale(0.7);
    }
    .center_title {
      transform: scale(0.8);
      margin: 2.2rem 0 0 2.4rem;
    }
    .center_footer {
      transform: scale(0.9);
      margin: 0.8rem 0 0 2.4rem;
    }
  }
  .main {
    transform: scale(0.7);
    .fc_back {
      .attributes_img {
        left: 0.8rem;
      }
      .attributes_text {
        margin-left: 1.8rem;
      }
    }
  }
  .footer {
    margin: 0 -3.8rem -0.6rem 0;
    transform: scale(0.6);
  }
}
@media only screen and (min-height: 1024px) {
  .head {
    display: flex;
    align-items: center;
    &_left {
      transform: scale(1.4);
      margin: 0.8rem 1rem;
    }
    &_right {
      transform: scale(1.4);
      margin: 0.5rem 1.8rem;
    }
  }
  .settlement {
    .center_title {
      margin: 4rem 0 0 2.4rem;
    }
    .center_footer {
      width: 8.5rem;
      margin: 2rem 0 0 3rem;
      .button {
        width: 6rem;
        margin-left: 0.5rem;
      }
    }
  }
  .main {
    transform: scale(1.2);
    .fc_back {
      .attributes_img {
        left: 0.8rem;
      }
      .attributes_text {
        margin-left: 1.8rem;
      }
    }
  }
  .footer {
    margin: 0 3rem 0.6rem 0;
    transform: scale(1.2);
  }
}
</style>

<template>
  <div class="level">
    <div class="title"><img src="../images/level_title.png" alt /></div>
    <div class="center">
      <div class="center_wrapper">
        <div class="row" v-for="leve in leves" :key="leve.id">
          <img src="../images/not_clicked.png" alt v-if="leve.lock" />
          <img
            @click="startGame(leve.lock, leve.list, leve.strip, leve.index);"
            src="../images/clicked.png"
            alt
            v-else
          />
          <div class="row_lock" v-if="leve.lock">
            <img src="../images/lock.png" alt />
          </div>
          <div
            @click="startGame(leve.lock, leve.list, leve.strip, leve.index);"
            class="row_index"
            v-if="!leve.lock"
          >
            {{ leve.index }}
          </div>
        </div>
      </div>
    </div>
    <div class="back" @click="back"><img src="../images/back.png" alt /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leves: [
        {
          index: 1,
          lock: false,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 1,
              isActive: false,
              attributes: "-9"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 2,
              isActive: false,
              attributes: "-5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 4,
              isActive: false,
              attributes: "+6"
            }
          ],
          strip: 8
        },
        {
          index: 2,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card5.png"),
              index: 2,
              isActive: false,
              attributes: "-6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+3"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-5"
            }
          ],
          strip: 10
        },
        {
          index: 3,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 1,
              isActive: false,
              attributes: "-7"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 2,
              isActive: false,
              attributes: "+5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card4.png"),
              index: 3,
              isActive: false,
              attributes: "-6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 4,
              isActive: false,
              attributes: "+4"
            }
          ],
          strip: 8
        },
        {
          index: 4,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 1,
              isActive: false,
              attributes: "-4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 2,
              isActive: false,
              attributes: "+3"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 3,
              isActive: false,
              attributes: "-6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 4,
              isActive: false,
              attributes: "+6"
            }
          ],
          strip: 10
        },
        {
          index: 5,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-6"
            }
          ],
          strip: 8
        },
        {
          index: 6,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 1,
              isActive: false,
              attributes: "-5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 4,
              isActive: false,
              attributes: "+6"
            }
          ],
          strip: 5
        },
        {
          index: 7,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card4.png"),
              index: 3,
              isActive: false,
              attributes: "-4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 4,
              isActive: false,
              attributes: "+2"
            }
          ],
          strip: 8
        },
        {
          index: 8,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-6"
            }
          ],
          strip: 8
        },
        {
          index: 9,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 1,
              isActive: false,
              attributes: "-4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 2,
              isActive: false,
              attributes: "+6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 3,
              isActive: false,
              attributes: "-5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 4,
              isActive: false,
              attributes: "+5"
            }
          ],
          strip: 8
        },
        {
          index: 10,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-6"
            }
          ],
          strip: 10
        },
       {
          index: 11,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 1,
              isActive: false,
              attributes: "-9"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 2,
              isActive: false,
              attributes: "-5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 4,
              isActive: false,
              attributes: "+6"
            }
          ],
          strip: 8
        },
        {
          index: 12,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card5.png"),
              index: 2,
              isActive: false,
              attributes: "-6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+3"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-5"
            }
          ],
          strip: 10
        },
        {
          index: 13,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 1,
              isActive: false,
              attributes: "-7"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 2,
              isActive: false,
              attributes: "+5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card4.png"),
              index: 3,
              isActive: false,
              attributes: "-6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 4,
              isActive: false,
              attributes: "+4"
            }
          ],
          strip: 8
        },
        {
          index: 14,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 1,
              isActive: false,
              attributes: "-4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 2,
              isActive: false,
              attributes: "+3"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 3,
              isActive: false,
              attributes: "-6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 4,
              isActive: false,
              attributes: "+6"
            }
          ],
          strip: 10
        },
        {
          index: 15,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-6"
            }
          ],
          strip: 8
        },
        {
          index: 16,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 1,
              isActive: false,
              attributes: "-5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 4,
              isActive: false,
              attributes: "+6"
            }
          ],
          strip: 5
        },
        {
          index: 17,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card4.png"),
              index: 3,
              isActive: false,
              attributes: "-4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 4,
              isActive: false,
              attributes: "+2"
            }
          ],
          strip: 8
        },
        {
          index: 18,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 3,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-6"
            }
          ],
          strip: 8
        },
        {
          index: 19,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card2.png"),
              index: 1,
              isActive: false,
              attributes: "-4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 2,
              isActive: false,
              attributes: "+6"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 3,
              isActive: false,
              attributes: "-5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 4,
              isActive: false,
              attributes: "+5"
            }
          ],
          strip: 8
        },
        {
          index: 20,
          lock: true,
          list: [
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card7.png"),
              index: 1,
              isActive: false,
              attributes: "+4"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card1.png"),
              index: 2,
              isActive: false,
              attributes: "-8"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card6.png"),
              index: 3,
              isActive: false,
              attributes: "+5"
            },
            {
              front: require("@/images/cards.png"),
              back: require("@/images/card3.png"),
              index: 4,
              isActive: false,
              attributes: "-6"
            }
          ],
          strip: 10
        },
      ]
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    startGame(lock, list, strip, index) {
      if (!lock) {
        this.$router.push({
          path: "/game",
          name: "game",
          params: [list, strip, index]
        });
      }
    }
  },
  created() {
    let storge = window.localStorage.getItem("WJCard");
    if (storge) {
      storge = JSON.parse(storge);
      storge.map(item => {
        this.leves[item].lock = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.level {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("../images/choose_level_bg.png") no-repeat;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    position: absolute;
    top: 0.5rem;
    width: 8rem;
    height: 2rem;
  }
  .back {
    position: absolute;
    bottom: 0.2rem;
    right: 0.4rem;
    width: 5rem;
    z-index: 2;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.center {
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../images/level_kuang.png") no-repeat;
  background-size: cover;
  background-position: center center;
  &_wrapper {
    margin-top: -0.7rem;
    width: 10rem;
    height: 9rem;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .row {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.2rem 0.2rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &_lock {
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      color: black;
      margin-top: -0.1rem;
    }
    &_index {
      position: absolute;
      color: white;
      margin-top: 0.2rem;
      font-size: 0.5rem;
    }
  }
}
@media only screen and (max-height: 414px) {
  .level {
    .title {
      transform: scale(0.7);
      top: 0;
    }
    .back {
      transform: scale(0.7);
      right: -1rem;
      bottom: -0.5rem;
    }
  }
  .center {
    margin-top: 1.5rem;
    height: 8rem;
    &_wrapper {
      width: 8rem;
      height: 7rem;
    }
    .row {
      width: 1.1rem;
      height: 1.1rem;
      &_lock {
        transform: scale(0.7);
      }
      &_index {
        transform: scale(0.7);
        margin-top: 0.1rem;
      }
    }
  }
}

@media only screen and (min-height: 1024px) {
  .level {
    .title {
      top: 1.2rem;
    }
  }
  .center {
    &_wrapper {
      width: 12rem;
      height: 10rem;
    }
    .row {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>

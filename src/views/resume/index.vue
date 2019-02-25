<template>
  <div class="resume_content">
    <div ref="resBlock" class="currentBlock">
      <div class="resume_firstBlock">首页</div>
      <div class="resume_secondBlock">第二屏</div>
      <div class="resume_thirdBlock">第三屏</div>
      <div class="resume_fourthBlock">第四屏</div>
      <div class="resume_fifthBlock">第五屏</div>
      <div class="resume_sixthBlock">第六屏</div>
    </div>
    <div class="controlButtonBox">
      <button @click="turnMove(--index)">上一页</button>
      <button @click="turnMove(++index)">下一页</button>
    </div>
    <div class="right_buttons">
      <i v-for="(item, index) in rightButtonArray" @click="turnMove(index)" :key="index">
        <Icon :type="item.icon"/>
      </i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focusIndex: 0, //表示当前显示哪个block
      index: 0,
      rightButtonArray: [
        {
          value: "首页",
          icon: "ios-home"
        },
        {
          value: "第二屏",
          icon: "md-happy"
        },
        {
          value: "第三屏",
          icon: "md-list-box"
        },
        {
          value: "第四屏",
          icon: "logo-nodejs"
        },
        {
          value: "第五屏",
          icon: "md-paper"
        },
        {
          value: "第六屏",
          icon: "md-git-compare"
        }
      ],
      scrollFlag: false
    };
  },
  created() {
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  },
  methods: {
    turnMove(index) {
      // 上一页
      if (index < 0) {
        this.index++;
        return;
      }
      if (this.index > 5) {
        this.index--;
        return;
      }
      this.$refs.resBlock.style.transform = `translateY(-${index}00%)`;
    },
    scrollFunc(event) {
      if (this.scrollFlag) {
        return;
      }
      // 简单的节流功能
      setTimeout(() => {
        this.scrollFlag = false;
      }, 400);
      this.scrollFlag = true;
      event = event || window.event;
      if (event.wheelDelta) {
        //IE/Opera/Chrome
        //自定义事件：编写具体的实现逻辑
        if (event.wheelDelta > 0) {
          this.turnMove(--this.index);
        } else {
          this.turnMove(++this.index);
        }
      } else if (event.detail) {
        //Firefox
        //自定义事件：编写具体的实现逻辑
        if (e.detail > 0) {
          this.turnMove(--this.index);
        } else {
          this.turnMove(++this.index);
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.resume_content {
  height: 100%;
  overflow: hidden;
  .resume_firstBlock {
    background: rgb(131, 175, 155);
    height: 100%;
    width: 100%;
  }
  .resume_secondBlock {
    background: rgb(200, 200, 169);
    height: 100%;
    width: 100%;
  }
  .resume_thirdBlock {
    background: rgb(249, 205, 173);
    height: 100%;
    width: 100%;
  }
  .resume_fourthBlock {
    background: rgb(252, 200, 169);
    height: 100%;
    width: 100%;
  }
  .resume_fifthBlock {
    background: rgb(201, 186, 131);
    height: 100%;
    width: 100%;
  }
  .resume_sixthBlock {
    background: #f4d03f;
    height: 100%;
    width: 100%;
  }
  .currentBlock {
    transition: all 1s;
    height: 100%;
    width: 100%;
  }
  .controlButtonBox {
    position: absolute;
    top: 50px;
  }
  .right_buttons {
    position: absolute;
    display: flex;
    top: 40%;
    left: 95%;
    flex-direction: column;
    i {
      cursor: pointer;
      font-size: 1.5rem;
      transition: all 0.5s;
    }
    i:hover {
      transform: scale(1.2);
    }
  }
}
</style>

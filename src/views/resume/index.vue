<template>
  <div class="resume_content">
    <div ref="resBlock" class="currentBlock">
      <div class="resume_commons resume_firstBlock">
        <div>
          <div>我的头像啊</div>
          <div>
            <p>生活不止眼前的苟且，还有诗和远方！</p>
            <p>我叫张龙峰</p>
            <p>一个萌新前端开发</p>
            <p>1241863562@qq.com</p>
          </div>
        </div>
      </div>
      <div class="resume_commons resume_secondBlock">
        <p>关于我</p>
        <div class="flex">
          <nav>
            <a href>年龄/24岁</a>
            <a href>学历/本科</a>
            <a href>坐标/南京</a>
            <a href>状态/在职</a>
          </nav>
          <div>
            <p>一年前端开发工作经验</p>
            <p>喜欢写代码，也喜欢看别人的代码</p>
            <p>高效的自学能力，热衷于独立解决问题</p>
            <p>一个想要全栈发展的小程序猿</p>
          </div>
        </div>
      </div>
      <div class="resume_commons resume_thirdBlock">
        <p>经历</p>
        <div>
          <div>这里写一个树形组件实现时间轴展示自己的工作公司</div>
        </div>
      </div>
      <div class="resume_commons resume_fourthBlock">
        <p>专业能力</p>
        <div>
          <span>js</span>
          <span>html</span>
          <span>css</span>
          <span>vue</span>
        </div>
      </div>
      <div class="resume_commons resume_fifthBlock">
        <p>项目经验</p>
      </div>
      <div class="resume_commons resume_sixthBlock">联系我</div>
    </div>
    <div class="right_buttons">
      <i
        v-for="(item, index) in rightButtonArray"
        @click="turnMove(index)"
        :key="index"
        :class="{scale_icon: index === focusIndex}"
      >
        <Icon :type="item.icon"/>
      </i>
    </div>
    <div class="resume_circle">
      <i class="resume_outer_circle"></i>
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
        this.focusIndex++;
        return;
      }
      if (this.focusIndex > 5) {
        this.focusIndex--;
        return;
      }
      this.focusIndex = index;
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
          this.turnMove(--this.focusIndex);
        } else {
          this.turnMove(++this.focusIndex);
        }
      } else if (event.detail) {
        //Firefox
        //自定义事件：编写具体的实现逻辑
        if (event.detail > 0) {
          this.turnMove(--this.focusIndex);
        } else {
          this.turnMove(++this.focusIndex);
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
  .resume_commons {
    height: 100%;
    width: 100%;
    display: inline-block;
  }
  .resume_firstBlock {
    background: rgb(131, 175, 155);
  }
  .resume_secondBlock {
    background: rgb(200, 200, 169);
  }
  .resume_thirdBlock {
    background: rgb(249, 205, 173);
  }
  .resume_fourthBlock {
    background: rgb(252, 200, 169);
  }
  .resume_fifthBlock {
    background: rgb(201, 186, 131);
  }
  .resume_sixthBlock {
    background: #f4d03f;
  }
  .currentBlock {
    transition: all 1s;
    height: 100%;
    width: 100%;
  }
  .controlButtonBox {
    position: absolute;
    top: 200px;
  }
  .right_buttons {
    position: absolute;
    display: flex;
    top: 30%;
    right: 3%;
    flex-direction: column;
    i {
      cursor: pointer;
      font-size: 1.5rem;
      transition: all 0.5s;
    }
    i:hover {
      transform: scale(1.2);
    }
    .scale_icon {
      transform: scale(1.5);
    }
  }
  .resume_circle {
    position: absolute;
    top: 15px;
    left: 15px;
  }
  .resume_outer_circle {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    text-align: center;
    animation: forwardTurn;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background: url("../../assets/resume_logo.jpg");
    background-size: 4rem 4rem;
    background-repeat: no-repeat;
    background-position: -0.4rem -0.5rem;
  }
  @keyframes forwardTurn {
    0% {
      transform: rotate(0deg);
      -ms-transform: rotate(0deg); /* IE 9 */
      -moz-transform: rotate(0deg); /* Firefox */
      -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
      -o-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      -ms-transform: rotate(360deg); /* IE 9 */
      -moz-transform: rotate(360deg); /* Firefox */
      -webkit-transform: rotate(360deg); /* Safari 和 Chrome */
      -o-transform: rotate(360deg);
    }
  }
}
</style>

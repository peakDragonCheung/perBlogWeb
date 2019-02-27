<template>
  <div class="resume_content">
    <div ref="resBlock" class="currentBlock">
      <div class="resume_commons resume_firstBlock">
        <div class="myHead_img"></div>
        <div class="resume_firstBlock_introduction">
          <p>你才25岁，你可以成为任何你想要成为的人。</p>
          <span class="resume_hr"></span>
          <p>我叫张龙峰</p>
          <p>一个萌新前端开发</p>
          <p>zlf14084@163.com</p>
        </div>
      </div>
      <div class="resume_commons resume_secondBlock">
        <p class="resume_Block_title">关于我</p>
        <div>
          <nav class="resume_secondBlock_nav">
            <a href="#">
              <div class="resume_secondBlock_outIcon">
                <Icon type="ios-medical"/>
              </div>年龄/24岁
            </a>
            <a href="#">
              <div class="resume_secondBlock_outIcon">
                <Icon type="md-locate"/>
              </div>学历/本科
            </a>
            <a href="#">
              <div class="resume_secondBlock_outIcon">
                <Icon type="md-compass"/>
              </div>坐标/南京
            </a>
            <a href="#">
              <div class="resume_secondBlock_outIcon">
                <Icon type="md-cog"/>
              </div>状态/在职
            </a>
          </nav>
          <div class="resume_secondBlock_bottom">
            <p>一年前端开发工作经验</p>
            <p>喜欢写代码，也喜欢看别人的代码</p>
            <p>高效的自学能力，热衷于独立解决问题</p>
            <p>一个想要全栈发展的小程序猿</p>
          </div>
        </div>
      </div>
      <div class="resume_commons resume_thirdBlock">
        <p class="resume_Block_title">经历</p>
        <div class="resume_thirdBlock_content">
          <div>
            
            </div>
        </div>
      </div>
      <div class="resume_commons resume_fourthBlock">
        <p class="resume_Block_title">专业能力</p>
        <div>
          <span>js</span>
          <span>html</span>
          <span>css</span>
          <span>vue</span>
        </div>
      </div>
      <div class="resume_commons resume_fifthBlock">
        <p class="resume_Block_title">项目经验</p>
      </div>
      <div class="resume_commons resume_sixthBlock">
        <p class="resume_Block_title">联系我</p>
      </div>
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
  .myHead_img {
    margin: 10% auto;
    margin-bottom: 0;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    background-image: url("../../assets/resume.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .resume_firstBlock_introduction {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    p {
      color: white;
      margin-bottom: 1rem;
    }
  }
  .resume_firstBlock_introduction :nth-child(1) {
    font-size: 1.5rem;
  }
  .resume_firstBlock_introduction :nth-child(2) {
    margin-top: 2rem;
  }
  .resume_hr {
    height: 1px;
    max-width: 90%;
    display: inherit;
  }
  .resume_Block_title {
    margin: 10% auto;
    margin-bottom: 2rem;
    color: white;
    font-size: 1.3rem;
  }
  .resume_secondBlock_nav {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    a {
      color: white;
      display: inline-block;
      font-size: 1rem;
    }
    .resume_secondBlock_outIcon {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 2px white solid;
      font-size: 3.2rem;
      line-height: 4.25rem;
      text-align: center;
      margin-bottom: 1rem;
      padding-left: 1px;
    }
    .resume_secondBlock_outIcon:hover {
      color: rgb(200, 200, 169);
      background: white;
      animation: rotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  .resume_secondBlock_bottom {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    line-height: 2.5rem;
  }
  .resume_thirdBlock_content {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

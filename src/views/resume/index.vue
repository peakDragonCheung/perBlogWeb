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
          <div class="resume_thirdBlock_TV">
            <div class="resume_thirdBlock_exprence">
              <div class="resume_thirdBlock_inner">
                <div ref="resTVDom" class="resume_exprence_contentBox">
                  <div v-for="(item, index) in exprenceArticle" :key="index">
                    <p>{{item.time}}</p>
                    <p>{{item.title}}</p>
                    <p>{{item.content}}</p>
                  </div>
                </div>
              </div>
              <div class="resume_thirdBlock_Tv_control">
                <span class="resume_control_buttom">
                  <i
                    class="resume_control_buttom_rec butto_rec_rote30"
                    @click="nextPage()"
                    :class="{butto_rec_rote_next: nextFlag}"
                  ></i>
                </span>
                <span class="resume_control_buttom last_buttom">
                  <i
                    class="resume_control_buttom_rec butto_rec_rote45"
                    @click="prePage()"
                    :class="{butto_rec_rote_pre: preFlag}"
                  ></i>
                </span>
                <span class="resume_control_hole"></span>
                <span class="resume_control_hole"></span>
                <span class="resume_control_hole"></span>
                <span class="resume_control_hole"></span>
                <span class="resume_control_hole"></span>
                <span class="resume_control_hole"></span>
              </div>
            </div>
          </div>
          <i class="resume_thirdBlock_left_bottom"></i>
          <i class="resume_thirdBlock_right_bottom"></i>
        </div>
      </div>
      <div class="resume_commons resume_fourthBlock">
        <p class="resume_Block_title">专业能力</p>
        <div class="dice_out">
          <ul class="dice_box run">
            <li>js</li>
            <li>html</li>
            <li>css</li>
            <li>vue</li>
            <li>node.js</li>
            <li>webpack</li>
          </ul>
          <div class="resume_secondBlock_bottom">
            <p>熟练掌握JavaScript语言，闭包，原型链，等，并了解es6及以上的一些新特性。</p>
            <p>熟练HTML5与CSS3、DIV+CSS网页布局样式。</p>
            <p>熟练掌握vue,框架以及其全家桶。</p>
            <p>熟悉一些ui库，如element , iview。</p>
            <p>熟悉git ,svn的基本操作。</p>
            <p>了解一点Webpack自动化构建工具。</p>
          </div>
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
      scrollFlag: false,
      nextFlag: false,
      preFlag: false,
      TvIndex: 0,
      exprenceArticle: [
        {
          title: "在广州易杰数码南京分公司进行实习",
          time: "2018.4-2018.8",
          content:
            "这一家公司做的是华为的外包，电视机顶盒的系统。在这个公司学习的过程中，我学到最有用的就是如何使用谷歌进行debug,跟踪代码一步一步的了解意思，这是最快也是最简单的方式去理解别人的代码。然后公司学习之余私下自己买了《js高级程序设计》《css权威指南》进行学习，学习之余也同时进行记录笔记，在云笔记上，学习基础的同时，因为在公司我在的项目没有使用到框架，使用纯js,html,css导入写的项目，所以我闲暇又自学了Vue，只是简单的写demo.在这个阶段我前端基础知识得到了一个小程度的飞跃，从一个什么都不懂的毕业生，到一个入坑的小萌新。"
        },
        {
          title: "在南京信晨汇公司任职前端开发",
          time: "2018.9-至今",
          content:
            "在这一家公司，我学习的基础得到了有效的训练，也就是警察情报系统系统，一开始我只是负责简单的模块，后来可能越写越上手后来就慢慢去解决一些疑难杂症，可能对于我来说，对于要求比较严格的echarts效果，短时间内找到配置参数，pdf文档的展示，手写轮播图效果，vue中的数据变化，视图不响应，等等。从这些问题中，慢慢的就锻炼出独立解决问题的能力，自己百度，自己消化。在这家公司工作之余，我又自己学习了node.js，搭建简单的服务进行登陆注册。"
        }
      ]
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
    },
    nextPage() {
      if (this.nextFlag) {
        return;
      }
      this.nextFlag = true;
      if (this.TvIndex < this.exprenceArticle.length - 1) {
        this.$refs.resTVDom.style.transform = `translateX(-${++this
          .TvIndex}00%)`;
      }
      setTimeout(() => {
        this.nextFlag = false;
      }, 500);
    },
    prePage() {
      if (this.preFlag) {
        return;
      }
      this.preFlag = true;
      if (this.TvIndex > 0) {
        this.$refs.resTVDom.style.transform = `translateX(-${--this
          .TvIndex}00%)`;
      }
      setTimeout(() => {
        this.preFlag = false;
      }, 500);
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
  .dice_out {
    position: relative;
    margin-top: 4rem;
    display: inline-block;
  }
  .dice_box {
    position: absolute;
    top: 50%;
    left: 50%;
    list-style-type: none;
    transform-style: preserve-3d;
    -webkit-perspective: 0;
    transition: all 0.5s;
    li {
      width: 200px;
      height: 200px;
      position: absolute;
      text-align: center;
      line-height: 200px;
      color: white;
    }
    li:nth-of-type(2) {
      background: rgba(131, 175, 155, 0.5);
      transform: rotateX(90deg) translateZ(100px);
    }

    li:nth-of-type(3) {
      background: rgba(200, 200, 169, 0.5);
      transform: rotateX(90deg) translateZ(-100px);
    }
    li:nth-of-type(4) {
      background: rgba(249, 205, 173, 0.5);
      transform: rotateY(90deg) translateZ(100px);
    }

    li:nth-of-type(5) {
      background: #f4d03f85;
      transform: rotateY(90deg) translateZ(-100px);
    }
    li:nth-of-type(1) {
      background: rgba(201, 186, 131, 0.5);
      transform: translateZ(100px);
    }
    li:nth-of-type(6) {
      background: rgba(255, 35, 30, 0.5);
      transform: translateZ(-100px);
    }
  }
  .dice_box:hover {
    transform: rotateX(80deg) rotateY(-45deg);
  }
  @-webkit-keyframes run {
    0% {
      transform: rotateX(0deg) rotateY(0deg) translateY(0px);
    }
    25% {
      transform: rotateX(180deg) rotateY(90deg) rotateZ(0deg);
    }
    50% {
      transform: rotateX(270deg) rotateY(180deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(0deg) rotateY(0deg) translateY(0px);
    }
  }
  .run {
    animation: run 5s linear;
    animation-iteration-count: infinite;
  }
  .resume_thirdBlock_exprence {
    width: 90%;
    margin: 0 auto;
    height: 20rem;
    border: 5px solid black;
    border-radius: 2rem;
    background-color: #f4d03f;
    z-index: 2;
    position: relative;
  }
  .resume_thirdBlock_TV {
    position: relative;
  }
  .resume_thirdBlock_TV::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 4.5rem;
    height: 0.5rem;
    border: 1px black solid;
    background: black;
    border-radius: 3px;
    top: -1.4rem;
    left: 18rem;
    -webkit-transform: rotate(45deg);
    transform: rotate(-40deg);
    z-index: 1;
  }
  .resume_thirdBlock_TV::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 3.5rem;
    height: 0.5rem;
    border: 1px black solid;
    background: black;
    border-radius: 5px;
    top: -1.2rem;
    left: 14rem;
    -webkit-transform: rotate(45deg);
    transform: rotate(40deg);
    z-index: 1;
  }
  .resume_thirdBlock_inner {
    width: 78%;
    height: 15rem;
    border: 3px solid black;
    margin-left: 5%;
    margin-top: 5%;
    background: white;
    float: left;
    overflow: hidden;
  }
  .resume_thirdBlock_Tv_control {
    width: 15%;
    float: right;
    height: 15rem;
    margin-top: 5%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
  }
  .resume_control_buttom {
    display: inline-block;
    border: 5px solid black;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.5rem auto;
    border-radius: 50%;
    background: white;
  }
  .resume_control_buttom_rec {
    display: inline-block;
    border: 3px solid black;
    width: 1.5rem;
    height: 4rem;
    position: relative;
    top: -9px;
    border-radius: 3px;
    background: white;
  }
  .resume_control_hole {
    display: inline-block;
    border: 5px solid black;
    width: 90%;
    border-radius: 5px;
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .last_buttom {
    margin-bottom: 1.2rem;
  }
  .resume_thirdBlock_left_bottom {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: relative;
    background: black;
    left: -9rem;
    border-radius: 50%;
    top: -1rem;
    top: -0.8rem;
  }
  .resume_thirdBlock_right_bottom {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: relative;
    background: black;
    border-radius: 50%;
    top: -0.8rem;
    left: 5rem;
  }
  .butto_rec_rote45 {
    transform: rotate(45deg);
    cursor: pointer;
    transition: all 0.5s;
  }
  .butto_rec_rote_pre {
    transform: rotate(0deg);
  }
  .butto_rec_rote30 {
    transform: rotate(25deg);
    transition: all 0.5s;
    cursor: pointer;
  }
  .butto_rec_rote_next {
    transform: rotate(50deg);
  }
  .resume_exprence_contentBox {
    display: flex;
    transition: all 0.5s;
    width: 100%;
    div {
      flex-shrink: 0;
      width: 26rem;
      width: 100%;
      padding: 0.5rem;
    }
  }
}
</style>

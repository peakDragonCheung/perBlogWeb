<template>
  <div class="qq_music_home">
    <div class="music_login">
      <p>张龙峰的个人网站！</p>
      <p>暂时用作托管线上简历</p>
      <Button
        type="primary"
        @click="moveUpBotton"
        class="login_start_botton"
        long
        :class="{start_up_move: isMove }"
      >简历</Button>
      <Button
        type="primary"
        @click="login"
        class="login_botton"
        long
        :class="{loginMoveUp: isMove }"
      >登录</Button>
      <div class="login_botton_box" :class="{right_move: isMove, left_move: isMoveCover}">
        <Input v-model="loginName" placeholder="用户名" class="login_input"/>
        <Input v-model="loginPassWord" placeholder="密码" class="login_input"/>
      </div>
    </div>
    <div class="qq_music_upLogin" @click="closeBottonClass">
      <div class="home_back_img">
        <div :class="{ home_mock:isMove }"></div>
      </div>
      <div class="home_bottom">这是个什么页面？</div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login.js";
export default {
  name: "home",
  data() {
    return {
      loginName: "",
      loginPassWord: "",
      isMove: false,
      isMoveCover: false
    };
  },
  methods: {
    moveUpBotton() {
      // if (!this.isMove) {
      //   this.isMove = true;
      //   this.isMoveCover = false;
      // }
      this.$router.push('/resume');
    },
    closeBottonClass() {
      this.isMove = false;
      this.isMoveCover = true;
    },
    login() {
      login({
        userName: this.loginName,
        passWord: this.loginPassWord
      })
        .then(res => {
          if (res.data.success) {
            this.$Message.success("登陆成功！");
            this.$router.push("home");
          } else {
            this.$Message.error(res.data.data);
          }
        })
        .catch(() => {
          this.$Message.error("登陆失败");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.home_back_img {
  background: url(../assets/table.jpeg);
  // background: url(https://images.unsplash.com/photo-1518494629776-1a9fa53487b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExOTUwfQ?w=2200);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 44.5rem;
}
.home_mock {
  background: black;
  opacity: 0.5;
  z-index: 1;
  height: 100%;
}
.home_bottom {
  background: #56bc8a;
  height: 2.6rem;
  -webkit-box-shadow: inset 0 3px 0 rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 3px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  color: white;
  line-height: 2.6rem;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.8rem;
}
.music_login {
  width: 20rem;
  min-height: 10rem;
  // background: #56bc8a;
  position: absolute;
  z-index: 2;
  top: 22%;
  left: 40%;
  p {
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    padding-left: 2rem;
  }
  .login_start_botton {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    height: 2.5rem;
    position: relative;
    transition: all 0.6s;
  }
  .login_botton {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    height: 2.5rem;
    left: 0;
    top: 6rem;
    position: absolute;
    transition: all 0.6s;
    opacity: 0;
    background: #56bc8a;
    border: 1px #56bc8a solid;
  }
  .start_up_move {
    transform: translate(0, -1rem);
    cursor: auto;
    opacity: 0;
  }

  .loginMoveUp {
    transform: translate(0, -2.5rem);
    transition-delay: 0.6s;
    opacity: 1;
  }
  .login_input {
    margin-top: 0.8rem;
  }

  .right_move {
    opacity: 1 !important;
    transform: translate(15rem, 0);
  }
  .left_move {
    opacity: 0 !important;
    transform: translate(-15rem, 0);
  }
  .login_botton_box {
    opacity: 0;
    position: relative;
    left: -15rem;
    transition: all 0.6s;
  }
}
</style>

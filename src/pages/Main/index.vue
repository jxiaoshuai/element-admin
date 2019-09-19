<template>
  <div class="main">
    <Header></Header>
    <NavMenu></NavMenu>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <Tags></Tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="$store.state.app.cacheNav">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./component/Header.vue";
import NavMenu from "./component/NavMenu.vue";
import Tags from "./component/Tags.vue";
import bus from "@/components/bus";
export default {
  data: function() {
    return {
      collapse: false
    };
  },
  components: {
    Header,
    NavMenu,
    Tags
  },
  methods: {},
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    })
  }
};
</script>
<style scoped>
.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content-collapse {
    left: 65px;
}
</style>
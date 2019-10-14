<template>
  <el-container>
    <el-header type="primary">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="grid-content bg-purple">HEADER</div>
        </el-col>
        <el-col :span="4">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu :index="menu['id']" v-for="menu in menuList" :key="menu['id']">
            <template slot="title">
              <i class="el-icon-message"></i>
              {{menu['name']}}
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="item['id']"
                v-for="item in menu['children']"
                :key="item['id']"
              >{{item['name']}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: "1",
          name: "导航一",
          children: [
            {
              id: "1-1",
              name: "选项1"
            },
            {
              id: "1-2",
              name: "选项2"
            },
            {
              id: "1-3",
              name: "选项3"
            }
          ]
        }
      ]
    };
  }
};
</script>
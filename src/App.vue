<template>
  <div id="app">
    <el-container>
        <el-aside>
            <el-menu>
                <el-submenu :index="menu.enName" v-for="(menu, index) in menus">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group>
                      <el-menu-item v-for="(submenu, subIndex) in menu.submenus" 
                        :index="menu.enName +'-' + submenu.enName" @click="goPage(menu.path + submenu.path)">
                          {{submenu.name}}
                      </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header></el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                menus: [{
                    name: "入库管理",
                    enName: "instock",
                    path: "/instock",
                    submenus: [{
                        name: "登记",
                        enName: "register",
                        path: "/register"
                    }, {
                        name: "采样",
                        enName: "sampling",
                        path: "/sampling"
                    }, {
                        name: "送存",
                        enName: "send",
                        path: "/send"
                    }]
                }]
            }
        },
        methods: {
            goPage(path){
                this.$router.push(path, function complete(){
                    console.log("跳转成功");
                }, function error(){
                    console.log("跳转失败");
                    console.log(arguments)
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    html,body{
        margin: 0;
        padding: 0;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

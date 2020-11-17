<template>
    <div class="app-wrapper">
        <navbar/>
        <div class="main-container">
        	<!-- <div class="sidebar-wrapper">
        		<sidebar class="sidebar-container" />
        	</div> -->
            <app-main/>
        </div>
    </div>
</template>

<script>
    import AppMain  from './AppMain';
    import Navbar  from './Navbar';
    import Sidebar  from './Sidebar';
    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
.app-wrapper{
  height: inherit;
  background: #F5F5F5;
  .main-container{
    padding: 20px 15px;
    background: #F5F5F5;
  }
}
</style>

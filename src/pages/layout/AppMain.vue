 <template>
      <transition name="fade" mode="out-in">
          <router-view :key="key"></router-view>
      </transition>
</template>

<script>
  export default {
    name: 'AppMain',
    components: {},
    mounted() {},
    computed: {
      key() {
        let routerName = (this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date());
        return routerName;
      }
    }
  }
</script>


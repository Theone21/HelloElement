<template>
  <div class="home">
    这里是Home.vue
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
      username(){
          return this.$route.params.username;
      }
  },
  methods: {
      goBack(){
          window.history.length > 1 ? this.$route.go(-1) : this.$router.push('/')
      }
  }
}
</script>

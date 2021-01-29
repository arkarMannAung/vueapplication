<template>
  <appHeader />
  <div class="w-full flex">
     <router-view></router-view>
  </div>
</template>
<script>
import appHeader from "./components/appHeader";
export default {
  components: {
    appHeader,
  },
}
</script>
<style>
  
</style>


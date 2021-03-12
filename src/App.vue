<template>
  <div>
    <h1 id="shopName">Dai Lou Zi Char</h1>
    
    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      items: {
        type: Array,
      }
    }
  },

  components: {
  
  },


}
</script>

<style>

  #shopName {
    background-color:lightseagreen ;
    text-align: center;
    margin: 0;
    height: 69px;
    width: 100%;
    font-size: 55px;
    font-family:cursive ;
  }
</style>

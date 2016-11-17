<template>
  <div id="app">
    <p>{{test}}</p>
    <slider></slider>
  </div>
</template>

<script>
  import Slider from './slider.vue'

  export default {
    data: function () {
      return {
        test: 'hello world'
      }
    },
    components: {
      Slider
    }
  }
</script>

<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "Vue file"
    }
  },
  methods: {
    greeting: function(){
      return 'Hello Vue world';
    }
  }
}
</script>

<style>

</style>

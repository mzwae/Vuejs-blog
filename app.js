new Vue({
  el: '#vue-app',
  data: {
    name: 'Jack',
    website: 'https://google.com/ncr',
    age: 30
  },
  methods:{
    add: function(inc){
      this.age += inc;
    },
    subtract: function(dec){
      this.age -= dec;
    }
  }
});

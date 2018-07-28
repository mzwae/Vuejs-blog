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
    },
    logName: function(){
      console.log("You entered Name");
    },
    logAge: function(){
      console.log("You entered Age");
    }
  }
});

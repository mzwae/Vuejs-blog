Vue.component('greeting', {
  template: '<p>Hey there, I am {{name}}. <button v-on:click="changeName">Change Name</button></p>',
  data: function(){
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function(){
      this.name = 'Mario';
    }
  }
});





new Vue({
  el: '#vue-app',
  data: {
          characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
          ninjas: [
              { name: 'Ryu', age: 25 },
              { name: 'Yoshi', age: 35 },
              { name: 'Ken', age: 55 }
          ],
          age: 34,
          name: "Jack",
          website: "http://google.com/ncr"
      },
      methods: {
        logName: function(){
          cosole.log(this.name);
        },
        readRefs: function(){
          console.log(this.$refs.input.value);

        }

      },
      computed: {

      }
});

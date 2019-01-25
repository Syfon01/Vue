"use strict";
// import './styles.scss';

var navbar = Vue.component('navbar', {
    template: `
    <header>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    </header>
`
});

var counter = Vue.component("counter", {
  template: `
    <span>
        <button @click="this.increment">+</button>
        <span>{{sum}}</span>
        <button @click="this.decrement">-</button>
    </span>
    `,
    data: () =>{
       return{
           sum: 0
       };
    },
    methods: {
        increment(){
            this.sum +=1;
        },
        decrement(){
            this.sum -=1;
        },
    },
});


var app = new Vue({
  el: "#app",
  data: {
    message: "Welcome to my first Vue app",
    comment: "Vue at it best",
    vue: "This is interesting! Learn Vue!!!",
    selected: "Select a color ",
    hasMessage: true,
    messages: ["Hello World", "today is blessed", "God is Good"],
},
  methods: {
    logMessage() {
      document.write(this.vue);
    },
    toggleMessage() {
      this.hasMessage = !this.hasMessage;
    }
  },

  components: {
    navbar,
    counter
  },
});
    


const app = Vue.createApp({
    data:() => {
        return{
            display: true,
        }},

    methods: {
      toggleBulb() {
        this.display = !this.display;

      },
    },
  });
  
  app.mount('#BULB')
  
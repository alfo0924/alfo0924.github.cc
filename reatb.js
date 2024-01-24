


const app = Vue.createApp({
    data() {
      return {
        bgColor : 0
      }
    },
    methods: {
      changeColor() {
        this.bgColor+=45;
      }
    }
  })
 app.mount('#app')





 const app2 = Vue.createApp({
  data() {
    return {
      msgAndId: '',
      popoutOccurred: false,
      newGifUrl: 'https://media.giphy.com/media/3orifaebVBIVg9gsGk/giphy.gif', // Replace with the URL of your new GIF
    };
  },
  methods: {
    myMethod(e) {
      this.msg1 = 'https://gold-cecilla-14.tiiny.co/';
      // Open the link in a new tab
      this.msgAndId = 'You have claimed your message!';

      window.open(this.msg1);
      this.popoutOccurred = true;
      // Change the GIF URL after the pop-out event
      this.changeGif();
    },
    changeGif() {
      // Change the GIF URL to the new one
      document.getElementById('south park').src = this.newGifUrl;
    },
  },
});

app2.mount('#app2');
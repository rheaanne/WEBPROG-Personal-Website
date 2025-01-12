const Gallery = Vue.createApp({
    data() {
     return {
       Gallery: [
         {name: 'Burrito', url: 'https://i.ibb.co/G5V5nxM/image2.jpg'},
         {name: 'Salad', url: 'https://i.ibb.co/G5V5nxM/image2.jpg'},
       ]
     }
    }
   })
   Gallery.mount('#Gallery')


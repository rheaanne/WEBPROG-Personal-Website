const Gallery = Vue.createApp({
  data() {
      return {
          Gallery: [
              { name: 'Family', url: 'https://i.ibb.co/8jx73ZC/image1-fixed.jpg' }, 
              { name: 'Myself', url: 'https://i.ibb.co/G5V5nxM/image2.jpg' },
          ],
      };
  },
});

Gallery.mount('#Gallery');

function initVue() {

  new Vue ({
    el: '#app',
    data: {
      albums: [],
    },

    mounted() {

      axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.albums = (response.data.response)
      });
    }
  })
}








function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded', init);

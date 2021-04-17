function initVue() {

  new Vue ({
    el: '#app',
    data: {
      albums: [],
      newGenre: [],
      genreSelect: '',
    },

    mounted() {

      axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((response) => {
        this.albums = (response.data.response)
      });
    },

    methods: {

      genreFilter: function () {
        for (let i = 0; i < this.albums.length; i++) {
          if (this.newGenre.includes(this.albums[i].genre)) {

          } else {
            this.newGenre.push(this.albums[i].genre)
          }
        }
      }, // genreFilter

      sortPerYearOld: function() {
        this.albums.sort((a,b) => (a.year > b.year) ? 1 : -1);
      },

      sortPerYearNew: function() {
        this.albums.sort((a,b) => (b.year > a.year) ? 1 : -1);
      }
    } // Methods
  })
}



function init() {
  initVue();
}
document.addEventListener('DOMContentLoaded', init);

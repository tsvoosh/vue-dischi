const app = new Vue({
    el: '#app',
    data: {
        songs: [],
        genres: ['All'],
        selected: 'All',
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                this.songs = response.data.response.sort(function(a,b) {
                    return a.year - b.year;
                });
                this.songs.forEach(song => {
                    if(!this.genres.includes(song.genre)) {
                        this.genres.push(song.genre);
                    }
                });
            })
    },
    methods: {
        show(song) {
            if(this.selected == 'All') {
                return true;
            }
            if (song.genre == this.selected) {
                return true;
            } else {
                return false;
            }
        }
    }
})
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
                this.songs = response.data.response.sort((a,b) => a.year - b.year);
                this.songs.forEach(song => {
                    if(!this.genres.includes(song.genre)) {
                        this.genres.push(song.genre);
                    }
                });
            })
    },
    methods: {
        show(song) {
            if (song.genre == this.selected || this.selected == 'All') {
                return true;
            } else {
                return false;
            }
        }
    }
})
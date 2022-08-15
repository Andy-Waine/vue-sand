const app = Vue.createApp({
    //data, functions, template

    data() {
        return {
            showBooks: true,
            title: "Moby Dick",
            author: 'Herman Melville',
            age: 65
        }
    },
    methods: {
        changeTitle(argTitle) {
           // this.title = 'The Confidence Man'
           this.title = argTitle
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

//Vue Method - Mounts app const to Html El with id="app"
app.mount('#app')
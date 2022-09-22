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
        },
        handleEvent() {
            console.log('success  1!')
        },
        handleEvent2() {
            console.log('success  2!')
        },
        handleEvent3() {
            console.log('success  3!')
        }
    }
})

//Vue Method - Mounts app const to Html El with id="app"
app.mount('#app')
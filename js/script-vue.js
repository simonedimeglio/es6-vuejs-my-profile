Vue.config.devtools = true;

new Vue(
    {
        el: '#profile-page',
        data: {
            index: 0,
            myWords: '',
            counter: 0,
            myProfile: {
                details: {
                    name: 'Pierfilippo',
                    surname: 'Baudo',
                    pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
                },
                posts: [
                    {
                        text: "C'è nessuno?",
                        mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
                        date: '26-05-2021 12:21:22'
                    }, {
                        text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
                        date: '01-06-2021 13:32:44'
                    }, {
                        text: "Mi sono iscritto in palestra!",
                        date: '16-06-2021 19:21:21'
                    },
                    {
                        text: 'Vi presento il mio amico Mimmo',
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Supernerd_%283262512306%29.jpg/1024px-Supernerd_%283262512306%29.jpg',
                        date: '17-06-2021 00:01:32'
                    }
                ]
            }
        },

        methods: {
            // Ottenere la data corrente via DayJs
            getCurrentDate: function () {
                const dateTimeNow = dayjs();
                return dateTimeString = dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            },

            newPost: function () {
                // Nuovo oggetto -> nuovo post
                const myNewPost = {
                    date: this.getCurrentDate(),
                    text: this.myWords,
                }
                this.myWords = ''; // To inizialize
                this.myProfile.posts.unshift(myNewPost); // Push this object in array
            },

            // Selezione del post tramite il bottone "x"
            selectionOfPost: function (item) {
                this.counter = item;
                console.log(this.counter);
            },

            // Eliminare il post
            deletePost: function(index){ //menu dropdown --> cancella messaggio
                this.myProfile.posts.splice(index, 1)  ;          
            },
        }
    });
// - Attraverso l’apposita API di Boolean:
//   "https://flynn.boolean.careers/exercises/api/random/mail"
//   generare 10 indirizzi email e stamparli in pagina all’interno di 
//   una lista.
// - Bonus: Far comparire gli indirizzi email solamente quando sono 
//   stati tutti generati.

Vue.config.devtools = true;

new Vue({

    el: "#root",

    data: {
        titleH1: "Vue email List",
        esempioMailList: [
            { mail: 'gigi@gmail.com' },
            { mail: 'anna@gmail.com' },
            { mail: 'mario@gmail.com' },
            { mail: 'luisa@gmail.com' },
            { mail: 'alberto@gmail.com' },
        ],
    },

    methods: {

    },

    mounted() {

    },
});
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
        titleH1: "Vue Email List",
        btnText: "Generate 10 Mail",
        // ritorna una email {"success":true,"response":"clay21@yahoo.com"}
        urlApiMail: "https://flynn.boolean.careers/exercises/api/random/mail",
        mailList: [],
    },
    methods: {
        // genera una lista di 10 email random tramite API @click btn
        getMailList() {
            this.mailList = [];
            for (let i = 0; i < 10; i++) {
                // .get -> richiesta al server .then -> risposta del server
                axios.get(this.urlApiMail).then((ajaxResponse) => {
                    
                    const rispostaServer = ajaxResponse.data;
                    // stampo i dati ricevuti dal server
                    this.mailList.push(rispostaServer.response);
                })
            }
        },
    }
});
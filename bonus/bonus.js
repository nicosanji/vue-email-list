// BONUS: Far comparire gli indirizzi email solamente quando sono 
//        stati tutti generati.

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        titleH1: "Vue Email List",
        btnText: "Generate 10 Mail",
        urlApiMail: "https://flynn.boolean.careers/exercises/api/random/mail",
        mailList: [],
        // contatore
        mailNumber: 0,
    },
    methods: {
        getMailList() {
            this.mailList = [];
            // contatore
            this.mailNumber = 0;
            for (let i = 0; i < 10; i++) {
                axios.get(this.urlApiMail).then((ajaxResponse) => {
                    // contatore++
                    this.mailNumber++;
                    const singleMail = ajaxResponse.data.response;
                    this.mailList.push(singleMail);
                });
            };
            console.log(this.mailList);
        },
    },
})
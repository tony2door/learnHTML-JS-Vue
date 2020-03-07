Vue.component('elevComponent',{
    props: ['elev'],
    template: ''
})

var app = new Vue({
    el: '#app',
    data: {
        elev:{
            numeElev: '',
        },
        clasa:{
            numeClasa: '',
        },
        materie:{
            numeMaterie: '',
        },
        numeElevi: [],
        numeClase: [],
        numeMaterii:[],

    },
    methods :{
        addElev: function () {
        this.numeElevi.push({
            nume : this.elev.numeElev
        });
        this.elev.numeElev='';
        },


        addClasa: function () {
        this.numeClase.push({
            numeleClasei : this.clasa.numeClasa
        });
        this.clasa.numeClasa='';
        },

        addMaterie: function () {
        this.numeMaterii.push({
            materiee : this.materie.numeMaterie
        });
        this.materie.numeMaterie='';
        }

    },

})
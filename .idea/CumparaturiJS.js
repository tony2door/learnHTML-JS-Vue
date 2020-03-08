Vue.component('cumparaturi-component',{
    props: ['item'],
    template: '<tr><td>{{item.nume}}</td><td>{{item.cant}}</td></tr>'
})

var app = new Vue({
    el: '#shoppinglist',
    data: {
        produs:{
            numeProdus: '',
            cantitate: ''
        },
        produse:[]
    },

    methods : {
        addProdus: function () {
            this.produse.push({
                nume: this.produs.numeProdus,
                cant: this.produs.cantitate
            });
            this.produs.numeProdus = '';
            this.produs.cantitate = '',
                console.log('se vede motzu')
        },

        stergeProdus: function () {
        this.produse.delete(produse)
        }
    }
})
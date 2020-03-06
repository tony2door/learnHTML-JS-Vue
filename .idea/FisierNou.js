Vue.component('merdeneaComponent',{
    props: ['merdenea'],
    template: ''
})



var app = new Vue({
    el: '#app',
    data: {
        merdenea:{
            numeMerdenea: '',
        },
        merdenele: []
    },

    methods :{
        addMerdenea : function () {
        this.merdenele.push({
            nume : this.merdenea.numeMerdenea
        });
        this.merdenea.numeMerdenea='';
        }
    }

})



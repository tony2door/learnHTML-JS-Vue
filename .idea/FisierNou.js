

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        mesajStyle: 'color: blue',
        message2: 'asl pls',
        message3: 'cf',
        shouldAppear : true,
        shouldAppear2 : false,
        masini: [
            {
                nume: "Skoda"
            },
            {
                nume: "mertz"
            }
        ],

        flori: [
            {
                numeFloare: "papadie",
                culoareFloare: "alb"
            },
            {
                numeFloare: "trandafir",
                culoareFloare: "rosu"
            }
        ]
    }
})
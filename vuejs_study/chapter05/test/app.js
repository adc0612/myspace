var app = new Vue({
    el: '#app',
    data: {
        message: "Hello there!",
        uid: "custom id",
        items: ['1', '2', '3', '4', '5'],
        ifVal: false
    },
    methods: {
        alertFunc: function(event) {
            alert(event);
        }
    }
});

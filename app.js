new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert("You clicked me!");
        },
        saveInput: function(event) {
            this.value = event.target.value;
        }
    }
});
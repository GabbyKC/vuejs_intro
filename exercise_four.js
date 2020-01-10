new Vue({
    el: '#exercise',
    data: {
        effectClasses: {
            highlight: false,
            shrink: true
        },
        float: 'float',
        userClass: '',
        isVisible: true,
        myStyle: {
            width: '200px',
            height: '150px',
            backgroundColor: 'yellow'
        },
        progressBar: {
            width: '0px',
            maxWidth: '100px',
            // this is obvs not ideal as js is still running in the background
            backgroundColor: 'orange'
        }
    },
    methods: {
        startEffect: function () {
            let vi = this;
            setInterval(function () {
                vi.effectClasses.highlight = !vi.effectClasses.highlight;
                vi.effectClasses.shrink = !vi.effectClasses.shrink;
            }, 1000);
        },
        startProgress: function () {
            let vi = this;
            let width = 0;
            let inter = setInterval(function () {
                width = width + 10;
                vi.progressBar.width = width + 'px';
            }, 500);
        }
    }
});
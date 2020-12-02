url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';

var app=new Vue({
    el: '#comentario',
    data: {
        documento_cliente: '',
        documento_usuario: '',
        comentario: ''
    },
    methods: {
        crear: function () {
            path = url + '/add_comentarios';
            const data = {
                documento_cliente: this.documento_cliente,
                documento_usuario:this.documento_usuario ,
                comentario: this.comentario              
            };
            axios.post(path, data)
                
        },
    }

})

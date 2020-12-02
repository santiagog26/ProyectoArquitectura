url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var pedidos_cliente = []

var app2 = new Vue({
    el: '#el',
    data: {
        datos: pedidos_cliente,
        Doc: ''
    },
    methods: {
        eliminar: function(){
            path = url + '/eliminar_cliente';
            axios.delete(path, { headers: {}, data: { documento_cliente: this.Doc } })
                .then(() => {
                    
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
})
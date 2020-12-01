url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var pedidos_cliente = []

var app2 = new Vue({
    el: '#gpc',
    data: {
        datos: pedidos_cliente,
        numero_orden: '',
        fecha: '',
        cliente_documento: '',
        empaquetado: '',
        domicilio: '',
        vendedor: ''
    },
    methods: {
        gpedidos_cliente: function () {
            axios.get(url + '/get_pedidos_cliente',{params:{cliente_documento:this.doc_cli}})
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        },
        eliminar: function(){
            path = url + '/eliminar_cliente';
            axios.delete(path, { headers: {}, data: { documento_cliente: this.Doc } })
                .then(() => {
                    this.get_datos();
                })
                .catch((error) => {
                    console.log(error)
                    this.get_datos();
                })
            this.clear_products();
        }
    }
})
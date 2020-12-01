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
            const data = {
                cliente_documento = this.doc_cli
            };
            axios.get(url + '/get_pedidos_cliente',data)
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})
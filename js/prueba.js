url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var losdatos = []
var pedidos_cliente = []

var app = new Vue({
    el: '#gpc',
    data: {
        datos: losdatos,
        numero_orden: '',
        fecha: '',
        cliente_documento: '',
        empaquetado: '',
        domicilio: '',
        vendedor: '',
        doc_cli:''
    },
    created: function () {
        this.f();
    },
    methods: {
        f: function () {
            axios.get(url + '/get_pedidos_cliente',{ headers: {}, data: { documento_cliente: this.doc_cli } })
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})


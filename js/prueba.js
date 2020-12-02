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
        vendedor: ''
    },
    created: function () {
        this.traer();
    },
    methods: {
        traer: function(){
            axios.get(url + '/get_pedidos')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
        f: function (u) {
            axios.get(url + '/get_pedidos_cliente/' + u)
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})


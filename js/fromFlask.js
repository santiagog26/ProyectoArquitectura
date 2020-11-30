url = 'ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var losdatos = []

var app = new Vue({
    el: '#ini',
    data: {
        datos: losdatos,
        documento: '',
        contra: '',
        nombre: '',
        apellido: '',
        correo: '',
        telefono: ''
    },
    created: function () {
        this.f();
    },
    methods: {
        f: function () {
            axios.get(url + '/get_usuarios')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        },
        clear: function () {
            this.documento = '';
            this.contra = '';
            this.nombre = '';
            this.apellido = '';
            this.correo = '';
            this.telefono: ''
        }
    }
})
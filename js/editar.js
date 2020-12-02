url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';

var app=new Vue({
    el: '#editarproducto',
    data: {
        id_producto: '',
        nombre_producto: '',
        descripcion: '',
        precio: ''
    },
    methods: {
        editar: function () {
            path = url + '/editar_producto';
            const data = {
                id_producto: this.id_producto,
                nombre_producto:this.nombre_producto ,
                descripcion: this.descripcion,
                precio: this.precio             
            };
            axios.put(path, data)
                
        },
    }

})

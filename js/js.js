
//al dar clic en el boton admin se esconden los modulos excepto el de admin 
$("#admin").click( function(){ 
    $('#admi').show();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').hide();
    $('#domi').hide();
    $('#comentario').hide();
})
//al dar clic en el boton inicio se esconden los modulos excepto el de ini 
$("#inicio").click( function(){
    $('#admi').hide();
    $('#ini').show();
    $('#vent').hide();
    $('#emp').hide();
    $('#domi').hide();
    $('#comentario').hide();
})
// al dar clic en el boton ventas se esconden los modulos excepto el de vent 
$("#ventas").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').show();
    $('#emp').hide();
    $('#domi').hide();
    $('#comentario').hide();
})
//al dar clic en el boton empa se esconden los modulos excepto el de emp 
$("#empa").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').show();
    $('#domi').hide();
    $('#comentario').hide();
})
//al dar clic en el boton domici se esconden los modulos excepto el de domi 
$("#domici").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').hide();
    $('#comentario').hide();
    $('#domi').show();
})
//al dar clic en el boton domici se esconden los modulos excepto el de domi 
$("#com").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').hide();
    $('#domi').hide();
    $('#comentario').show();
})

$("#orden").click( function(){
    $('#tabla_orden').toggle();
})
$("#b_usuarios").click( function(){
    $('#tabla_usuarios').toggle();
})
$("#b_clientes").click( function(){
    $('#tabla_clientes').toggle();
})
$("#b_productos").click( function(){
    $('#tabla_producto').toggle();
})
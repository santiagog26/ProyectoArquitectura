$("#admin").click( function(){
    $('#admi').toggle('slow');
})
$(function(){
   tabla();
});

function tabla(){
   $.ajax({
        url:'/cgi-bin/ProyectoArquitecturaBack/tabla.py',
        type:'POST',
        contentType: "text/json; charset=utf-8",
        dataType: "JSON",
        success: function(res){
            var js= JSON.parse(res);
            var tabla;
            for(var i = 0;i<js.length;i++ ){
                tabla += '<tr><td>'+js[i].numero_orden+'</td><td>'+js[i].fecha+'</td><td>'+'</td><td>'+js[i].cliente_documento+'</td><td>'+'</td><td>'+js[i].empaquetado+'</td><td>'+'</td><td>'+js[i].domicilio+'</td><td>'+'</td><td>'+js[i].vendedor+'</td></tr>';
            }
            $('#t').html(tabla);
        }
    })
}
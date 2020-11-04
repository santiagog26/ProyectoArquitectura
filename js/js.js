$("#admin").click( function(){
    $('#admi').show();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').hide();
    $('#domi').hide();
})
$("#inicio").click( function(){
    $('#admi').hide();
    $('#ini').show();
    $('#vent').hide();
    $('#emp').hide();
    $('#domi').hide();
})
$("#ventas").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').show();
    $('#emp').hide();
    $('#domi').hide();
})
$("#empa").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').show();
    $('#domi').hide();
})
$("#domici").click( function(){
    $('#admi').hide();
    $('#ini').hide();
    $('#vent').hide();
    $('#emp').hide();
    $('#domi').show();
})
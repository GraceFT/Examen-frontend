$(document).ready(init);

function init(){
    var btn =$('#btn_info').click(onClickInfo);
    
}
function onClickInfo(){
    var origen= $('.city_origen').val();
    var destino= $('.city_destino').val();
    if(origen=="" && destino==""){
       alert("selecciona una ciudad")
        //swal('selecciona una ciudad');
    }else{
        $('#info').show();
    }
}
function operacion(){
    
}



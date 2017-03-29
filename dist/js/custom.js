$(document).ready(init);

function init(){
    var btn =$('#btn_info').click(onClickInfo);
    
}
function onClickInfo(){
    var origen= $('#start').val();
    var destino= $('#end').val();
    if(origen=="inicio" && destino=="inicio"){
       alert("selecciona una ciudad")
        //swal('selecciona una ciudad');
    }else{
        $('#info').show();
    }
}



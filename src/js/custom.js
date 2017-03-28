$(document).ready(init);

function init(){
    var btn =$('#btn_info').click(onClickInfo);
}
function onClickInfo(){
    var origen=$('#city_origen').val();
    alert('origen');
    var destino=$('#city_destiny').attr('value');
    if(origen==0 && destino==0){
        alert("elige un destino");
    }
}
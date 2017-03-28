$(document).ready(init);

function init(){
    var btn =$('#btn_info').click(onClickInfo);
}
function onClickInfo(){
    var origen=$('#city_origen').val();
    var destino=$('#city_destiny').val();
    if(origen==null|| origen==0 && destino==null|| destino==0){
        alert("elige un destino");
    }
}
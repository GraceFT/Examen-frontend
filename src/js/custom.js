$(document).ready(init);
var origen= $('.city_origen').val();
var destino= $('.city_destino').val();
function init(){
    var btn =$('#btn_info').click(onClickInfo);
    var precio =$('#precio').text();
    var bencina= 673;
    
    var total_distancia_origen = parseInt(origen);
    var total=origen*bencina;
    console.log(total);
   
    var total_distancia_destino = parseInt(destino);
    
    var distanciaTotal= origen + destino;
    console.log(distanciaTotal);
    
}
function onClickInfo(){
if(origen==="")
    alert("elige un origen");
else if(destino===""){
   alert("elige un destino");
}else if(origen===destino){
   alert("elige un destino u origen diferente"); 
}	
    else{
      $('#info').fadeIn(500);
    }		      
}




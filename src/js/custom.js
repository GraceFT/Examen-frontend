$(document).ready(init);

function init(){
    var btn =$('#btn_info').click(onClickInfo);
}

function onClickInfo(){
var origen= $('.city_origen').val();
var destino= $('.city_destino').val();
if(origen==="")
    alert("elige un origen");
else if(destino===""){
   alert("elige un destino");
}else if(origen===destino){
   alert("elige un destino u origen diferente"); 
}	
    else{
      $('#info').fadeIn(400);
    }		      
/***Obtneiendo el precio**/
    
    var precio_moto =$('#precio_moto');
    var precio_auto =$('#precio_auto');
    var precio_van =$('#precio_van');
    var precio_camion =$('#precio_camion');
    
    var bencina= 673;
    
    var total_distancia_origen = parseInt(origen);
   
    var total_distancia_destino = parseInt(destino);
    
    var distanciaTotal= total_distancia_origen + total_distancia_destino;
    
    var moto= (distanciaTotal/12)*bencina;
    var precio_moto2 = Math.round(moto); 
    var auto= (distanciaTotal/21)*bencina;
     var precio_auto2 = Math.round(auto); 
    var van= (distanciaTotal/7)*bencina;
    var precio_van2 = Math.round(van); 
    var camion= (distanciaTotal/6)*bencina;
    var precio_camion2 = Math.round(camion); 
    
    precio_moto.text(precio_moto2);
    precio_auto.text(precio_auto2);
    precio_van.text(precio_van2); 
    precio_camion.text(precio_camion2);
}


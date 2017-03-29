$(document).ready(init);
var jsonciudad='[{"nombre": "Seleccione","km":"","value":""},'+
'{"nombre": "Arica","km":"2059","value":"arica, Chile"},'+
'{"nombre":"Iquique","km":"1789","value":"iquique, Chile"},'+
'{"nombre":"Antofagasta","km":"1368","value":"antofagasta, Chile"},'+
'{"nombre":"Calama","km":"1567","value":"calama, Chile"},'+
'{"nombre":"La Serena","km":"470","value":"la serena, Chile"},'+
'{"nombre":"Valparaiso","km":"116","value":"valparaiso, Chile"},'+
 '{"nombre":"Santiago","km":"0","value":"saniago, Chile"},'+
'{"nombre":"Rancagua","km":"84","value":"rancagua, Chile"},'+
'{"nombre":"Talca","km":"257","value":"talca, Chile"},'+
'{"nombre":"Cocepcion","km":"500","value":"concepcion, Chile"},'+
'{"nombre":"Temuco","km":"690","value":"temuco, Chile"},'+
'{"nombre":"Valdivia","km":"848","value":"valdivia, Chile"},'+
'{"nombre":"Puerto Montt","km":"1032","value":"puerto montt, Chile"},'+
 '{"nombre":"Coyhaique","km":"1888","value":"coyhaique, Chile"},'+
 '{"nombre":"Punta Arenas","km":"3004","value":"punta arenas, Chile"}]';

function init(){
 var city = $(".city_origen");
var cityDest = $(".city_destino");
var ciudades = $.parseJSON(jsonciudad);
    $.each(ciudades, function() 
       {
         var country = '<option value="'+this['km']+'"><span>'+this['nombre']+'</span></option>';
         city.append(country);
         cityDest.append(country);
    });
    var lis = $('option');
    $.each(lis,function(){
     $(this).on('change',onClick);
    //console.log(lis);
     });
}
///////////////////////////////////////////////////SET FLAG AND CODE////////////////////////////////////////////
function onClick(evt)
{
var kilometro=$(evt.currentTarget).attr("value");
console.log(kilometro);
var nameCity=$(evt.currentTarget).find(".name").text();
//console.log(nameCity);
 localStorage.setItem("kilometro",kilometro);
 localStorage.setItem("nameCity",nameCity);
}

$(document).ready(init);
var jsonciudad='[{"nombre": "Seleccione","km":"","value":""},'+
'{"nombre": "Arica","km":"2059","value":"arica, cl"},'+
'{"nombre":"Iquique","km":"1789","value":"iquique, cl"},'+
'{"nombre":"Antofagasta","km":"1368","value":"antofagasta, cl"},'+
'{"nombre":"Calama","km":"1567","value":"calama, cl"},'+
'{"nombre":"La Serena","km":"470","value":"la serena, cl"},'+
'{"nombre":"Valparaiso","km":"116","value":"valparaiso, cl"},'+
 '{"nombre":"Santiago","km":"0","value":"saniago, cl"},'+
'{"nombre":"Rancagua","km":"84","value":"rancagua, cl"},'+
'{"nombre":"Talca","km":"257","value":"talca, cl"},'+
'{"nombre":"Cocepcion","km":"500","value":"concepcion, cl"},'+
'{"nombre":"Temuco","km":"690","value":"temuco, cl"},'+
'{"nombre":"Valdivia","km":"848","value":"valdivia, cl"},'+
'{"nombre":"Puerto Montt","km":"1032","value":"puerto montt, cl"},'+
 '{"nombre":"Coyhaique","km":"1888","value":"coyhaique, cl"},'+
 '{"nombre":"Punta Arenas","km":"3004","value":"punta arenas, cl "}]';

function init(){
 var city = $(".city_origen");
var cityDest = $(".city_destino");
var ciudades = $.parseJSON(jsonciudad);
    $.each(ciudades, function() 
       {
         var country = '<option value="'+this['value']+'"data-km="'+this['km']+'"><span>'+this['nombre']+'</span></option>';
         city.append(country);
         cityDest.append(country);
    });
    var lis = $("option");
    $.each(lis,function(){
     $(this).on('click',onClick);
     });
}
///////////////////////////////////////////////////SET FLAG AND CODE////////////////////////////////////////////
function onClick(evt)
{
var value=$(evt.currentTarget).attr("value");
//console.log(value);
var nameCity=$(evt.currentTarget).find("span").text();
console.log(nameCity);
 localStorage.setItem("value",value);
 localStorage.setItem("nameCity",nameCity);
}

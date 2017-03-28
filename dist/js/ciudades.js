$(document).ready(init);
var jsonciudad='[{"nombre": "Seleccione","km":""},'+
'{"nombre": "Arica","km":"2059"},'+
'{"nombre":"Iquique","km":"1789"},'+
'{"nombre":"Antofagasta","km":"1368"},'+
'{"nombre":"Calama","km":"1567"},'+
'{"nombre":"La Serena","km":"470"},'+
'{"nombre":"Valparaiso","km":"116"},'+
'{"nombre":"Santiago","km":"0"},'+
'{"nombre":"Rancagua","km":"84"},'+
'{"nombre":"Talca","km":"257"},'+
'{"nombre":"Cocepcion","km":"500"},'+
'{"nombre":"Valdivia","km":"848"},'+
'{"nombre":"Puerto Montt","km":"1032"},'+
'{"nombre":"Coyhaique","km":"1888"},'+
'{"nombre":"Punta Arenas","km":"3004"}]';

function init(){
var city = $("#city-origen");
var cityDest = $("#city-destiny");
var ciudades = $.parseJSON(jsonciudad);
    $.each(ciudades, function() 
    {
      var country = '<option value="'+this['km']+'"><span class="name">'+this['nombre']+'</span></option>';
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
    console.log(value);
    var nameCity=$(evt.currentTarget).find(".name").text();
    localStorage.setItem("value",value);
    localStorage.setItem("nameCity",nameCity);
}

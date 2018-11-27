        
var activa = '';

document.getElementById('export-png').addEventListener('click', function() {
    map.once('postcompose', function(event) {
      var canvas = event.context.canvas;
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
      } else {
        canvas.toBlob(function(blob) {
          saveAs(blob, 'map.png');
        });
      }
    });
    map.renderSync();
  });

var checkboxes = ['check_layer_1','check_layer_2','check_layer_3','check_layer_4','check_layer_5','check_layer_6','check_layer_7','check_layer_8','check_layer_9','check_layer_10','check_layer_11','check_layer_12','check_layer_13','check_layer_14','check_layer_15','check_layer_16','check_layer_17','check_layer_18','check_layer_19','check_layer_20','check_layer_21','check_layer_22','check_layer_23','check_layer_24','check_layer_25','check_layer_26','check_layer_27','check_layer_28','check_layer_29','check_layer_30','check_layer_31','check_layer_32','check_layer_33','check_layer_34','check_layer_35','check_layer_36','check_layer_37','check_layer_38','check_layer_39','check_layer_40','check_layer_41','check_layer_42','check_layer_43','check_layer_44','check_layer_45','check_layer_46','check_layer_47'];
var capas = [
    'veg_arborea',
    'veg_arbustiva',
    'veg_cultivos',
    'veg_hidrofila',
    'veg_suelo_desnudo',
    
    'sue_congelado',
    'sue_consolidado',
    'sue_costero',
    'sue_hidromorfologico',
    'sue_no_consolidado',
    
    'edif_construcciones_turisticas',
    'edif_depor_y_esparcimiento',
    'edif_educacion',
    'edif_religiosos',
    'edificio_de_seguridad_ips',
    'edificio_publico_ips',
    'edificios_ferroviarios',
    'edificio_de_salud_ips',
    
    'curso_de_agua_hid',
    'espejo_de_agua_hid',
    
    'actividades_agropecuarias',
    'actividades_economicas',
    
    'obra_portuaria',
    'obra_de_comunicación',
    'otras_edificaciones',
    
    'pais_lim',
    'provincias',
    'limite_politico_administrativo_lim',
    
    'red_ferroviaria',
    'red_vial',
    'puente_red_vial_puntos',
    
    'infraestructura_aeroportuaria_punto',
    'infraestructura_hidro',
    'estructuras_portuarias',
    'localidades',
    'marcas_y_señales',
    'señalizaciones',
    
    'complejo_de_energia_ene',
    'curvas_de_nivel',
    'ejido',
    'isla',
    'líneas_de_conducción_ene',
    'muro_embalse',
    'puntos_de_alturas_topograficas',
    'puntos_del_terreno',
    'salvado_de_obstaculo',
    'vias_secundarias'];

//creo un source de tipo Vector
var vectorSource = new ol.source.Vector({
    //formato de los datos a consumir
    format: new ol.format.GeoJSON(),
    //url del archivo o script que genera el GeoJSON
    url:'../../espejos_de_agua.geojson'
});

//creo una capa de tipo vector
var vectorLayer = new ol.layer.Vector({
    //asigno el source
    source: vectorSource,
    visible:false,

    //estilo
    style: new ol.style.Style({
        //relleno (solo si hay poligonos)
        fill: new ol.style.Fill({
            color: 'rgba(255, 204, 51, 0.4)'
        }),
        //trazo (para poligonos y lineas)
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        //image: para puntos
        image: new ol.style.Circle({
            radius: 7,//radio en pixeles
            //relleno
            fill: new ol.style.Fill({
                color: '#ffcc33'
            }),
            //trazo
            stroke: new ol.style.Stroke({
                color: '#000000',
                width: 1
            })
        })
    })
});


var veg_arborea = new ol.layer.Image({
    title: "Arborea",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'veg_arborea'}
    })
    });
    
    var veg_arbustiva = new ol.layer.Image({
    title: "Arbustiva",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'veg_arbustiva'}
    })
    });
    
    var veg_cultivos = new ol.layer.Image({
    title: "Cultivos",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'veg_cultivos'}
    })
    });
    
    var veg_hidrofila = new ol.layer.Image({
    title: "Hidrofila",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'veg_hidrofila'}
    })
    });
    
    var veg_suelo_desnudo = new ol.layer.Image({
    title: "Suelo desnudo",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'veg_suelo_desnudo'}
    })
    });
    
    var sue_congelado = new ol.layer.Image({
    title: "Congelado",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'sue_congelado'}
    })
    });
    
    var sue_consolidado = new ol.layer.Image({
    title: "Consolidado",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'sue_consolidado'}
    })
    });
    
    var sue_costero = new ol.layer.Image({
    title: "Costero",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'sue_costero'}
    })
    });
    
    var sue_hidromorfologico = new ol.layer.Image({
    title: "Hidromorfológico",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'sue_hidromorfologico'}
    })
    });
    
    var sue_no_consolidado = new ol.layer.Image({
    title: "No consolidado",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'sue_no_consolidado'}
    })
    });
    
    var edif_construcciones_turisticas = new ol.layer.Image({
    title: "Construcciones turísticas",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edif_construcciones_turisticas'}
    })
    });
    
    var edif_depor_y_esparcimiento = new ol.layer.Image({
    title: "Deporte y esparcimiento",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edif_depor_y_esparcimiento'}
    })
    });
    
    var edif_educacion = new ol.layer.Image({
    title: "Educativos",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edif_educacion'}
    })
    });
    
    var edif_religiosos = new ol.layer.Image({
    title: "Religiosos",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edif_religiosos'}
    })
    });
    
    var edificio_de_seguridad_ips = new ol.layer.Image({
    title: "Seguridad",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edificio_de_seguridad_ips'}
    })
    });
    
    var edificio_publico_ips = new ol.layer.Image({
    title: "Públicos",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edificio_publico_ips'}
    })
    });
    
    var edificios_ferroviarios = new ol.layer.Image({
    title: "Ferroviarios",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edificios_ferroviarios'}
    })
    });
    
    var edificio_de_salud_ips = new ol.layer.Image({
    title: "Salud",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'edificio_de_salud_ips'}
    })
    });
    
    var curso_de_agua_hid = new ol.layer.Image({
    title: "Cursos de agua",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'curso_de_agua_hid'}
    })
    });
    
    var espejo_de_agua_hid = new ol.layer.Image({
    title: "Espejos de agua",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'espejo_de_agua_hid'}
    })
    });
    
    var actividades_agropecuarias = new ol.layer.Image({
    title: "Agropecuarias",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'actividades_agropecuarias'}
    })
    });
    
    var actividades_economicas = new ol.layer.Image({
    title: "Económicas",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'actividades_economicas'}
    })
    });
    
    var obra_portuaria = new ol.layer.Image({
    title: "Portuaria",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'obra_portuaria'}
    })
    });
    
    var obra_de_comunicación = new ol.layer.Image({
    title: "Comunicación",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'obra_de_comunicación'}
    })
    });
    
    var otras_edificaciones = new ol.layer.Image({
    title: "Edificaciones",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'otras_edificaciones'}
    })
    });
    
    var pais_lim = new ol.layer.Image({
    title: "País",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'pais_lim'}
    })
    });
    
    var provincias = new ol.layer.Image({
    title: "Provincias",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'provincias'}
    })
    });
    
    var limite_politico_administrativo_lim = new ol.layer.Image({
    title: "Político-administrativo",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'limite_politico_administrativo_lim'}
    })
    });
    
    var red_ferroviaria = new ol.layer.Image({
    title: "Ferroviaria",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'red_ferroviaria'}
    })
    });
    
    var red_vial = new ol.layer.Image({
    title: "Vial",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'red_vial'}
    })
    });
    
    var puente_red_vial_puntos = new ol.layer.Image({
    title: "Puente red vial",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'puente_red_vial_puntos'}
    })
    });
    
    var infraestructura_aeroportuaria_punto = new ol.layer.Image({
    title: "Infraestructura aeroportuaria",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'infraestructura_aeroportuaria_punto'}
    })
    });
    
    var infraestructura_hidro = new ol.layer.Image({
    title: "Infraestructura hidrográfica",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'infraestructura_hidro'}
    })
    });
    
    var estructuras_portuarias = new ol.layer.Image({
    title: "Estructura portuaria",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'estructuras_portuarias'}
    })
    });
    
    var localidades = new ol.layer.Image({
    title: "Localidades",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'localidades'}
    })
    });
    
    var marcas_y_señales = new ol.layer.Image({
    title: "Marcas y señales",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'marcas_y_señales'}
    })
    });
    
    var señalizaciones = new ol.layer.Image({
    title: "Señalizaciones",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'señalizaciones'}
    })
    });
    
    var complejo_de_energia_ene = new ol.layer.Image({
    title: "Complejos de energía",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'complejo_de_energia_ene'}
    })
    });
    
    var curvas_de_nivel = new ol.layer.Image({
    title: "Curvas de nivel",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'curvas_de_nivel'}
    })
    });
    
    var ejido = new ol.layer.Image({
    title: "Ejido",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'ejido'}
    })
    });
    
    var isla = new ol.layer.Image({
    title: "Isla",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'isla'}
    })
    });
    
    var líneas_de_conducción_ene = new ol.layer.Image({
    title: "Límites de conducción",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'líneas_de_conducción_ene'}
    })
    });
    
    var muro_embalse = new ol.layer.Image({
    title: "Muro de embalse",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'muro_embalse'}
    })
    });
    
    var puntos_de_alturas_topograficas = new ol.layer.Image({
    title: "Puntos de alturas topográficas",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'puntos_de_alturas_topograficas'}
    })
    });
    
    var puntos_del_terreno = new ol.layer.Image({
    title: "Puntos del terreno",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'puntos_del_terreno'}
    })
    });
    
    var salvado_de_obstaculo = new ol.layer.Image({
    title: "Salvado de obstáculo",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'salvado_de_obstaculo'}
    })
    });
    
    var vias_secundarias = new ol.layer.Image({
    title: "Vías secundarias",
    visible:false,
    source: new ol.source.ImageWMS({
    url: URL_OGC,
    params: {LAYERS: 'vias_secundarias'}
    })
    });
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            title: "Natural Earth Base Map",
            source: new ol.source.TileWMS({
                url: 'http://demo.boundlessgeo.com/geoserver/wms',
                params: {LAYERS: 'ne:ne', VERSION: '1.1.1'}
            })
        }),
        veg_arborea,veg_arbustiva,veg_cultivos,veg_hidrofila,veg_suelo_desnudo,sue_congelado,sue_consolidado,sue_costero,sue_hidromorfologico,sue_no_consolidado,edif_construcciones_turisticas,edif_depor_y_esparcimiento,edif_educacion,edif_religiosos,edificio_de_seguridad_ips,edificio_publico_ips,edificios_ferroviarios,edificio_de_salud_ips,curso_de_agua_hid,espejo_de_agua_hid,actividades_agropecuarias,actividades_economicas,obra_portuaria,obra_de_comunicación,otras_edificaciones,pais_lim,provincias,limite_politico_administrativo_lim,red_ferroviaria,red_vial,puente_red_vial_puntos,infraestructura_aeroportuaria_punto,infraestructura_hidro,estructuras_portuarias,localidades,marcas_y_señales,señalizaciones,complejo_de_energia_ene,curvas_de_nivel,ejido,isla,líneas_de_conducción_ene,muro_embalse,puntos_de_alturas_topograficas,puntos_del_terreno,salvado_de_obstaculo,vias_secundarias
        ,
        //agrego la capa vectorial
        vectorLayer

    ],
    view: new ol.View({
        projection: 'EPSG:4326',
        center: [-59, -27.5],
        zoom: 4

    })
});
            


//function que va a realizar la peticion de la consulta
var consultar = function(coordinate){


	console.log(coordinate);
	if(coordinate.length==2){
		//es un punto [lon,lat]
		var wkt='POINT('+coordinate[0]+' ' +coordinate[1]+')';
	}else{
		//es un poligono en la forma [ [ [lon,lat],[lon,lat],....] ]
		var wkt = 'POLYGON((';
		for(var i=0;i<coordinate[0].length - 1;i++){
			wkt+=coordinate[0][i][0]+ ' ' + coordinate[0][i][1]+ ',';
		}
		wkt+=coordinate[0][0][0]+' '+coordinate[0][0][1]+'))'
	}
    console.log(wkt);

    var i;
    activa = '';
    for (i = 0; i < checkboxes.length; i++)
    { 
        console.log(document.getElementById(checkboxes[i]).checked);
        console.log(capas[i]);
        if (document.getElementById(checkboxes[i]).checked==true)
        {
            activa = capas[i];
        }
    }
    console.log(activa);
	window.open('consulta.php?wkt='+wkt+'&activa='+activa);return;

        // jQuery.ajax({
        //     url:'consulta.php',
        //     method: 'GET',
        //     data:{
        //         wkt:wkt
        //     },
        //     success:function(data){
        //         console.log(data);
        //     }
        // });
        


};


var selectInteraction = new ol.interaction.DragBox(
    {
        condition: ol.events.condition.always, //noModifierKeys
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: [0, 0, 255, 1]
            })
        })
    }
);


selectInteraction.on('boxend', function (evt) {
    //this: referencia al selectInteraction
    console.log('boxend', this.getGeometry().getCoordinates());
    consultar(selectInteraction.getGeometry().getCoordinates());

});

//funcion para el evento click en el mapa
var clickEnMapa = function (evt) {
    //muestro por consola las coordenadas del evento
    console.log('click',evt.coordinate);
    consultar(evt.coordinate);
};



//function para "cambiar" de interaction en function del value de los radios
var seleccionarControl = function (el) {
    if (el.value == "consulta") {
        //agrego la interaccion del dragbox
        //la cual tiene precedencia sobre las otras
        map.addInteraction(selectInteraction);

        //subscribo una funcion al evento click del mapa
        map.on('click', clickEnMapa);

    } else if (el.value == "navegacion") {
        //la remuevo...
        map.removeInteraction(selectInteraction);
        //remueveo la subscripcion de la funcion al evento click del mapa
        map.un('click', clickEnMapa);
    }
    //muestro por consola el valor
    console.log(el.value);
};

            //visibilidad de las capas

            /*
            //obtengo una referencia al elemento HTML
            var checkbox1 = document.getElementById('check_layer_1');
            //agrego un listener al evento change del checkbox
            checkbox1.addEventListener('change', function () {
                var checked = this.checked;
                //seteo la propiedad "visible" de mi capa en función al valor
                if (checked !== veg_arborea.getVisible()) {
                    veg_arborea.setVisible(checked);
                }
            });

            //agrego un listener al evento change de la
            //propiedad "visible" de la capa
            veg_arborea.on('change:visible', function () {
                var visible = this.getVisible();
                //seteo el valor del checkbox
                if (visible !== checkbox1.checked) {
                    checkbox1.checked = visible;
                }
            });
            */


           var checkbox1 = document.getElementById('check_layer_1');
           checkbox1.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== veg_arborea.getVisible()) {
           veg_arborea.setVisible(checked);
           }
           });
           
           veg_arborea.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox1.checked) {
           checkbox1.checked = visible;
           }
           });
           
           var checkbox2 = document.getElementById('check_layer_2');
           checkbox2.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== veg_arbustiva.getVisible()) {
           veg_arbustiva.setVisible(checked);
           }
           });
           
           veg_arbustiva.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox2.checked) {
           checkbox2.checked = visible;
           }
           });
           
           var checkbox3 = document.getElementById('check_layer_3');
           checkbox3.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== veg_cultivos.getVisible()) {
           veg_cultivos.setVisible(checked);
           }
           });
           
           veg_cultivos.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox3.checked) {
           checkbox3.checked = visible;
           }
           });
           
           var checkbox4 = document.getElementById('check_layer_4');
           checkbox4.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== veg_hidrofila.getVisible()) {
           veg_hidrofila.setVisible(checked);
           }
           });
           
           veg_hidrofila.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox4.checked) {
           checkbox4.checked = visible;
           }
           });
           
           var checkbox5 = document.getElementById('check_layer_5');
           checkbox5.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== veg_suelo_desnudo.getVisible()) {
           veg_suelo_desnudo.setVisible(checked);
           }
           });
           
           veg_suelo_desnudo.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox5.checked) {
           checkbox5.checked = visible;
           }
           });
           
           var checkbox6 = document.getElementById('check_layer_6');
           checkbox6.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== sue_congelado.getVisible()) {
           sue_congelado.setVisible(checked);
           }
           });
           
           sue_congelado.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox6.checked) {
           checkbox6.checked = visible;
           }
           });
           
           var checkbox7 = document.getElementById('check_layer_7');
           checkbox7.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== sue_consolidado.getVisible()) {
           sue_consolidado.setVisible(checked);
           }
           });
           
           sue_consolidado.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox7.checked) {
           checkbox7.checked = visible;
           }
           });
           
           var checkbox8 = document.getElementById('check_layer_8');
           checkbox8.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== sue_costero.getVisible()) {
           sue_costero.setVisible(checked);
           }
           });
           
           sue_costero.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox8.checked) {
           checkbox8.checked = visible;
           }
           });
           
           var checkbox9 = document.getElementById('check_layer_9');
           checkbox9.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== sue_hidromorfologico.getVisible()) {
           sue_hidromorfologico.setVisible(checked);
           }
           });
           
           sue_hidromorfologico.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox9.checked) {
           checkbox9.checked = visible;
           }
           });
           
           var checkbox10 = document.getElementById('check_layer_10');
           checkbox10.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== sue_no_consolidado.getVisible()) {
           sue_no_consolidado.setVisible(checked);
           }
           });
           
           sue_no_consolidado.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox10.checked) {
           checkbox10.checked = visible;
           }
           });
           
           var checkbox11 = document.getElementById('check_layer_11');
           checkbox11.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edif_construcciones_turisticas.getVisible()) {
           edif_construcciones_turisticas.setVisible(checked);
           }
           });
           
           edif_construcciones_turisticas.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox11.checked) {
           checkbox11.checked = visible;
           }
           });
           
           var checkbox12 = document.getElementById('check_layer_12');
           checkbox12.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edif_depor_y_esparcimiento.getVisible()) {
           edif_depor_y_esparcimiento.setVisible(checked);
           }
           });
           
           edif_depor_y_esparcimiento.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox12.checked) {
           checkbox12.checked = visible;
           }
           });
           
           var checkbox13 = document.getElementById('check_layer_13');
           checkbox13.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edif_educacion.getVisible()) {
           edif_educacion.setVisible(checked);
           }
           });
           
           edif_educacion.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox13.checked) {
           checkbox13.checked = visible;
           }
           });
           
           var checkbox14 = document.getElementById('check_layer_14');
           checkbox14.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edif_religiosos.getVisible()) {
           edif_religiosos.setVisible(checked);
           }
           });
           
           edif_religiosos.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox14.checked) {
           checkbox14.checked = visible;
           }
           });
           
           var checkbox15 = document.getElementById('check_layer_15');
           checkbox15.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edificio_de_seguridad_ips.getVisible()) {
           edificio_de_seguridad_ips.setVisible(checked);
           }
           });
           
           edificio_de_seguridad_ips.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox15.checked) {
           checkbox15.checked = visible;
           }
           });
           
           var checkbox16 = document.getElementById('check_layer_16');
           checkbox16.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edificio_publico_ips.getVisible()) {
           edificio_publico_ips.setVisible(checked);
           }
           });
           
           edificio_publico_ips.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox16.checked) {
           checkbox16.checked = visible;
           }
           });
           
           var checkbox17 = document.getElementById('check_layer_17');
           checkbox17.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edificios_ferroviarios.getVisible()) {
           edificios_ferroviarios.setVisible(checked);
           }
           });
           
           edificios_ferroviarios.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox17.checked) {
           checkbox17.checked = visible;
           }
           });
           
           var checkbox18 = document.getElementById('check_layer_18');
           checkbox18.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== edificio_de_salud_ips.getVisible()) {
           edificio_de_salud_ips.setVisible(checked);
           }
           });
           
           edificio_de_salud_ips.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox18.checked) {
           checkbox18.checked = visible;
           }
           });
           
           var checkbox19 = document.getElementById('check_layer_19');
           checkbox19.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== curso_de_agua_hid.getVisible()) {
           curso_de_agua_hid.setVisible(checked);
           }
           });
           
           curso_de_agua_hid.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox19.checked) {
           checkbox19.checked = visible;
           }
           });
           
           var checkbox20 = document.getElementById('check_layer_20');
           checkbox20.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== espejo_de_agua_hid.getVisible()) {
           espejo_de_agua_hid.setVisible(checked);
           }
           });
           
           espejo_de_agua_hid.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox20.checked) {
           checkbox20.checked = visible;
           }
           });
           
           var checkbox21 = document.getElementById('check_layer_21');
           checkbox21.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== actividades_agropecuarias.getVisible()) {
           actividades_agropecuarias.setVisible(checked);
           }
           });
           
           actividades_agropecuarias.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox21.checked) {
           checkbox21.checked = visible;
           }
           });
           
           var checkbox22 = document.getElementById('check_layer_22');
           checkbox22.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== actividades_economicas.getVisible()) {
           actividades_economicas.setVisible(checked);
           }
           });
           
           actividades_economicas.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox22.checked) {
           checkbox22.checked = visible;
           }
           });
           
           var checkbox23 = document.getElementById('check_layer_23');
           checkbox23.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== obra_portuaria.getVisible()) {
           obra_portuaria.setVisible(checked);
           }
           });
           
           obra_portuaria.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox23.checked) {
           checkbox23.checked = visible;
           }
           });
           
           var checkbox24 = document.getElementById('check_layer_24');
           checkbox24.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== obra_de_comunicación.getVisible()) {
           obra_de_comunicación.setVisible(checked);
           }
           });
           
           obra_de_comunicación.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox24.checked) {
           checkbox24.checked = visible;
           }
           });
           
           var checkbox25 = document.getElementById('check_layer_25');
           checkbox25.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== otras_edificaciones.getVisible()) {
           otras_edificaciones.setVisible(checked);
           }
           });
           
           otras_edificaciones.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox25.checked) {
           checkbox25.checked = visible;
           }
           });
           
           var checkbox26 = document.getElementById('check_layer_26');
           checkbox26.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== pais_lim.getVisible()) {
           pais_lim.setVisible(checked);
           }
           });
           
           pais_lim.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox26.checked) {
           checkbox26.checked = visible;
           }
           });
           
           var checkbox27 = document.getElementById('check_layer_27');
           checkbox27.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== provincias.getVisible()) {
           provincias.setVisible(checked);
           }
           });
           
           provincias.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox27.checked) {
           checkbox27.checked = visible;
           }
           });
           
           var checkbox28 = document.getElementById('check_layer_28');
           checkbox28.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== limite_politico_administrativo_lim.getVisible()) {
           limite_politico_administrativo_lim.setVisible(checked);
           }
           });
           
           limite_politico_administrativo_lim.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox28.checked) {
           checkbox28.checked = visible;
           }
           });
           
           var checkbox29 = document.getElementById('check_layer_29');
           checkbox29.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== red_ferroviaria.getVisible()) {
           red_ferroviaria.setVisible(checked);
           }
           });
           
           red_ferroviaria.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox29.checked) {
           checkbox29.checked = visible;
           }
           });
           
           var checkbox30 = document.getElementById('check_layer_30');
           checkbox30.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== red_vial.getVisible()) {
           red_vial.setVisible(checked);
           }
           });
           
           red_vial.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox30.checked) {
           checkbox30.checked = visible;
           }
           });
           
           var checkbox31 = document.getElementById('check_layer_31');
           checkbox31.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== puente_red_vial_puntos.getVisible()) {
           puente_red_vial_puntos.setVisible(checked);
           }
           });
           
           puente_red_vial_puntos.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox31.checked) {
           checkbox31.checked = visible;
           }
           });
           
           var checkbox32 = document.getElementById('check_layer_32');
           checkbox32.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== infraestructura_aeroportuaria_punto.getVisible()) {
           infraestructura_aeroportuaria_punto.setVisible(checked);
           }
           });
           
           infraestructura_aeroportuaria_punto.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox32.checked) {
           checkbox32.checked = visible;
           }
           });
           
           var checkbox33 = document.getElementById('check_layer_33');
           checkbox33.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== infraestructura_hidro.getVisible()) {
           infraestructura_hidro.setVisible(checked);
           }
           });
           
           infraestructura_hidro.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox33.checked) {
           checkbox33.checked = visible;
           }
           });
           
           var checkbox34 = document.getElementById('check_layer_34');
           checkbox34.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== estructuras_portuarias.getVisible()) {
           estructuras_portuarias.setVisible(checked);
           }
           });
           
           estructuras_portuarias.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox34.checked) {
           checkbox34.checked = visible;
           }
           });
           
           var checkbox35 = document.getElementById('check_layer_35');
           checkbox35.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== localidades.getVisible()) {
           localidades.setVisible(checked);
           }
           });
           
           localidades.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox35.checked) {
           checkbox35.checked = visible;
           }
           });
           
           var checkbox36 = document.getElementById('check_layer_36');
           checkbox36.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== marcas_y_señales.getVisible()) {
           marcas_y_señales.setVisible(checked);
           }
           });
           
           marcas_y_señales.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox36.checked) {
           checkbox36.checked = visible;
           }
           });
           
           var checkbox37 = document.getElementById('check_layer_37');
           checkbox37.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== señalizaciones.getVisible()) {
           señalizaciones.setVisible(checked);
           }
           });
           
           señalizaciones.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox37.checked) {
           checkbox37.checked = visible;
           }
           });
           
           var checkbox38 = document.getElementById('check_layer_38');
           checkbox38.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== complejo_de_energia_ene.getVisible()) {
           complejo_de_energia_ene.setVisible(checked);
           }
           });
           
           complejo_de_energia_ene.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox38.checked) {
           checkbox38.checked = visible;
           }
           });
           
           var checkbox39 = document.getElementById('check_layer_39');
           checkbox39.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== curvas_de_nivel.getVisible()) {
           curvas_de_nivel.setVisible(checked);
           }
           });
           
           curvas_de_nivel.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox39.checked) {
           checkbox39.checked = visible;
           }
           });
           
           var checkbox40 = document.getElementById('check_layer_40');
           checkbox40.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== ejido.getVisible()) {
           ejido.setVisible(checked);
           }
           });
           
           ejido.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox40.checked) {
           checkbox40.checked = visible;
           }
           });
           
           var checkbox41 = document.getElementById('check_layer_41');
           checkbox41.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== isla.getVisible()) {
           isla.setVisible(checked);
           }
           });
           
           isla.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox41.checked) {
           checkbox41.checked = visible;
           }
           });
           
           var checkbox42 = document.getElementById('check_layer_42');
           checkbox42.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== líneas_de_conducción_ene.getVisible()) {
           líneas_de_conducción_ene.setVisible(checked);
           }
           });
           
           líneas_de_conducción_ene.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox42.checked) {
           checkbox42.checked = visible;
           }
           });
           
           var checkbox43 = document.getElementById('check_layer_43');
           checkbox43.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== muro_embalse.getVisible()) {
           muro_embalse.setVisible(checked);
           }
           });
           
           muro_embalse.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox43.checked) {
           checkbox43.checked = visible;
           }
           });
           
           var checkbox44 = document.getElementById('check_layer_44');
           checkbox44.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== puntos_de_alturas_topograficas.getVisible()) {
           puntos_de_alturas_topograficas.setVisible(checked);
           }
           });
           
           puntos_de_alturas_topograficas.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox44.checked) {
           checkbox44.checked = visible;
           }
           });
           
           var checkbox45 = document.getElementById('check_layer_45');
           checkbox45.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== puntos_del_terreno.getVisible()) {
           puntos_del_terreno.setVisible(checked);
           }
           });
           
           puntos_del_terreno.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox45.checked) {
           checkbox45.checked = visible;
           }
           });
           
           var checkbox46 = document.getElementById('check_layer_46');
           checkbox46.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== salvado_de_obstaculo.getVisible()) {
           salvado_de_obstaculo.setVisible(checked);
           }
           });
           
           salvado_de_obstaculo.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox46.checked) {
           checkbox46.checked = visible;
           }
           });
           
           var checkbox47 = document.getElementById('check_layer_47');
           checkbox47.addEventListener('change', function () {
           var checked = this.checked;
           if (checked !== vias_secundarias.getVisible()) {
           vias_secundarias.setVisible(checked);
           }
           });
           
           vias_secundarias.on('change:visible', function () {
           var visible = this.getVisible();
           if (visible !== checkbox47.checked) {
           checkbox47.checked = visible;
           }
           });
            
vectorLayer.on('change:visible', function () {
    var visible = this.getVisible();
    if (visible !== checkbox4.checked) {
        checkbox4.checked = visible;
    }
});


function mostrarAgregar(){
document.getElementById('Agregar').style.display = 'block';
document.getElementById('panel').style.display = 'none'
document.getElementById('consulta').style.display = 'none'}


function mostrarPanel(){
document.getElementById('Agregar').style.display = 'none';
document.getElementById('panel').style.display = 'block'
document.getElementById('consulta').style.display = 'none'}

function mostrarConsulta(){
document.getElementById('Agregar').style.display = 'none';
document.getElementById('panel').style.display = 'none'
document.getElementById('consulta').style.display = 'block'}


var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
    });

    var source = new ol.source.Vector();
    var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
        color: '#ffcc33',
        width: 2
        }),
        image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
            color: '#ffcc33'
        })
        })
    })
    });

    

    var modify = new ol.interaction.Modify({source: source});
    map.addInteraction(modify);

    var draw, snap; // global so we can remove them later
    var typeSelect = document.getElementById('type');

    function addInteractions() {
    draw = new ol.interaction.Draw({
        source: source,
        type: typeSelect.value
    });
    map.addInteraction(draw);
    snap = new ol.interaction.Snap({source: source});
    map.addInteraction(snap);

    }

    /**
     * Handle change event.
     */
    typeSelect.onchange = function() {
    map.removeInteraction(draw);
    map.removeInteraction(snap);
    addInteractions();
    };

    addInteractions();

    
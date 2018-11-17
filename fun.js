        

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
                title: "Vegetacion Arborea",
                //capa desactivada por defecto
                visible: false,
                source: new ol.source.ImageWMS({
                    url: URL_OGC,
                    params: {LAYERS: 'veg_arborea'}
                })
            });
            var veg_arbustiva= new ol.layer.Image({
                title: "Vegetacion Arbustiva",
                visible: false,
                source: new ol.source.ImageWMS({
                    url: URL_OGC,
                    params: {LAYERS: 'veg_arbustiva'}
                })
            });
            var veg_cultivos = new ol.layer.Image({
                title: "Vegetacion Cultivos",
                visible: false,
                source: new ol.source.ImageWMS({
                    url: URL_OGC,
                    params: {LAYERS: 'veg_cultivos'}
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
                    veg_arborea,
                    //Agrego dos capas WMS mas
                    veg_arbustiva,
                    veg_cultivos,
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
	window.open('consulta.php?wkt='+wkt);return;

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
                if (checked !== vectorLayer.getVisible()) {
                    vectorLayer.setVisible(checked);
                }
            });

            vectorLayer.on('change:visible', function () {
                var visible = this.getVisible();
                if (visible !== checkbox4.checked) {
                    checkbox4.checked = visible;
                }
            });

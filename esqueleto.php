<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Kuyis</title>

		<style>
				#map {
						height: 600px;
						width: 78.5%;
						float: right;
				}
				#panel{
						height: 423px;
						width: 21.5%;
						float: left;
						background-color: #EEE;
				}
				#Agregar{
						height: 387px;
						width: 21.5%;
						float: left;
						background-color: #EEE;
				}
				#consulta{
						height: 387px;
						width: 21.5%;
						float: left;
						background-color: #EEE;
				}
				#imagen {
						width: 7%;
						float: right;
						padding-top:0.5rem
				}
				#legend{
						float:left;
						height:100%;
						width:50%;
				}
				button.legbutton{
						background-color: #6690B9;
						color: #EEE;
				}
		</style>    
	<link href="css/style.css" rel="stylesheet">
	<link rel="stylesheet" href="ol4/css/ol.css" type="text/css">
	<link rel="stylesheet" href="ol4/css/bootstrap.css" type="text/css">
    <link rel="icon" type="image/png" sizes="16x16" href="imagenes/favicon.ico">
	<script src="ol4/build/ol-debug.js" type="text/javascript"></script>
    <script src="url.js" type="text/javascript"></script>
    <!--agregamos la libreria JQuery -->
    <script src="jquery.min.js" type="text/javascript"></script>
	<link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
	<script src="ol4/ol/ol/control/overviewmap.js" type="text/javascript"></script>	
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
    <script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>
</head>
  <body>

  <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="page-header">
			<div class="jumbotron">
							<h1>Mapa Temático</h1>      
							<p>Información geográfica sobre Argentina</p>
			</div>
			</div>
			<div class="btn-group" role="group">
				 
				<button class="btn btn-secondary" type="button" onclick="mostrarPanel()">
					Visualizar capas
				</button> 
				<button class="btn btn-secondary" type="button" onclick="mostrarConsulta()">
					Consultas
				</button> 
				<button class="btn btn-secondary" type="button" onclick="mostrarAgregar()">
					Agregar informacion
				</button> 
				
			</div>
			
			<div id="imagen">
			<a id="export-png" class="btn btn-success"><i class="fa fa-download"></i> Descargar PNG</a>
			</div>
		</div>
		
	</div>
	
    
	<div id="panel">
			<button id="seleccionar-todo" type="checkbox" >Marcar/Desmarcar todas las capas</button>			
			<div class="col-md-12 offset-md-3">
					<div class="card">									

										<ul class="list-group list-group-flush">
												
												<li><input type="checkbox" name="list" id="nivel1"><label for="nivel1">Vegetacion</label>
												<ul class="interior" id="prueba">	
													<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_1">Arborea</label>
																		<input type="checkbox" id="check_layer_1">																			
																		<button class="legbutton" onclick="cambiarLeyenda('veg_arborea')">i</button>	
																</li>
																<li class="list-group-item">
																		<label for="check_layer_2">Arbustiva</label>
																		<input type="checkbox" id="check_layer_2">
																		<button class="legbutton" onclick="cambiarLeyenda('veg_arbustiva')">i</button>
																</li>
																<li class="list-group-item">
																		<label for="check_layer_3">Cultivos</label>
																		<input type="checkbox" id="check_layer_3">
																		<button class="legbutton" onclick="cambiarLeyenda('veg_cultivos')">i</button>
																</li>
																<li class="list-group-item">																		
																		<label for="check_layer_4">Hidrofila</label>
																		<input type="checkbox" id="check_layer_4">
																		<button class="legbutton" onclick="cambiarLeyenda('veg_hidrofila')">i</button>
																</li>	
																<li class="list-group-item">																		
																		<label for="check_layer_5">Suelo desnudo</label>
																		<input type="checkbox" id="check_layer_5">
																		<button class="legbutton" onclick="cambiarLeyenda('veg_suelo_desnudo')">i</button>
																</li>			
												</ul>		
												</li>		
												
												
												<li><input type="checkbox" name="list" id="nivel2"><label for="nivel2">Suelo</label>
													<ul class="interior" id="prueba2">	
														<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">																			
																		<label for="check_layer_6">Congelado</label>
																		<input type="checkbox" id="check_layer_6">
																		<button class="legbutton" onclick="cambiarLeyenda('sue_congelado')">i</button>
																	</li>
																	<li class="list-group-item">																		
																		<label for="check_layer_7">Consolidado</label>
																		<input type="checkbox" id="check_layer_7">
																		<button class="legbutton" onclick="cambiarLeyenda('sue_consolidado')">i</button>
																	</li>
																	<li class="list-group-item">																		
																		<label for="check_layer_8">Costero</label>
																		<input type="checkbox" id="check_layer_8">
																		<button class="legbutton" onclick="cambiarLeyenda('sue_costero')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_9">Hidromorfológico</label>
																		<input type="checkbox" id="check_layer_9">
																		<button class="legbutton" onclick="cambiarLeyenda('sue_hidromorfologico')">i</button>
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_10">No consolidado</label>
																		<input type="checkbox" id="check_layer_10">
																		<button class="legbutton" onclick="cambiarLeyenda('sue_no_consolidado')">i</button>
																	</li>				
													</ul>		
													</li>					


													<li><input type="checkbox" name="list" id="nivel3"><label for="nivel3">Edificios</label>
														<ul class="interior" id="prueba3">	
															<!-- checkboxes para activar/desactivar las capas -->
															<li class="list-group-item">																				
																		<label for="check_layer_11">Construcciones turísticas</label>
																		<input type="checkbox" id="check_layer_11">
																		<button class="legbutton" onclick="cambiarLeyenda('edif_construcciones_turisticas')">i</button>	
																	</li>
																	<li class="list-group-item">																				
																		<label for="check_layer_12">Deporte y esparcimiento</label>
																		<input type="checkbox" id="check_layer_12">
																		<button class="legbutton" onclick="cambiarLeyenda('edif_depor_y_esparcimiento')">i</button>	
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_13">Educativos</label>
																		<input type="checkbox" id="check_layer_13">
																		<button class="legbutton" onclick="cambiarLeyenda('edif_educacion')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_14">Religiosos</label>
																		<input type="checkbox" id="check_layer_14">
																		<button class="legbutton" onclick="cambiarLeyenda('edif_religiosos')">i</button>
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_15">Seguridad</label>
																		<input type="checkbox" id="check_layer_15">
																		<button class="legbutton" onclick="cambiarLeyenda('edificio_de_seguridad_ips')">i</button>
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_16">Públicos</label>
																		<input type="checkbox" id="check_layer_16">
																		<button class="legbutton" onclick="cambiarLeyenda('edificio_publico_ips')">i</button>
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_17">Ferroviarios</label>
																		<input type="checkbox" id="check_layer_17">
																		<button class="legbutton" onclick="cambiarLeyenda('edificios_ferroviarios')">i</button>
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_18">Salud</label>
																		<input type="checkbox" id="check_layer_18">
																		<button class="legbutton" onclick="cambiarLeyenda('edificio_de_salud_ips')">i</button>
																	</li>		
														</ul>		
													</li>


													<li><input type="checkbox" name="list" id="nivel4"><label for="nivel4">Agua</label>
														<ul class="interior" id="prueba4">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_19">Cursos de agua</label>
																		<input type="checkbox" id="check_layer_19">
																		<button class="legbutton" onclick="cambiarLeyenda('curso_de_agua_hid')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_20">Espejos de agua</label>
																		<input type="checkbox" id="check_layer_20">
																		<button class="legbutton" onclick="cambiarLeyenda('espejo_de_agua_hid')">i</button>
																	</li>
														</ul>		
													</li>	


														<li><input type="checkbox" name="list" id="nivel5"><label for="nivel5">Actividades</label>
															<ul class="interior" id="prueba5">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_21">Agropecuarias</label>
																		<input type="checkbox" id="check_layer_21">
																		<button class="legbutton" onclick="cambiarLeyenda('actividades_agropecuarias')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_22">Económicas</label>
																		<input type="checkbox" id="check_layer_22">
																		<button class="legbutton" onclick="cambiarLeyenda('actividades_economicas')">i</button>
																	</li>
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel6"><label for="nivel6">Obra</label>
															<ul class="interior" id="prueba6">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_23">Portuaria</label>
																		<input type="checkbox" id="check_layer_23">
																		<button class="legbutton" onclick="cambiarLeyenda('obra_portuaria')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_24">Comunicación</label>
																		<input type="checkbox" id="check_layer_24">
																		<button class="legbutton" onclick="cambiarLeyenda('obra_de_comunicación')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_25">Edificaciones</label>
																		<input type="checkbox" id="check_layer_25">
																		<button class="legbutton" onclick="cambiarLeyenda('otras_edificaciones')">i</button>
																	</li>
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel7"><label for="nivel7">Limite</label>
															<ul class="interior" id="prueba7">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_26">País</label>
																		<input type="checkbox" id="check_layer_26">
																		<button class="legbutton" onclick="cambiarLeyenda('pais_lim')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_27">Provincias</label>
																		<input type="checkbox" id="check_layer_27">
																		<button class="legbutton" onclick="cambiarLeyenda('provincias')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_28">Político-administrativo</label>
																		<input type="checkbox" id="check_layer_28">
																		<button class="legbutton" onclick="cambiarLeyenda('limite_politico_administrativo_lim')">i</button>
																	</li>
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel8"><label for="nivel8">Red</label>
															<ul class="interior" id="prueba8">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_29">Ferroviaria</label>
																		<input type="checkbox" id="check_layer_29">
																		<button class="legbutton" onclick="cambiarLeyenda('red_ferroviaria')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_30">Vial</label>
																		<input type="checkbox" id="check_layer_30">
																		<button class="legbutton" onclick="cambiarLeyenda('red_vial')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_31">Puente red vial</label>
																		<input type="checkbox" id="check_layer_31">
																		<button class="legbutton" onclick="cambiarLeyenda('puente_red_vial_puntos')">i</button>
																	</li>
															</ul>		
														</li>

														<li><input type="checkbox" name="list" id="nivel9"><label for="nivel9">Puntos</label>
															<ul class="interior" id="prueba9">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_32">Infraestructura aeroportuaria</label>
																		<input type="checkbox" id="check_layer_32">
																		<button class="legbutton" onclick="cambiarLeyenda('infraestructura_aeroportuaria_punto')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_33">Infraestructura hidrográfica</label>
																		<input type="checkbox" id="check_layer_33">
																		<button class="legbutton" onclick="cambiarLeyenda('infraestructura_hidro')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_34">Estructuras portuarias</label>
																		<input type="checkbox" id="check_layer_34">
																		<button class="legbutton" onclick="cambiarLeyenda('estructuras_portuarias')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_35">Localidades</label>
																		<input type="checkbox" id="check_layer_35">
																		<button class="legbutton" onclick="cambiarLeyenda('localidades')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_36">Marcas y señales</label>
																		<input type="checkbox" id="check_layer_36">
																		<button class="legbutton" onclick="cambiarLeyenda('marcas_y_señales')">i</button>
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_37">Señalizaciones</label>
																		<input type="checkbox" id="check_layer_37">
																		<button class="legbutton" onclick="cambiarLeyenda('señalizaciones')">i</button>
																	</li>			
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel10"><label for="nivel10">Otras</label>
															<ul class="interior" id="prueba10">	
																<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_38">Complejos de energía</label>
																		<input type="checkbox" id="check_layer_38">
																		<button class="legbutton" onclick="cambiarLeyenda('complejo_de_energia_ene')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_39">Curvas de nivel</label>
																		<input type="checkbox" id="check_layer_39">
																		<button class="legbutton" onclick="cambiarLeyenda('curvas_de_nivel')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_40">Ejido</label>
																		<input type="checkbox" id="check_layer_40">
																		<button class="legbutton" onclick="cambiarLeyenda('ejido')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_41">Isla</label>
																		<input type="checkbox" id="check_layer_41">
																		<button class="legbutton" onclick="cambiarLeyenda('isla')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_42">Líneas de conducción</label>
																		<input type="checkbox" id="check_layer_42">
																		<button class="legbutton" onclick="cambiarLeyenda('líneas_de_conducción_ene')">i</button>
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_43">Muro de embalse</label>
																		<input type="checkbox" id="check_layer_43">
																		<button class="legbutton" onclick="cambiarLeyenda('muro_embalse')">i</button>
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_44">Puntos de alturas topográficas</label>
																		<input type="checkbox" id="check_layer_44">
																		<button class="legbutton" onclick="cambiarLeyenda('puntos_de_alturas_topograficas')">i</button>
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_45">Puntos del terreno</label>
																		<input type="checkbox" id="check_layer_45">
																		<button class="legbutton" onclick="cambiarLeyenda('puntos_del_terreno')">i</button>
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_46">Salvado de obstáculo</label>
																		<input type="checkbox" id="check_layer_46">
																		<button class="legbutton" onclick="cambiarLeyenda('salvado_de_obstaculo')">i</button>
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_47">Vías secundarias</label>
																		<input type="checkbox" id="check_layer_47">
																		<button class="legbutton" onclick="cambiarLeyenda('vias_secundarias')">i</button>
																	</li>		
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_48">Puntos</label>
																		<input type="checkbox" id="check_layer_48">
																	</li>			
															</ul>		
														</li>
										</ul>
								</div> 
								</div>
								
			

	</div>
	
	<div id='Agregar' style='display:none'>		
		<form class="form-inline">
			<label>Geometría&nbsp;</label>
			<select id="type">
			  <option value="Point">Punto</option>
			  <option value="LineString">Linea</option>
			  <option value="Polygon">Poligono</option>
			  <option value="Circle">Circulo</option>
			  <option value="None" selected="selected">Ninguno</option>
			</select>
		  </form>




	</div>


	<div id='consulta' style='display:none;'>
		<input
		type="radio"
		name="controles"
		id="controles_consulta"
		value="consulta"
		onchange="seleccionarControl(this)"
		>
		<label for="controles_consulta"> Consulta</label><br/>
		
	</div>
	<div id="legend"><img id='leg' src=''/></div>
	<div id="map"></div>
	
  </div>
  <div id="coords" position="absolute"></div>
	<script src='fun.js' type="text/javascript"></script>
	<script src='reimg.js' type="text/javascript"></script>
    <script src="ol4/js/jquery.min.js"></script>
    <script src="ol4/js/bootstrap.min.js"></script>
    
  </body>
</html>
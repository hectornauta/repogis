<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Kuyis </title>

		<style>
				#map {
						height: 600px;
						width: 78.5%;
						float: right;
				}
				#panel{
						height: 387px;
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
		</div>
		
	</div>
	
    
	<div id="panel">			
			<div class="col-md-12 offset-md-3">
					<div class="card">
										
								
										<ul class="list-group list-group-flush">
												<li><input type="checkbox" name="list" id="nivel1"><label for="nivel1">Vegetacion</label>
												<ul class="interior" id="prueba">	
													<!-- checkboxes para activar/desactivar las capas -->
																<li class="list-group-item">
																		<label for="check_layer_1">Arborea</label>
																		<input type="checkbox" id="check_layer_1">																			
																			
																</li>
																<li class="list-group-item">
																		<label for="check_layer_2">Arbustiva</label>
																		<input type="checkbox" id="check_layer_2">
																</li>
																<li class="list-group-item">
																		<label for="check_layer_3">Cultivos</label>
																		<input type="checkbox" id="check_layer_3">
																</li>
																<li class="list-group-item">																		
																		<label for="check_layer_4">Hidrofila</label>
																		<input type="checkbox" id="check_layer_4">
																</li>	
																<li class="list-group-item">																		
																		<label for="check_layer_5">Suelo desnudo</label>
																		<input type="checkbox" id="check_layer_5">
																</li>			
												</ul>		
												</li>		
												
												
												<li><input type="checkbox" name="list" id="nivel2"><label for="nivel2">Suelo</label>
													<ul class="interior" id="prueba2">	
														<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">																			
																		<label for="check_layer_6">Congelado</label>
																		<input type="checkbox" id="check_layer_6">
																	</li>
																	<li class="list-group-item">																		
																		<label for="check_layer_7">Consolidado</label>
																		<input type="checkbox" id="check_layer_7">
																	</li>
																	<li class="list-group-item">																		
																		<label for="check_layer_8">Costero</label>
																		<input type="checkbox" id="check_layer_8">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_9">Hidromorfológico</label>
																		<input type="checkbox" id="check_layer_9">
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_10">No consolidado</label>
																		<input type="checkbox" id="check_layer_10">
																	</li>			
													</ul>		
													</li>					


													<li><input type="checkbox" name="list" id="nivel3"><label for="nivel3">Edificios</label>
														<ul class="interior" id="prueba3">	
															<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">																				
																		<label for="check_layer_11">Construcciones turísticas</label>
																		<input type="checkbox" id="check_layer_11">	
																	</li>
																	<li class="list-group-item">																				
																		<label for="check_layer_12">Deporte y esparcimiento</label>
																		<input type="checkbox" id="check_layer_12">		
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_13">Educativos</label>
																		<input type="checkbox" id="check_layer_13">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_14">Religiosos</label>
																		<input type="checkbox" id="check_layer_14">
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_15">Seguridad</label>
																		<input type="checkbox" id="check_layer_15">
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_16">Públicos</label>
																		<input type="checkbox" id="check_layer_16">
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_17">Ferroviarios</label>
																		<input type="checkbox" id="check_layer_17">
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_18">Salud</label>
																		<input type="checkbox" id="check_layer_18">
																	</li>		
														</ul>		
													</li>


													<li><input type="checkbox" name="list" id="nivel4"><label for="nivel4">Agua</label>
														<ul class="interior" id="prueba4">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_19">Cursos de agua</label>
																		<input type="checkbox" id="check_layer_19">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_20">Espejos de agua</label>
																		<input type="checkbox" id="check_layer_20">
																	</li>
														</ul>		
													</li>	


														<li><input type="checkbox" name="list" id="nivel5"><label for="nivel5">Actividades</label>
															<ul class="interior" id="prueba5">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_21">Agropecuarias</label>
																		<input type="checkbox" id="check_layer_21">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_22">Económicas</label>
																		<input type="checkbox" id="check_layer_22">
																	</li>
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel6"><label for="nivel6">Obra</label>
															<ul class="interior" id="prueba6">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_23">Portuaria</label>
																		<input type="checkbox" id="check_layer_23">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_24">Comunicación</label>
																		<input type="checkbox" id="check_layer_24">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_25">Edificaciones</label>
																		<input type="checkbox" id="check_layer_25">
																	</li>
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel7"><label for="nivel7">Limite</label>
															<ul class="interior" id="prueba7">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_26">País</label>
																		<input type="checkbox" id="check_layer_26">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_27">Provincias</label>
																		<input type="checkbox" id="check_layer_27">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_28">Político-administrativo</label>
																		<input type="checkbox" id="check_layer_28">
																	</li>
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel8"><label for="nivel8">Red</label>
															<ul class="interior" id="prueba8">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_29">Ferroviaria</label>
																		<input type="checkbox" id="check_layer_29">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_30">Vial</label>
																		<input type="checkbox" id="check_layer_30">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_31">Puente red vial</label>
																		<input type="checkbox" id="check_layer_31">
																	</li>
															</ul>		
														</li>

														<li><input type="checkbox" name="list" id="nivel9"><label for="nivel9">Puntos</label>
															<ul class="interior" id="prueba9">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_32">Infraestructura aeroportuaria</label>
																		<input type="checkbox" id="check_layer_32">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_33">Infraestructura hidrográfica</label>
																		<input type="checkbox" id="check_layer_33">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_34">Estructura portuaria</label>
																		<input type="checkbox" id="check_layer_34">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_35">Localidades</label>
																		<input type="checkbox" id="check_layer_35">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_36">Marcas y señales</label>
																		<input type="checkbox" id="check_layer_36">
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_37">Señalizaciones</label>
																		<input type="checkbox" id="check_layer_37">
																	</li>		
																				
															</ul>		
														</li>


														<li><input type="checkbox" name="list" id="nivel10"><label for="nivel10">Otras</label>
															<ul class="interior" id="prueba10">	
																<!-- checkboxes para activar/desactivar las capas -->
																	<li class="list-group-item">
																		<label for="check_layer_38">Complejos de energía</label>
																		<input type="checkbox" id="check_layer_38">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_39">Curvas de nivel</label>
																		<input type="checkbox" id="check_layer_39">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_40">Ejido</label>
																		<input type="checkbox" id="check_layer_40">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_41">Isla</label>
																		<input type="checkbox" id="check_layer_41">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_42">Límites de conducción</label>
																		<input type="checkbox" id="check_layer_42">
																	</li>	
																	<li class="list-group-item">
																		<label for="check_layer_43">Muro de embalse</label>
																		<input type="checkbox" id="check_layer_43">
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_44">Puntos de alturas topográficas</label>
																		<input type="checkbox" id="check_layer_44">
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_45">Puntos del terreno</label>
																		<input type="checkbox" id="check_layer_45">
																	</li>		
																	<li class="list-group-item">
																		<label for="check_layer_46">Salvado de obstáculo</label>
																		<input type="checkbox" id="check_layer_46">
																	</li>
																	<li class="list-group-item">
																		<label for="check_layer_47">Vías secundarias</label>
																		<input type="checkbox" id="check_layer_47">
																	</li>			
															</ul>		
														</li>
										</ul>
								</div> 
								</div>
								
			

	</div>
	
	<div id='Agregar' style='display:none'>
		<form class="form-inline">
			<label>Capa&nbsp;</label>
			<select id="type">
			  <option value="Point">Punto</option>
			  <option value="LineString">Linea</option>
			  <option value="Polygon">Poligono</option>
			  <option value="Circle">Circulo</option>
			</select>
		  </form>



		  
	</div>


	<div id='consulta' style='display:none;'>
		
	</div>

	<div id="map"></div>
  </div>
	<script src='fun.js' type="text/javascript"></script>
    <script src="ol4/js/jquery.min.js"></script>
    <script src="ol4/js/bootstrap.min.js"></script>
    
  </body>
</html>
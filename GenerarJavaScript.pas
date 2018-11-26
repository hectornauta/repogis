program coso;
uses crt,sysutils;
var
nombres: array[1..47] of string[255] =
(
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
'vias_secundarias');
titulos: array[1..47] of string[255] = 
(
'Arborea',
'Arbustiva',
'Cultivos',
'Hidrofila'
,'Suelo desnudo'

,'Congelado'
,'Consolidado'
,'Costero'
,'Hidromorfológico'
,'No consolidado'

,'Construcciones turísticas'
,'Deporte y esparcimiento'
,'Educativos'
,'Religiosos'
,'Seguridad'
,'Públicos'
,'Ferroviarios'
,'Salud'

,'Cursos de agua'
,'Espejos de agua'

,'Agropecuarias'
,'Económicas'

,'Portuaria'
,'Comunicación'
,'Edificaciones'

,'País'
,'Provincias'
,'Político-administrativo'

,'Ferroviaria'
,'Vial'
,'Puente red vial'

,'Infraestructura aeroportuaria'
,'Infraestructura hidrográfica'
,'Estructura portuaria'
,'Localidades'
,'Marcas y señales'
,'Señalizaciones'

,'Complejos de energía'
,'Curvas de nivel'
,'Ejido'
,'Isla'
,'Límites de conducción'
,'Muro de embalse'
,'Puntos de alturas topográficas'
,'Puntos del terreno'
,'Salvado de obstáculo'
,'Vías secundarias');
cadena:ansistring;
arch: text;
i:integer;
begin
assign(arch,'texto.txt');
rewrite(Arch);
for i:=1 to 47 do
begin
    cadena:='var ';
    cadena:=concat(cadena,nombres[i]);
    cadena:=concat(Cadena,' = new ol.layer.Image({title: "');
    cadena:=concat(cadena,titulos[i]);
    cadena:=concat(Cadena,'",visible:false,source: new ol.source.ImageWMS({url: URL_OGC,params: {LAYERS: ');
    cadena:=concat(Cadena,#39,nombres[i],#39);
    cadena:=concat(cadena,'}})});');;
    write(arch,cadena);
    writeln(arch);
end;
writeln(arch);
for i:=1 to 47 do
begin
    write(arch,nombres[i]);
    if i <>47 then write(arch,',');
end;
writeln(arch);
writeln(arch);

for i:=1 to 47 do
begin
    cadena:='';
    cadena:=concat(cadena,'var checkbox');
    cadena:=concat(cadena,inttostr(i));
    cadena:=concat(cadena,' = document.getElementById(');
    cadena:=concat(cadena,#39);
    cadena:=concat(cadena,'check_layer_');
    cadena:=concat(cadena,inttostr(i));
    cadena:=concat(cadena,#39);
    cadena:=concat(cadena,');checkbox');
    cadena:=concat(cadena,inttostr(i));
    cadena:=concat(cadena,'.addEventListener(');
    cadena:=concat(cadena,#39);
    cadena:=concat(cadena,'change');
    cadena:=concat(cadena,#39);
    cadena:=concat(cadena,', function () {var checked = this.checked;if (checked !== ');
    cadena:=concat(cadena,nombres[i]);
    cadena:=concat(cadena,'.getVisible()) {');
    cadena:=concat(cadena,nombres[i]);
    cadena:=concat(cadena,'.setVisible(checked);}});');
    write(arch,cadena);
    writeln(arch);
    cadena:='';
    cadena:=concat(cadena,nombres[i]);
    cadena:=concat(cadena,'.on(');
    cadena:=concat(cadena,#39);
    cadena:=concat(cadena,'change:visible');
    cadena:=concat(cadena,#39);
    cadena:=concat(cadena,', function () {var visible = this.getVisible();if (visible !== checkbox');
    cadena:=concat(cadena,inttostr(i));
    cadena:=concat(cadena,'.checked) {checkbox');
    cadena:=concat(cadena,inttostr(i));
    cadena:=concat(cadena,'.checked = visible;}});');
    write(arch,cadena);
    writeln(arch);
    end;
close(arch);
end.
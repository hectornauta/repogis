<?php

$json =  $_GET['wkt'];
$nombre =  $_GET['nombre'];


$link= pg_connect("host=localhost user=user password=user dbname=kuyis");

$query=<<<EOD
INSERT INTO puntos(nombre,geom,sp,datum)
	VALUES 
	(
		'$nombre',
		ST_GeomFromEWKT('SRID=4326;$json'),
		'Posgar94',
		'WGS84'
	);

EOD;
echo $query;
$result = pg_query($query);

?>
<!doctype html>
<html lang="en">
		<style>
			body, table{
				font-family: Arial, Helvetica, sans-serif;
				font-size: 11px;			
			}
		</style>
	</head>
<body>

<table border=1 cellpading=0 cellspacing=0>
</table>
</body>
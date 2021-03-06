# Aggregation
Práctica de Arquitecturas de Sistemas Web del Máster de Informática de la ULPGC 

Estudiaremos en esta práctica el concepto de “agregación”. 

<https://docs.mongodb.org/manual/core/aggregation-introduction/>

<https://docs.mongodb.org/manual/tutorial/aggregation-zip-code-data-set/>

<https://docs.mongodb.org/manual/tutorial/aggregation-with-user-preference-data/>

Arrancamos nuestro servidor MongoDB.

```
$ sudo mongod --dbpath ./data/db
```

Arrancamos otra terminal y accedemos al cliente de MongoDB.

```
$ mongo
```

Creamos nuestra base de datos mydb.

```
$ use mydb
```

Antes de empezar viendo ejemplos vamos a crear una colección llamada zips y a llenarla de documentos de la forma: 

```
{
  	"_id": "10280",
	"city": "NEW YORK",
  	"state": "NY",
  	"pop": 5574,
  	"loc": [
    		-74.016323,
    		40.710537
  	]
}
```

Para ello, importamos el fichero zips.json (que es un fichero con documentos del tipo anterior) en la colección “zips”.

```
$ mongoimport --host 127.0.0.1 -d mydb -c zips --type json --file zips.json
```

En nuestro editor favorito abriremos los ficheros desde aggregation_prac1.js hasta aggregation_prac5.js. Los ejecutaremos y veremos los resultados que nos dan.

```
$ mongo mydb aggregation_prac1.js
```

###Tareas prácticas

1. Calcular cuántos estados hay y cuántas ciudades.

2. Calcular cuál es el estado con mayor número de habitantes.

3. Calcular el promedio de ciudades de cada estado.

4. Generar una colección de ciudades ordenada por proximidad a la ciudad de Nueva York.

![Mapa EEUU](https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Map_of_USA_with_state_names_es.svg/800px-Map_of_USA_with_state_names_es.svg.png)

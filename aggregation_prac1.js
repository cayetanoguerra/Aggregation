//
// Práctica de ASW: Aggregation sobre MongoDB
//

// Generamos una colección con los nombres abreviados de los estados.

db.runCommand({
	aggregate: "zips",
	pipeline: [
		{ $group: {_id: "$state"} },
		{ $out: "salida" } 
		]
});
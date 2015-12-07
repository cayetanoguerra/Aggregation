//
// Práctica de ASW: Aggregation sobre MongoDB
//

// Generamos una colección con la población de cada estado ordenada

db.runCommand({
	aggregate: "zips",
	pipeline: [
		{ $group: {_id: "$state", "población":{ $sum:"$pop" } } },
		{ $match: { "población": { $gte: 5000000 } } },
		{ $sort: {_id: 1}},
		{ $out: "salida" } 
		]
});
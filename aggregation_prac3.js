//
// Práctica de ASW: Aggregation sobre MongoDB
//

// Generamos una colección ordenada con las poblaciones de los estados de más de
// 5000000 de habitantes
// 

db.runCommand({
	aggregate: "zips",
	pipeline: [
		{ $group: {_id: "$state", "población":{ $sum:"$pop" } } },
		{ $match: { "población": { $gte: 5000000 } } },
		{ $sort: {_id: 1}},
		{ $out: "salida" } 
		]
});
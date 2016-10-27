//
// Práctica de ASW: Aggregation sobre MongoDB
//

// Generamos una colección los estados con su población media

db.runCommand({
	aggregate: "zips",
	pipeline: [
		{ $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
		//{ $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } },
		{ $out: "salida" } 
		]
});

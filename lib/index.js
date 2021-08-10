
/**
 * Gets the reference of a nested property inside an object from a dot path route ("prop1.prop2") or array route ["prop1", "prop2"].
 * @param {*} obj 
 * @param {Array<string> | string} arrKeys Dot path route ("prop1.prop2") or array route ["prop1", "prop2"]
 * @returns {Array<*,string>} [ref, lastKey] para poder hacer `ref[lastKey] = "cosas"`.
 * 
 * @example
 * 
 * let bike = {
 * 	wheel1: {
 * 		type: "AD-56",
 * 		status: "ok"
 * 	},
 * 	wheel2: {
 * 		type: "AT-77",
 * 		status: "ok"
 * 	},
 * };
 * 
 * let [ref, lastKey] = getRef(bike, ["rueda2", "type"]);
 * console.log( ref[lastKey] ); // "AT-77"
 * 
*/
function getRef(obj, arrKeys) {
	
	if (typeof arrKeys === "string") return [obj, arrKeys];
	
	
	let ref = obj;
	let lastKey = null;
	
	
	// Si me pasan array
	const lastIdx = arrKeys.length - 1;
	
	arrKeys.forEach( (_key, _idx) => {
		if (_idx === lastIdx) return lastKey = _key;
		
		if (!ref[_key]) ref[_key] = {};
		ref = ref[_key];
	});
	
	
	return [ref, lastKey];
	
};

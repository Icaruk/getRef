
/**
 * Gets the reference of a nested property inside an object from a dot path route "prop1.prop2" or array route ["prop1", "prop2"].
 * @param {*} obj 
 * @param {Array<string> | string} arrKeys Dot path route `"prop1.prop2"` or array route `["prop1", "prop2"]`
 * @returns {Array<*,string>} [ref, lastKey]. `ref[lastKey] = "stuff"`. `delete ref[lastKey]`.
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
 * let [ref, lastKey] = getRef(bike, "wheel2.type");
 * console.log( ref[lastKey] ); // "AT-77"
 * 
 * let [ref2, lastKey2] = getRef(bike, "wheel2.type.dontExists");
 * console.log( ref2[lastKey2] ); // undefined
 * 
*/
module.exports = function getRef(obj, arrKeys) {
	
	if (typeof arrKeys === "string") arrKeys = arrKeys.split(".");
	
	
	let ref = obj;
	let lastKey = null;
	const lastIdx = arrKeys.length - 1;
	
	
	arrKeys.forEach( (_key, _idx) => {
		if (_idx === lastIdx) return lastKey = _key;
		
		if (!ref[_key]) ref[_key] = {};
		ref = ref[_key];
	});
	
	
	return [ref, lastKey];
	
};



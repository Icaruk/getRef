
/**
* @typedef {Array<string> | string} Path Dot path `"prop1.prop2"` or array path `["prop1", "prop2"]`
*/

/**
 * Gets the reference of a nested property inside an object from a dot path route "prop1.prop2" or array route ["prop1", "prop2"].
 * @param {*} obj 
 * @param {Path} path
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
function getRef(obj, path) {
	
	if (typeof path === "string") path = path.split(".");
	
	
	let ref = obj;
	let lastKey = null;
	const lastIdx = path.length - 1;
	
	
	path.forEach( (_key, _idx) => {
		if (_idx === lastIdx) return lastKey = _key;
		
		if (!ref[_key]) ref[_key] = {};
		ref = ref[_key];
	});
	
	
	return [ref, lastKey];
	
};



module.exports = function objeto (objTarget) {
	
	return {
	
		get: (path) => {
			const [ref, lastKey] = getRef(objTarget, path);
			return ref[lastKey];
		},
		
		set: (path, value) => {
			const [ref, lastKey] = getRef(objTarget, path);
			ref[lastKey] = value;
		},
		
		delete: (path) => {
			const [ref, lastKey] = getRef(objTarget, path);
			const deleted = ref[lastKey];
			delete ref[lastKey];
			return deleted;
		},
		
		has: (path) => {
			const [ref, lastKey] = getRef(objTarget, path);
			
			if (!ref || typeof ref !== "object") return false;
			
			try {
				return lastKey in ref;
			} catch (err) {
				return false;
			};
		},
		
		isType: (path, type) => {
			const [ref, lastKey] = getRef(objTarget, path);
			
			if (type === "object") {
				return (
					typeof ref[lastKey] === "object" &&
					ref[lastKey] !== null
				);
			};
			
			return typeof ref[lastKey] === type;		
		},	
		
	};
	
};



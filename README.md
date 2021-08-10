
<div style="text-align:center">
	<h1> getref </h1>
</div>


[![install size](https://packagephobia.com/badge?p=getref@latest)](https://packagephobia.com/result?p=getref@latest)


🤏 Safely get the reference of a nested property from an object.

- 🚀 Lightweight.
- ⚪️ Zero dependencies.



<br>



# Table of contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Table of contents](#table-of-contents)
- [Import](#import)
- [Usage](#usage)
- [Why return [ref, lastKey]?](#why-return-ref-lastkey)
- [Example](#example)
- [Go to top](#a-nametable-of-contentsago-to-toptable-of-contents)

<!-- /code_chunk_output -->



<br>



# Import

```js
const getref = require("getref");
```



<br>



# Usage

```js
const [ref, lastKey] = getRef(object, path);
```

- **object** `object`: Target object. 
- **path** `string | Array<string>`: Dot path route `"prop1.prop2"` or array route `["prop1", "prop2"]`.


Returns `[ref, lastKey]`:

- **ref** `object`: Reference of the parent of the last key of the `path`.
- **lastKey** `string`: Last key of the path.


<br>


# Why return [ref, lastKey]?

You can access dynamically without any danger to a deep nested property.

```js
let bike = {
	wheel1: {
		type: "AD-56",
		status: "ok"
	},
	wheel2: {
		type: "AT-77",
		status: "ok"
	},
};
```

**Editing**:
```js
let [ref, lastKey] = getRef(bike, "wheel2.type");
ref[lastKey] = "newType";
```

**Creating new nested property**:
```js
let [ref, lastKey] = getRef(bike, "wheel2.dontExists.abc.qwe");
ref[lastKey] = "nowItExists";
```

**Deleting**:
```js
let [ref, lastKey] = getRef(bike, "wheel2.type");
delete ref[lastKey];
```

**Safe selecting**:
```js
let [ref, lastKey] = getRef(bike, "wheel2.type.dontExists.asd.qwe");
if (! ref[lastKey]) {
	console.log("That property doesn't exists");
};
```



<br>



# Example

```js
let bike = {
	wheel1: {
		type: "AD-56",
		status: "ok"
	},
	wheel2: {
		type: "AT-77",
		status: "ok"
	},
};

let [ref, lastKey] = getRef(bike, "wheel2.type"); // or getRef(bike, ["wheel2", "type"])
const wheel2_type = ref[lastKey]; // "AT-77"
```




---



# <a name='table-of-contents'></a>[Go to top](#table-of-contents) 



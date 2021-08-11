
<div style="text-align:center">
	<h1> objeto </h1>
</div>


[![install size](https://packagephobia.com/badge?p=objeto@latest)](https://packagephobia.com/result?p=objeto@latest)


🦺 Object helper to get, set, delete and check nested properties without risk.

- 🚀 Lightweight.
- ⚪️ Zero dependencies.



<br>



# Table of contents

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Table of contents](#table-of-contents)
- [Import](#import)
- [Usage](#usage)
  - [get](#get)
  - [set](#set)
  - [delete](#delete)
  - [has](#has)
  - [isType](#istype)
- [Example](#example)
- [Go to top](#a-nametable-of-contentsago-to-toptable-of-contents)

<!-- /code_chunk_output -->



<br>



# Import

```js
const objeto = require("objeto");
```



<br>



# Usage

## get

If the `targetObject` doesn't contain the `path` property, it will return `undefined`.

- **targetObject** `object`: Object to target.
- **path** `string | Array<string>`: Dot path `"prop1.prop2"` or array path `["prop1", "prop2"]`.

```js
objeto(targetObject).get(path);
```

## set

- **targetObject** `object`: See [get](#get).
- **path** See [get](#get). 
- **value** `any`: Value to set.

```js
objeto(targetObject).set(path, value);
```

## delete

- **deletedValue** `any`: Deleted value.
- **targetObject** `object`: See [get](#get).
- **path** See [get](#get). 

```js
const deletedValue = objeto(targetObject).delete(path);
```

## has

Check if the `targetObject` has the specified property.

- **targetObject** `object`: See [get](#get).
- **path** See [get](#get). 

```js
objeto(targetObject).has(path);
```

## isType

Check if a property value type is equal the specified type.

- **targetObject** `object`: See [get](#get).
- **path** See [get](#get). 
- **type** `string`: See [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).

```js
objeto(targetObject).isType(path, type);
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

objeto(bike).get("wheel2.type"); // "AT-77"
objeto(bike).set("wheel2.type", "newType");
objeto(bike).delete("wheel2.type"); // "AT-77"
objeto(bike).has("wheel2.type"); // true
objeto(bike).isType("wheel2.type", "string"); // true

objeto(bike).get("wheel2.type.doesntExists"); // undefined
objeto(bike).set("wheel2.type.doesntExists.newProp", "newType"); // new nested property is created
objeto(bike).has("wheel2.type.doesntExists"); // false
```



---



# <a name='table-of-contents'></a>[Go to top](#table-of-contents) 



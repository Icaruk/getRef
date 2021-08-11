
const objeto = require("./index");


const obj = {
	name: {
		short: "Pepe",
		full: "Pepe Gómez Pérez",
		alias: "pep"
	},
	age: 45,
	status: {
		id: "ok",
		name: "Alive",
		hp: 100,
	}
};



test("all", () => {
	
	expect(
		objeto(obj).get("name.alias")
	).toBe("pep");
	
	expect(
		objeto(obj).get("name.alias.dontExists")
	).toBe(undefined);
	
	
	objeto(obj).set("age", 55);
	
	expect(
		objeto(obj).get("age")
	).toBe(55);
	
	objeto(obj).set("status.id", "alive");
	
	expect(
		objeto(obj).get("status.id")
	).toBe("alive");
	
	
	expect(
		objeto(obj).has("name.short")
	).toBe(true);
	
	expect(
		objeto(obj).has("name.short.dontExists")
	).toBe(false);
	
	expect(
		objeto(obj).isType("name.short", "string")
	).toBe(true);
	
	expect(
		objeto(obj).isType("name.short.dontExists", "undefined")
	).toBe(true);
	
});

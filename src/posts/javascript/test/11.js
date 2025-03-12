const deepClone = (obj, hash = new WeakMap()) => {
	if (obj === null || typeof obj !== "object") return obj;

	if (obj instanceof Date) return new Date(obj);
	if (obj instanceof RegExp) return new RegExp(obj);
	if (obj instanceof Map)
		return new Map(
			[...obj].map(([k, v]) => [deepClone(k, hash), deepClone(v, hash)])
		);

	if (hash.has(obj)) return hash.get(obj);

    const instance = Object.create(Object.getPrototypeOf(obj));

    hash.set(obj, instance);


    const descriptor = Object.getOwnPropertyDescriptors(obj);
   
    for(let key of Reflect.ownKeys(descriptor)){
        const descriptor = descriptors[key];
        if(descriptor.value){
            descriptor.value = deepClone(descriptor.value, hash)
        }
        Object.defineProperty(instance, key, descriptor)
    }
    return instance


};

let obj = {
	num: 0,
	str: "",
	boolean: true,
	unf: undefined,
	nul: null,
	obj: { name: "我是一个对象", id: 1 },
	arr: [0, 1, 2],
	func: function () {
		console.log("我是一个函数");
	},
	date: new Date(0),
	reg: new RegExp("/我是一个正则/ig"),
	[Symbol("1")]: 1,
};
Object.defineProperty(obj, "innumerable", {
	enumerable: false,
	value: "不可枚举属性",
});
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj));
obj.loop = obj; // 设置loop成循环引用的属性
let cloneObj = deepClone(obj);
cloneObj.arr.push(4);
console.log("obj", obj);
console.log("cloneObj", cloneObj);

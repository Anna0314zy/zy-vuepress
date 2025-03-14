let value = 1;
console.log(globalThis);
Object.defineProperty(globalThis, 'a', {
    get() {
        return value++;
    }
});

if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}
// -----
Promise
    .resolve('a')
    .then((x) => {console.log(x); return 'b'})
    .then((x) => {console.log(x); return 'c'})
    .then((x) => console.log(x));
// ------

Promise
    .resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3));

Promise
    .resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6));

// -------

Promise
    .resolve()
    .then(() => console.log(1))
    .then(() => {
        setTimeout(() => {
            console.log(2)
        }, 0)
    })
    .then(() => console.log(3));


    // -------
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);

Promise.resolve().then(() => {
    console.log(4);
})

console.log(5);

while('') {
    console.log(6);
}

console.log(7);

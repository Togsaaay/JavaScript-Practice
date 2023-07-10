let x = 0;

function multiple() {
    while (x !== 100) {
        if (x % 10 !== 0) {
            console.log(x);
        }
        x++;
    }
}

multiple();
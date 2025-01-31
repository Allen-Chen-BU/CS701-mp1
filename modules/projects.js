const numA = document.querySelector("#numA");
const numB = document.querySelector("#numB");
const resultSpan = document.querySelector("#resultSpan");

function hasInput() {
    return numA.value && numB.value;
}

function setColor(result) {
    if (result < 0) {
        resultSpan.style.color = 'red';
    } else {
        resultSpan.style.color = 'black';
    }
}

function setResult(result) {
    resultSpan.innerHTML = parseFloat(result.toFixed(4));
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#addBtn").addEventListener("click", () => {
        if(!hasInput()) {
            return;
        }
        const result = Number(numA.value) + Number(numB.value);
        setResult(result);
        setColor(result);
    });

    document.querySelector("#minusBtn").addEventListener("click", () => {
        if(!hasInput()) {
            return;
        }
        const result = Number(numA.value) - Number(numB.value);
        setResult(result);
        setColor(result);
    });

    document.querySelector("#mutiplyBtn").addEventListener("click", () => {
        if(!hasInput()) {
            return;
        }
        const result = Number(numA.value) * Number(numB.value);
        setResult(result);
        setColor(result);
    });

    document.querySelector("#divisionBtn").addEventListener("click", () => {
        if(!hasInput()) {
            return;
        }
        const result = Number(numA.value) / Number(numB.value);
        setResult(result);
        setColor(result);
    });

    document.querySelector("#powerBtn").addEventListener("click", () => {
        if(!hasInput()) {
            return;
        }
        const a = Number(numA.value);
        const b = Number(numB.value);
        let result = 1;
        for (let _ = 0; _ < Math.abs(b); _++) {
            result *= a;
        }

        if (b < 0) {
            result = 1 / result;
        }
        
        setResult(result);
        setColor(result);
    });

    document.querySelector("#clearBtn").addEventListener("click", () => {
        numA.value = null;
        numB.value = null;
        resultSpan.innerHTML = "";
    });
})
function add (n) {
    let elemento = document.createElement("input");
    elemento.type = "number";
    elemento.name = "num" + 1;
    elemento.classList.add("campoinput");
    let br = document.createElement("br");
    document.getElementById("campiinput" + n).appendChild(elemento);
    document.getElementById("campiinput" + n).appendChild(br);
}

function remove (n) {
    let div = document.getElementById("campiinput" + n);
    if (div.children.length > 1) {
        for (let i = 0; i<2; i++) {
            div.removeChild(
                div.lastChild
            );
        }
    }
}

function compute () {
    let output = [];
    
    let elementi1 = document.querySelectorAll("input[name='num1']");
    let elementi2 = document.querySelectorAll("input[name='num2']");

    Array.from(elementi1).concat(Array.from(elementi2)).forEach(elemento => {
        let n = parseInt(elemento.value);
        output.push(n);
    });

    document.getElementById("output").innerText = output;
}
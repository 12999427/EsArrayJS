function add () {
    let elemento = document.createElement("input");
    elemento.type = "number";
    elemento.name = "num";
    elemento.classList.add("campoinput");
    let br = document.createElement("br");
    document.getElementById("campiinput").appendChild(elemento);
    document.getElementById("campiinput").appendChild(br);
}

function remove () {
    let div = document.getElementById("campiinput");
    if (div.children.length > 1) {
        for (let i = 0; i<2; i++) {
            div.removeChild(
                div.lastChild
            );
        }
    }
}

function compute () {
    let output = 0;
    let elementi = document.querySelectorAll("input[name='num']");
    elementi.forEach(elemento => {
        output += parseInt(elemento.value);
    document.getElementById("output").innerText = output;
    });
}
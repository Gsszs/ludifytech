let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function OpenCloseMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")
        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorTexto = document.getElementById("campo-texto").value

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorTexto
    }

    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)
        document.querySelector("#contato form").reset()

        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}

let cases = document.querySelectorAll("#cases .cases_card .card");
let textos = document.querySelectorAll("#cases .cases_card .card p");


const adicionarClique = () => {
    if (window.innerWidth <= 1150) {
        cases.addEventListener("click", abrirCase);
        textos.addEventListener("click", abrirCase);
    }
    else {
        cases.removeEventListener("click", abrirCase);
        textos.removeEventListener("click", abrirCase);

    }
}

const abrirCase = () => {
    if (textos.classList.contains("invisible-text")) {
        textos.classList.add("invisible-text");
    }
    else{
        textos.classList.remove("invisible-text");
    }
}

adicionarClique()
window.addEventListener('resize', checkWidthAndBindClick);
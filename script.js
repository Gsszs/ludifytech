let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let cases = document.querySelectorAll("#cases .cases_cards .case");

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

window.onload = () => {
    setClick()
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"

    setClick()
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

const abrirCase = (event) => {
    let paragraphs = event.currentTarget.querySelectorAll("p")
    paragraphs.forEach(paragraph => {
        if (paragraph.classList.contains("invisible-text")) {
            paragraph.classList.remove("invisible-text")
        } else {
            paragraph.classList.add("invisible-text")
        }
    })
}

const setClick = () => {
    if (window.innerWidth <= 1150) {
        cases.forEach((element) => {
            element.addEventListener("click", abrirCase)
            let paragraphs = element.querySelectorAll("p")
            paragraphs.forEach(paragraph => {
                if (!paragraph.classList.contains("invisible-text")) {
                    paragraph.classList.add("invisible-text")
                }
            })
        })
    } else {
        cases.forEach((element) => {
            element.removeEventListener("click", abrirCase)
            let paragraphs = element.querySelectorAll("p")
            paragraphs.forEach(paragraph => {
                if (paragraph.classList.contains("invisible-text")) {
                    paragraph.classList.remove("invisible-text")
                }
            })
        })
    }
}
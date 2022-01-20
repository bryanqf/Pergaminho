import BotaoConclui from "./Componentes/botaoConclui.js"
import BotaoDeleta from "./Componentes/botaoDeleta.js"

const criarTarefa = (evento)=>{
    evento.preventDefault()

    const input = document.querySelector("[data-form-input]")
    const valor = input.value 
    console.log(valor)
    
    const lista = document.querySelector('[data-lista]')
    const tarefa = document.createElement('li')
    const conteudo = `<p>${valor}<hr></p>`
    
    tarefa.classList.add('task')
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}

const pull = document.querySelector("[data-form-botao]")

pull.addEventListener('click', criarTarefa)
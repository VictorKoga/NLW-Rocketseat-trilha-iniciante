## Linguagem de programação
Maneira de dar instrução ao computador.
Como um lego, você ira utilizar as peças para criar algoritmos, ou seja, para resolver os problemas.

## Peças de um linguagem
- [x] Comentarios //
- [x]Delcaração de variaveis(conts,let)
- [x]Operadores(atributição, concatenação, matematica, logicos)
- [x]Tipo de dados( string, numeric, boolean)
- [x]Estrutura de dados (functions, object, array)
- [x]Estrutura de repetição(for, while)
- [x]Controle de fluxo (if/else)

## Fases da resolução de um problema
- Coletar os dados
- Processar os dados(manipular, alterar ....)
- Apresentar os dados

## Escopo e Variavel

- [x]Variaveis, globais e locais
      let mensagem = "olá mundo"
      mensagem = 2
      (QUANDO UTILZIADO A VARIVAEL LET EU POSSO MUDAR A MSG)

      const mensagem = "olá mundo"
      mensagem = 2
      (QUANDO UTILZIADO A VARIVAEL CONST EU NAO POSSO MUDAR A MSG DA ERRO)
-[x] Constantes


## Tipo de dados
-[x]String (textos): "" '' ``
-[x]Integer (numeros): 2 1.4
-[x]Boolean (true / false ): verdadeiro ou falso

## Operadores
-[x] Opererador de atribuição de valor =
-[x] Operador de contatenação +
-[x] Operadores de comparação == != < > <= >=
-[x] Spread operator ...

## Estrutura de dados

## Arrays
- [x]Uma lista que cotem qualquer tipo de dado
- [x]Metodo de array é toda a funca que esta dentro do objeto (push, map, [find, forEach, filter] = HOF (Higher Order Functions))

## Objetos
- [x]Atributos e metodos
- [x]Criação e manipulação de objetos
- [x]Acesso a propriedades de objetos

## Function 
-[x]criar, passar argumento
-[x]executar 
-[x]arrow function / named function 
// arrays, objetos
let meta = {
  value: 'ler um livro por mês',
  checked: false,
}
let metas = [
  meta,
  {
    value: "caminhar 20 minutos todos os dias",
    checked: false
  }
]
console.log(metas[1].value)

// fuction // arrow function tem um sinal diferente na escrita
// const criarMeta = () => {}
// function criarMeta() {}

## Estrutura de repetição 
- [x] while 
const start = () => {
  let count = 0
  while(count <= 10){
    console.log(count)
    count = count + 1
  }
}
start()

## Condicionais 
- [x] switch
const start = () => {
  while(true){
    let opcao = "sair"
    switch(opcao){
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")    
        break
      case  "sair":
        return
    }
  }
}
start()
- [x] if/else

## Modulos em Node.js:
- [x]Importação de modulos {requires, CommonJS}
- [x]Bibilioteca 'inquirer' para criar prompts interativos
- [x]fs(file system) modulo nativo do node

#JASON
-[x]JavaScript Object notation (.json)
-[x]JSON.parse() Transforma de JASON para js
-[x]JSON.stringtofy() transforma de JS para JSON
## Programação assincrona e promisses
- [x]use de função assincrona (async/await)

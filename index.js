/* essa const esta dizendo que precisa de um modulo que vem de fora na require esta dizendo pra trazer um objeto, dentro do objeto so quer o select */ 
const { select } = require("@inquirer/prompts")

const start = async() => {
  while(true){
    const opcao = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar"
        },
        {
          name: "Listar metas",
          value: "listar"
        },
        {
          name:"Sair",
          value: "sair"
        }

      ]
    })      
    switch(opcao){
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")    
        break
      case  "sair":
        console.log("Até a proxima!")
        return
    }
  }
}
start()
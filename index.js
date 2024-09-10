/* essa const esta dizendo que precisa de um modulo que vem de fora na require esta dizendo pra trazer um objeto, dentro do objeto so quer o select */ 
const { select, input } = require("@inquirer/prompts")

let meta = {
  value: 'Tomar 3L de água todo dia',
  checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
  const meta = await input({message: "Digite a meta:"})

  if(meta.length == 0){
    console.log('A meta não pode ser vazia')
    return
  }

  metas.push({ value: meta, checked: false})
}

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
        await cadastrarMeta ()
        console.log(metas)
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
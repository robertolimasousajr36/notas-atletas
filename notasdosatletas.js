let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   let nomeDosAtletas = 0
   let mediaValida = 0
   let notasObtidas = 0 
   for(let i = 0; i <atletas.length; i++){
    nomeDosAtletas = atletas.map(function(nomes){
        return nomes.nome
    })
   
   notasObtidas = atletas.map(function(notas){
   let total = notas.notas
   total.sort(function(a, b){
       return a - b
   })
   return total
   })
}

for (let i = 0; i <atletas.length; i++){
    switch(i){
        case i:
            console.log(`Atletas: ${nomeDosAtletas[i]}`)
            console.log(`Notas Obtidas : ${notasObtidas[i]}`)
            let notasDosAtletas = notasObtidas[i].slice(1,4)
            let soma = notasDosAtletas.reduce(function(total, atual){
              return (total + atual)
            })
            let media = soma / notasDosAtletas.length
            console.log(`Média Valida ${media}`)
            console.log()
            break
            default:
            console.log("Atleta não cadastrado.");

    }
  
    }
  
  








   
     Olá , Me chamo Roberto estarei explicando como fiz esse codigo em javaScript na primeira linha temos uma Matriz de Objetos chamada atletas dentro dessa matriz temos objetos , e propriedades, o objetivo é dá a media de notas e imprimir no console os dados dos atletas.
 
 // Matriz de Objetos
 
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
   
   // criei três Variaveis add o number "0"
   
   let nomeDosAtletas = 0
   let mediaValida = 0
   let notasObtidas = 0 
   
   // Ultilizei  estrutura de repetição for()  chamei a variavel nomeDosAtletas e atribui o map() com callback dando o parâmetro nomes retornado nomes.nome ou atletas.nome alterando o parâmetro para atletas para ter acesso aos dados da matriz
   
 // exemplo: [0]
 
 for(let i = 0; i <atletas.length; i++){
    nomeDosAtletas = atletas.map(function(atletas){
        return atletas.nome
    })
    
   // exemplo [1]
   
   
   for(let i = 0; i <atletas.length; i++){
    nomeDosAtletas = atletas.map(function(nomes){  // O parâmetro também poder ser atletas return atletas.nome assim acessando o item dentro do objeto
        return nomes.nome
    })

//Variáveis 
const cookie = document.querySelector('#fortune-cookie')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const button = document.querySelector('button')
let phrases = document.querySelector('fieldset')

//numero aleatório para buscar posição no array.
let randomNumber = Math.round(Math.random() * 10)

const randomPhrases = ['As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.', 'E acredite que o melhor possa ser feito!', 
' Não espere, ponha em prática!', 'Mesmo que pareça difícil, não pare!', 'Só trabalhando é possível trilhar o caminho!',
'Tenha coragem!', 'Descubra quem você realmente é…', 'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.', 'Seus sonhos não precisam de plateia, eles só precisam de você.', 'Sempre siga em frente!.'] 


cookie.addEventListener('click', openPhrases)
function openPhrases(event){
   screen1.classList.add('hide')
   screen2.classList.remove('hide') 

}
console.log(randomNumber)

for(let x of randomPhrases){
   if(randomNumber <= randomPhrases.length){
      let randomPhrase = randomPhrases[randomNumber]
      phrases.innerText = randomPhrase

   }
}

button.addEventListener('click', playAgain)
function playAgain(event){
   screen2.classList.add('hide')
   screen1.classList.remove('hide')
 
   location.reload() //modo de dar refresh na página.
}


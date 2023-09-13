const luckyCookie = document.querySelector('#main-screen img');
const buttonSubmitNewLuckyCookie = document.querySelector('#final-screen button');

let activeScreen;
let phraseList = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte, há que ser flexível.',
    'Há três coisas que jamais voltam: a flecha lançada, a palavra dita e a oportunidade perdida.',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
    'A juventude não é uma época da vida, é um estado de espírito',
    'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade',
    'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram o seu trabalho',
    'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência'
];

function handleLuckyCookieClick(event){
    activeScreen = document.querySelectorAll('main > div');
    activeScreen.forEach((element) => {
        element.classList.toggle('hidden');
    })
    renderPhraseFrame();
    return;
}

function handleNewLuckyCookieClick(event){
    activeScreen = document.querySelectorAll('main > div');
    activeScreen.forEach((element) => {
        element.classList.toggle('hidden');
    })
    return;
}

function renderPhraseFrame(){
    let phrase = randomizePhrase(phraseList);
    let content = document.querySelector('#final-screen p');
    return content.innerText = phrase;
}

function randomizePhrase(phraseList){
    let randomNumber = (Math.random() * 10)
    return phraseList[Math.round(randomNumber)];
}

luckyCookie.addEventListener('click', handleLuckyCookieClick);
buttonSubmitNewLuckyCookie.addEventListener('click', handleNewLuckyCookieClick);

// randomizePhrase(phraseList);
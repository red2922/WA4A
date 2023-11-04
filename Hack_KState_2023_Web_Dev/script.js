function getPhrase(){
    document.getElementById('one').innerHTML = verbs[Math.floor(Math.random() * verbs.length)];

    document.getElementById('two').innerHTML = memes[Math.floor(Math.random() * memes.length)];

    document.getElementById('three').innerHTML = names[Math.floor(Math.random() * names.length)];
}


let verbs = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'White',
    'Black',
    'RGB',
    'END ME',
    'Absolutely',
    'HAHAHA'
]

let memes = [
    ' Pipe ',
    ' Sword ',
    ' Bonk Bonk ',
    ' Re Re ',
    ' Bonk ',
    ' isEmpty() '
]

let names = [
    'Jake',
    'John',
    'Arianna',
    'Luke',
    'Dylan',
    'Aoi',
    'Ethan',
    'Tanner',
    'Rose',
    'Josh'
]
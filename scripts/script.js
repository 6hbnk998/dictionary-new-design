const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const input = document.querySelector('.word-input');
const form = document.getElementById('input-form');
const containerWord = document.querySelector('.reluts-word')
const soundButtonGB = document.querySelector('.uk-lang')
const soundButtonUS = document.querySelector('.us-lang')
const resultDefinition = document.querySelector('.result-item-definition'

let state = {
    word:''
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    if(state.word.length ==0){
        return
    }

    const response = await fetch(`${url}${state.word}`)
    const data = await response.json()
    console.log(data)
    state.meanings = data[0].meanings
    // console.log(state.meanings[0].antonyms)
    const li = document.createElement('li')
    li.innerHTML = state.meanings[0].antonyms
    console.log(li)
    resultDefinition.insertAdjacentElement('beforeBegin',li)
}

const handleKeyup=(e) =>{
    const value = e.target.value
    state.word = value;
}
input.addEventListener('keyup', handleKeyup)
form.addEventListener('submit', handleSubmit)

<script setup>
import { ref } from 'vue'
const questions = await fetchData()
const counter = ref(0);
const disabled = ref(true)
const valueArray = Array.apply(null, Array(questions.length)).map(function () {})

async function fetchData(){
    const response = await fetch('../../src/components/data/data.json')
    const data = await response.json()
    return data
};

function nextQuestion(){
    reset()
    counter.value++
}

function previousQuestion(){
    reset()
    counter.value--
}

function reset(){
    let ele = document.getElementsByName("radio-btn");
    for(let i=0 ; i<ele.length ; i++){
        ele[i].checked = false;
        ele[i].removeAttribute('checked')
    }
}

function canNext(){
    return counter.value == questions.length-1
}

function canPrevious(){
    return counter.value == 0
}

function getValue(_position){
    valueArray[counter.value] = _position
    arrayNotFilled()
}

function arrayNotFilled(){
    console.log(valueArray)
    console.log(valueArray.some(element => element === undefined))
    return disabled.value = valueArray.some(element => element === undefined)
}

</script>

<template>
    <h1>Question {{ counter +1 }} sur {{ questions.length }}</h1>
    <p>{{ questions[counter].question }}</p>
    <fieldset>
        <div class="radio">
            <label for="worst">Pas du tout d'accord</label>
            <input @click="getValue(0)" type="radio" id="worst" name="radio-btn">
        </div>
        <div class="radio">
            <label for="bad">Pas d'accord</label>
            <input @click="getValue(1)" type="radio" id="bad" name="radio-btn">
        </div>
        <div class="radio">
            <label for="good">D'accord</label>
            <input @click="getValue(2)" type="radio" id="good" name="radio-btn">
        </div>
        <div class="radio">
            <label for="best">Tout à fait d'accord</label>
            <input @click="getValue(3)" type="radio" id="best" name="radio-btn">
        </div>
    </fieldset>
    <button :disabled="canPrevious()" type="button" @click="previousQuestion">prev</button>
    <button :disabled="disabled">Validate</button>
    <button :disabled="canNext()" type="button" @click="nextQuestion">next</button>
</template>

<style scoped>
    p{
        margin-bottom: 20px
    }

    fieldset{
        width: 40%;
    }

    .radio{
        display: flex;
        justify-content: space-between;
}
</style>
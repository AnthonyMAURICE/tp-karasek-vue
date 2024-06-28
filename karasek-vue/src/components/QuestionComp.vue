<script setup>
import { ref } from 'vue'
import { store, storedArray } from '../assets/store.js'

const counter = ref(0);
const disabledBtn = ref(true)

function nextQuestion(){
    counter.value++
    isChecked(counter.value)
}

function previousQuestion(){
    counter.value--
    isChecked(counter.value)
}

function canNext(){
    return counter.value == store.questions.length-1
}

function canPrevious(){
    return counter.value == 0
}

function getValue(_position){
    storedArray.valueArray[counter.value] = _position
    arrayNotFilled()
}

function arrayNotFilled(){
    return disabledBtn.value = storedArray.valueArray.some(element => element === undefined)
}

function isChecked(_identifier){
    const inputs = document.querySelectorAll('input')
    const form = document.getElementById('form')
    if(storedArray.valueArray[_identifier] === undefined){
        form.reset()
    }else{
        inputs[storedArray.valueArray[_identifier] -1].checked = true
    }
}

</script>

<template>
    <h1>Question {{ counter +1 }} sur {{ store.questions.length }}</h1>
    <p>{{ store.questions[counter].question }}</p>
    <fieldset>
        <div class="radio">
            <label for="worst">Pas du tout d'accord</label>
            <input @click="getValue(1)" type="radio" id="worst" name="radio-btn">
        </div>
        <div class="radio">
            <label for="bad">Pas d'accord</label>
            <input @click="getValue(2)" type="radio" id="bad" name="radio-btn">
        </div>
        <div class="radio">
            <label for="good">D'accord</label>
            <input @click="getValue(3)" type="radio" id="good" name="radio-btn">
        </div>
        <div class="radio">
            <label for="best">Tout à fait d'accord</label>
            <input @click="getValue(4)" type="radio" id="best" name="radio-btn">
        </div>
    </fieldset>
    <button :disabled="canPrevious()" type="button" @click="previousQuestion">prev</button>
    <button :disabled="disabledBtn">Validate</button>
    <button :disabled="canNext()" type="button" @click="nextQuestion">next</button>
</template>

<style scoped>
    p{
        margin-bottom: 20px
    }

    fieldset{
        width: 40%;
        border-radius: 10px;
    }

    .radio{
        display: flex;
        justify-content: space-between;
}
</style>
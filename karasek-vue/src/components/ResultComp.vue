<script setup>
import { storedArray } from '../assets/store.js'

    function calculateA(){
        return 4*(storedArray.valueArray[3] + (5-storedArray.valueArray[5]) + storedArray.valueArray[7])
    }

    function calculateC(){
        return 2*(storedArray.valueArray[0] + (5 - storedArray.valueArray[1])+ storedArray.valueArray[2] + storedArray.valueArray[4] + storedArray.valueArray[6] + storedArray.valueArray[8])
    }

    function calculateL(){
        return calculateA() + calculateC()
    }

    function calculateD(){
        return storedArray.valueArray[9] + storedArray.valueArray[10] + storedArray.valueArray[11] + (5-storedArray.valueArray[12]) + storedArray.valueArray[13] + storedArray.valueArray[14] +storedArray.valueArray[15] + storedArray.valueArray[16] + storedArray.valueArray[17]
    }

    function calculateS(){
        return storedArray.valueArray[18] + storedArray.valueArray[19] + storedArray.valueArray[20] + storedArray.valueArray[21]
    }

    function calculateSBis(){
        return storedArray.valueArray[22] + storedArray.valueArray[23] + storedArray.valueArray[24] + storedArray.valueArray[25]
    }

    function calculateR(){
        return (5-storedArray.valueArray[26]) + (5-storedArray.valueArray[27]) + storedArray.valueArray[28] + storedArray.valueArray[29] + storedArray.valueArray[30] + storedArray.valueArray[31]
    }
</script>

<template>
    <div>
        <p>Autonomie décisionnelle : {{ calculateA() }}</p>
        <p>Utilisation des compétences : {{ calculateC() }}</p>
        <p>Latitude décisionnelle (somme des deux précédents) : {{ calculateL() }}</p>
        <p>Demande psychologique : {{ calculateD() }}</p>
        <p>Soutien social de la hiérarchie : {{ calculateS() }}</p>
        <p>Soutien social de la part des collègues : {{ calculateSBis() }}</p>
        <p>Reconnaissance au travail : {{ calculateR() }}</p>
        <RouterLink class="link" to="/"><button type="button">Retour</button></RouterLink>
    </div>
    
</template>

<style scoped>
    div{
        width: 50%;
        margin: auto
    }
</style>
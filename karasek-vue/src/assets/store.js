import { reactive } from 'vue'

async function fetchData(){
    const response = await fetch('../../src/components/data/data.json')
    const data = await response.json()
    return data
};

export const store = reactive({
    questions: await fetchData()
}) 

export const storedArray = reactive({
    valueArray: Array.apply(null, Array(store.questions.length)).map(function () {})
})
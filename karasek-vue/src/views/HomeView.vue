<script setup>
  import Question from '../components/QuestionComp.vue';
</script>

<template>
  <main>
    <form action="">
      <Suspense>
        <Question />
      </Suspense>
    </form>
  </main>
</template>


<style scoped>
  form{
    width: 80%;
  }

</style>
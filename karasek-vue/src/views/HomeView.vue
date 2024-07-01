<script setup>
  import Question from '../components/QuestionComp.vue';
</script>

<template>
  <main>
    <form id="form" action="">
      <Suspense>
        <Question />
      </Suspense>
    </form>
  </main>
</template>


<style scoped>
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
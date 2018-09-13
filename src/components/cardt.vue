<template>
  <div class="bigbox">
    <p class="cardt">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
  .bigbox{
    width: 100%;
    height: 1rem;
  }
.cardt {
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: #e2706f;
}
</style>

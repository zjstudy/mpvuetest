<template>
  <div>
    <p class="card">
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
.card {
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: #cae2d0;
}
</style>

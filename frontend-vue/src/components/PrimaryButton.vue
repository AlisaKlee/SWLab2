<template>
    <button @click="handleClick">
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      }
    },
    emits: ['click'],
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style scoped>
  button {
    background-color: #4CAF50; /* Grün */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #45a049; /* dunkler beim Hover */
  }
  </style>
  
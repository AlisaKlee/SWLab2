<template>
    <button :class="variant" @click="handleClick" :disabled="loading">
      <span v-if="loading">Loading...</span>
      <span v-else>{{ label }}</span>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      loading: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: 'primary' // entweder 'primary' oder 'secondary'
      }
    },
    emits: ['click'],
    methods: {
      handleClick() {
        if (!this.loading) {
          this.$emit('click');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .primary {
    background-color: black;
    color: white;
    padding: 10px 30px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .primary:hover {
    background-color: #333;
  }
  
  .secondary {
    background-color: #e0e0e0;
    color: black;
    padding: 10px 30px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .secondary:hover {
    background-color: #d5d5d5;
  }
  
  button:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }
  </style>
  
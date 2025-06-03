<template>
  <span class="urgency-wrapper">
    <span class="urgency-badge" :class="urgencyColor(level)"></span>
    <span class="urgency-label">{{ $t(level) }}</span>
  </span>
</template>

<script setup>
// defineProps muss nicht importiert werden – ist Compiler-Macro
const props = defineProps({
  level: {
    type: String,
    required: true
  }
});

const urgencyColor = (level) => {
  switch (level) {
    case 'Immediate': return 'triage-red';
    case 'VeryUrgent': return 'triage-orange';
    case 'Urgent': return 'triage-yellow';
    case 'Normal': return 'triage-green';
    case 'NonUrgent': return 'triage-grey';
    case 'Treated': return 'triage-blue';
    case 'PassedAway': return 'triage-black';
    default: return '';
  }
};
</script>

<style scoped>
.urgency-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.urgency-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

/* Triage Colors */
.triage-red { background-color: #e53935; }
.triage-orange { background-color: #fb8c00; }
.triage-yellow { background-color: #fdd835; }
.triage-green { background-color: #43a047; }
.triage-grey { background-color: #bdbdbd; }
.triage-blue { background-color: steelblue; }
.triage-black { background-color: #212121; }

.urgency-label {
  font-size: 14px;
  line-height: 1;
}
</style>

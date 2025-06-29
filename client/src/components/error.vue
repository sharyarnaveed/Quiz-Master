<template>
  <div v-if="messagevalue" class="alert alert-error">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
      <path d="M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <p>{{ messagevalue }}</p>
  </div>
</template>

<script setup>
defineProps({ messagevalue: String });
</script>

<style scoped>
.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0;
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid transparent;
}

.alert-error {
  background-color: #fef2f2;
  color: #dc2626;
  border-color: #dc2626;
  border-left-color: #dc2626;
}

.alert svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #dc2626;
}

.alert p {
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  .alert-error {
    background-color: #1f1a1a;
    color: #f87171;
    border-color: #dc2626;
  }
  
  .alert svg {
    color: #f87171;
  }
}

/* Hover effect for better UX */
.alert:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

/* Responsive design */
@media (max-width: 768px) {
  .alert {
    padding: 12px 16px;
    font-size: 13px;
    margin: 8px 0;
  }
  
  .alert svg {
    width: 18px;
    height: 18px;
  }
}
</style>


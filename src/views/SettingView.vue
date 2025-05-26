<template>
  <div class="settings-view">
    <h2 class="main-title">{{ $t('settings') }}</h2>

    <section>
      <h3 class="section-title">{{ $t('changePassword') }}</h3>
      <input
        type="password"
        v-model="oldPassword"
        :placeholder="$t('oldPassword')"
        class="input-field"
      />
      <input
        type="password"
        v-model="newPassword"
        :placeholder="$t('newPassword')"
        class="input-field"
      />
      <div class="button-group">
        <button @click="changePassword" class="btn btn-primary">{{ $t('change') }}</button>
        <button @click="cancelPasswordChange" class="btn btn-secondary">{{ $t('cancel') }}</button>
      </div>
    </section>

    <section>
      <h3 class="section-title">{{ $t('deviceSettings') }}</h3>
      <button @click="goToDevice" class="btn btn-primary">{{ $t('openDevice') }}</button>
    </section>

    <section>
      <h3 class="section-title">{{ $t('changeLanguage') }}</h3>
      <select v-model="language" class="input-field" @change="setLanguage">
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const oldPassword = ref('');
const newPassword = ref('');
const currentTime = ref('');
const router = useRouter();

const { locale } = useI18n();
const language = ref(locale.value);

const changePassword = () => {
  alert('Password changed.');
};

const cancelPasswordChange = () => {
  oldPassword.value = '';
  newPassword.value = '';
};

const goToDevice = () => {
  router.push('/device');
};

const setLanguage = () => {
  locale.value = language.value;
  localStorage.setItem('lang', language.value);
};

onMounted(() => {
  const saved = localStorage.getItem('lang');
  if (saved) {
    language.value = saved;
    locale.value = saved;
  }

  const now = new Date();
  currentTime.value = now.toLocaleString();
});
</script>

<style scoped>
.settings-view {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  position: relative;
}

.main-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
}

.input-field {
  display: block;
  margin-bottom: 1rem;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #eae2f8;
  font-family: inherit;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  background-color: #000;
  color: #fff;
}

.btn-secondary {
  background-color: #e0e0e0;
  color: #000;
}
</style>

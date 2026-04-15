<template>
  <v-card class="login-card" elevation="4" rounded="lg">
    <v-card-title class="login-card__title">Sign In</v-card-title>

    <v-card-text>
      <v-form ref="formRef" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          prepend-inner-icon="mdi-email-outline"
          :rules="emailRules"
          variant="outlined"
          class="mb-2"
        />

        <v-text-field
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          :rules="passwordRules"
          variant="outlined"
          @click:append-inner="showPassword = !showPassword"
        />

        <v-alert
          v-if="errorMessage"
          type="error"
          variant="tonal"
          class="mt-2 mb-4"
          density="compact"
        >
          {{ errorMessage }}
        </v-alert>

        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          class="mt-4"
          :loading="isLoading"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  login: [email: string, password: string]
}>()

const formRef = ref<{ validate: () => Promise<{ valid: boolean }> } | null>(null)
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid',
]

const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length >= 8 || 'Password must be at least 8 characters',
]

async function handleSubmit() {
  if (!formRef.value) return

  const { valid } = await formRef.value.validate()
  if (!valid) return

  isLoading.value = true
  errorMessage.value = ''

  try {
    emit('login', email.value, password.value)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-card {
  width: 100%;
  max-width: 420px;
}

.login-card__title {
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.5rem 1.5rem 0.5rem;
}
</style>

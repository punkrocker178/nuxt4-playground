<script setup lang="ts">
import { useFormatEmail } from '~/composables/useFormatEmail';

const emailFormControl = ref('');
const { generateHtml } = useFormatEmail();

function submitEmail() {
  useMail().sendMail({
    to: emailFormControl.value,
    subject: 'Stock Market Update - ' + new Date().toLocaleString(),
    html: generateHtml(),
  });
}
</script>
<template>
  <div>
    <h1>Email Subscription</h1>
    <p>Subscribe to the stock market updates</p>
    <v-form @submit.prevent="submitEmail">
      <v-text-field
        v-model="emailFormControl"
        label="Email Address"
        type="email"
        required
      />
      <v-btn color="primary" class="mt-4" type="submit">Subscribe</v-btn>
    </v-form>
  </div>
</template>
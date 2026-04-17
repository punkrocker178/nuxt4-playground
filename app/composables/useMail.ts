interface SendMailOptions {
  to: string | string[]
  subject: string
  html?: string
  text?: string
}

interface SendMailResult {
  success: boolean
}

export function useMail() {
  const pending = ref(false);
  const error = ref<string | null>(null);

  async function sendMail(options: SendMailOptions): Promise<boolean> {
    pending.value = true;
    error.value = null;

    try {
      await $fetch<SendMailResult>('/api/mail/send', {
        method: 'POST',
        body: options,
      });
      return true;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to send email';
      return false;
    } finally {
      pending.value = false;
    }
  }

  return {
    sendMail,
    pending: readonly(pending),
    error: readonly(error),
  };
}

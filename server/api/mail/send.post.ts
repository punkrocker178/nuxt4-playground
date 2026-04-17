import { SendEmailCommand } from '@aws-sdk/client-ses';

interface SendMailBody {
  to: string | string[]
  subject: string
  html?: string
  text?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SendMailBody>(event);

  if (!body.to || !body.subject || (!body.html && !body.text)) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields: to, subject, and html or text',
    });
  }

  const config = useRuntimeConfig(event);
  const toAddresses = Array.isArray(body.to) ? body.to : [body.to];

  const command = new SendEmailCommand({
    Source: config.sesFromAddress,
    Destination: {
      ToAddresses: toAddresses,
    },
    Message: {
      Subject: {
        Data: body.subject,
        Charset: 'UTF-8',
      },
      Body: {
        ...(body.html && {
          Html: { Data: body.html, Charset: 'UTF-8' },
        }),
        ...(body.text && {
          Text: { Data: body.text, Charset: 'UTF-8' },
        }),
      },
    },
  });

  await event.context.ses.send(command);

  return { success: true };
});

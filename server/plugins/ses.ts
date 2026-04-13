import { SESClient } from '@aws-sdk/client-ses'

declare module 'h3' {
  interface H3EventContext {
    ses: SESClient
  }
}

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig()

  const ses = new SESClient({
    region: config.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey,
    },
  })

  nitroApp.hooks.hook('request', (event) => {
    event.context.ses = ses
  })
})

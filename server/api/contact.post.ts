import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, subject, message } = body

  // 1. Server-side validations
  if (!name || name.trim().length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: { message: 'Name must be at least 2 characters.' }
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: { message: 'Please provide a valid email address.' }
    })
  }

  if (!subject || subject.trim().length < 3) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: { message: 'Subject must be at least 3 characters.' }
    })
  }

  if (!message || message.trim().length < 10) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input',
      data: { message: 'Message must be at least 10 characters.' }
    })
  }

  // 2. Integration with Formspree, Web3Forms, or console logger
  const env = (globalThis as any).process?.env || {}
  const formspreeUrl = env.FORMSPREE_URL
  const web3formsAccessKey = env.WEB3FORMS_ACCESS_KEY

  if (formspreeUrl) {
    try {
      await $fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: {
          name,
          email,
          subject,
          message
        }
      })
      return { success: true, provider: 'formspree' }
    } catch (err: any) {
      throw createError({
        statusCode: 502,
        statusMessage: 'Bad Gateway',
        data: { message: 'Failed to dispatch email via Formspree.' }
      })
    }
  } else if (web3formsAccessKey) {
    try {
      await $fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: {
          access_key: web3formsAccessKey,
          name,
          email,
          subject,
          message,
          from_name: 'Web Portfolio Contact Form'
        }
      })
      return { success: true, provider: 'web3forms' }
    } catch (err: any) {
      throw createError({
        statusCode: 502,
        statusMessage: 'Bad Gateway',
        data: { message: 'Failed to dispatch email via Web3Forms.' }
      })
    }
  }

  // 3. Fallback: Local logging (for development testing when credentials are not configured)
  console.log('--- [Contact Form Submission] ---')
  console.log(`Timestamp: ${new Date().toISOString()}`)
  console.log(`Name:      ${name}`)
  console.log(`Email:     ${email}`)
  console.log(`Subject:   ${subject}`)
  console.log(`Message:   ${message}`)
  console.log('---------------------------------')

  return {
    success: true,
    provider: 'local-mock',
    message: 'Message successfully logged to server stdout (mock submission).'
  }
})

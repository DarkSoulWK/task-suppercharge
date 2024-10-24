/* eslint-disable prettier-vue/prettier */
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export function zodValidationContact () {
  const VALIDATION_TEXT = {
    NAME_REQUIRED: 'Name is required',
    EMAIL_REQUIRED: 'Email is required',
    SOCIA_REQUIRED: 'Social is required',
    MESSAGE_REQUIRED: 'Message is required'
  }

  const zodSchema = z.object({
    form: z.object({
      name: z.string().min(5, VALIDATION_TEXT.NAME_REQUIRED),
      email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
      social: z.string().min(4, VALIDATION_TEXT.SOCIA_REQUIRED),
      message: z.string().min(10, VALIDATION_TEXT.MESSAGE_REQUIRED)
    })
  })

  const validationSchema = toTypedSchema(zodSchema)

  return {
    validationSchema,
    zodSchema
  }
}

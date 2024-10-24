/* eslint-disable prettier-vue/prettier */
/* eslint-disable comma-dangle */
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

type Props = {
    edit: boolean
}

export function zodValidationUser (props: Props) {
  const VALIDATION_TEXT = {
    NAME_REQUIRED: 'Name is required',
    EMAIL_REQUIRED: 'Email is required',
    NEW_PASSWORD_LENGTH: 'Password must be at least 6 characters',
    NEW_PASSWORD_MATCH: 'Passwords do not match',
    ROLE_REQUIRED: 'Please select a role'
  }

  let zodSchema

  if (props.edit) {
    zodSchema = z
      .object({
        user: z.object({
          name: z.string().min(5, VALIDATION_TEXT.NAME_REQUIRED),
          email: z.string().min(10, VALIDATION_TEXT.EMAIL_REQUIRED),
          newPassword: z.string(),
          confirmPassword: z.string(),
          role: z
            .object({
              id: z.string().or(z.number()),
              name: z.string(),
              text: z.string(),
              media: z.string()
            })
            .or(z.null())
        }),
      })
      .superRefine((data, ctx) => {
        // This is a custom validation function that will be called
        // before the form is submitted
        if (!data.user.role) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.ROLE_REQUIRED,
            path: ['user.role']
          })
        }
      })
  } else {
    zodSchema = z
      .object({
        user: z.object({
          name: z.string().min(5, VALIDATION_TEXT.NAME_REQUIRED),
          email: z.string().min(10, VALIDATION_TEXT.EMAIL_REQUIRED),
          newPassword: z.string().min(6, VALIDATION_TEXT.NEW_PASSWORD_LENGTH),
          confirmPassword: z.string(),
          role: z
            .object({
              id: z.string().or(z.number()),
              name: z.string(),
              text: z.string(),
              media: z.string()
            })
            .or(z.null())
        }),
      })
      .superRefine((data, ctx) => {
        // This is a custom validation function that will be called
        // before the form is submitted
        if (data.user.newPassword) {
          if (data.user.newPassword.length < 6) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: VALIDATION_TEXT.NEW_PASSWORD_LENGTH,
              path: ['user.newPassword']
            })
          }
          if (data.user.newPassword !== data.user.confirmPassword) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: VALIDATION_TEXT.NEW_PASSWORD_MATCH,
              path: ['user.confirmPassword']
            })
          }
        }

        if (!data.user.role) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: VALIDATION_TEXT.ROLE_REQUIRED,
            path: ['user.role']
          })
        }
      })
  }

  const validationSchema = toTypedSchema(zodSchema)

  return {
    validationSchema,
    zodSchema
  }
}

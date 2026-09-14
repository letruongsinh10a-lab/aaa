import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(1, 'Vui lòng nhập mật khẩu'),
})

export const signupSchema = z.object({
  displayName: z.string().min(2, 'Tên hiển thị tối thiểu 2 ký tự').max(50, 'Tên hiển thị tối đa 50 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(8, 'Mật khẩu tối thiểu 8 ký tự'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>

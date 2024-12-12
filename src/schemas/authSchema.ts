import * as yup from 'yup';

export const authLoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
});

export const verificationSchema = yup.object().shape({
  code: yup
    .string()
    .min(6, 'Code must be at least 6 characters')
    .required('Code is required'),
});

export const updatePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password is required'),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password is required'),
})
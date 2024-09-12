export interface LoginInterfaceInputs {
  email: string;
  password: string;
}
export interface ForgotPasswordInterfaceInputs {
  email: string;
}
export interface VerificationInterfaceInputs{
  code: string;
}
export interface UpdatePasswordInterfaceInputs{
  password: string;
  confirmPassword: string;
}
export interface RegisterInterfaceInputs{
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}
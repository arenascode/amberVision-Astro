
export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message?: string;
  messageRequired?: string;
  messageInvalid?: string;
  messageLength?: string;
}

export type FormData = {
  [key: string]: string;
};

export type FormErrors = {
  [key: string]: string;
};

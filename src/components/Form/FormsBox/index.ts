type FormType = 'text' | 'email' | 'tel' | 'password' | 'date' | 'time' | 'url' | 'search' | 'week'

export interface IFormInputProps {
    modelValue?: number| string;
    type:  FormType;
  }
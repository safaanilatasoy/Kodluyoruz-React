import { object, ref, string} from "yup";

const validations = object({
  email: string().email('Geçerli bir email giriniz').required('Zorunlu Alan'),
  password: string().min(5, 'Parolanız en az 5 karakter olmalıdır.').required('Zorunlu Alan'),
  passwordConfirmation: string().oneOf([ref('password')], 'Parolalar uyuşmuyor').required('Zorunlu Alan'),
});

export default validations
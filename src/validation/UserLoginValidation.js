import * as yup from 'yup';

const userSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8).max(24).required('Password is required'),
});

export default userSchema;

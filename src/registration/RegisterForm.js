import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import './RegistrationForm.css'; // İlgili CSS stil dosyası





const validationSchema = Yup.object({
  name: Yup.string().required('İsim zorunludur'),
  email: Yup.string().email('Geçersiz e-mail adresi').required('E-mail zorunludur'),
  password: Yup.string().min(6, 'Parola en az 6 karakter olmalıdır').required('Parola zorunludur'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Geçersiz telefon numarası').required('Telefon numarası zorunludur'),
});

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('YOUR_BACKEND_ENDPOINT', values);
        console.log(response.data);
        
        alert('Kayıt başarılı! Kısa zamanda sizinle iletişime geçilecek.');
      } catch (error) {
        console.error('Form gönderilirken hata oluştu', error);
      
        alert('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      }
    },
  });

  return (
    <form style={{height: "1000px"}}  onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <input
        type="text"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

      <button type="submit">Kayıt Ol</button>
    </form>
  );
}

export default RegisterForm;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./RegistrationForm.css";

const validationSchema = Yup.object({
  name: Yup.string().required("ad vacibdir"),
  email: Yup.string().email("yanlış e-mail adresi").required("E-mail vacibdir"),
  password: Yup.string()
    .min(6, "Şifrə en az 6 hərfdən olmalıdır")
    .required("Şifrə vacibdir"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "yanlış telefon nömrəsi")
    .required("Telefon nömrəsi vacibdir"),
});

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("YOUR_BACKEND_ENDPOINT", values);
        console.log(response.data);

        alert("Qeydiyyat uğurlu! Qısa zamanda sizinlə əlaqə saxlanılacaq.");
      } catch (error) {
        console.error("Form gönderilirken xəta yarandı", error);

        alert(
          "Qeydiyyat zamanı bir xəta yarandı. Zəhmət olmasa təkrar yoxlayın."
        );
      }
    },
  });

  return (
    <form style={{ height: "1000px" }} onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <input
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <input
        type="text"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}

      <button type="submit">Qeydiyyat Ol</button>
    </form>
  );
}

export default RegisterForm;

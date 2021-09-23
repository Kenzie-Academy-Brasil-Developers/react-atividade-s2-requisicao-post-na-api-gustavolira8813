import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./styles.css";

const Login = ({ setStatus }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(4, "senha deve ter no mínimo 4 caracteres")
      .required("Campo obrigatório"),
  });

  const handleForm = (data) => {
    console.log(data);
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setStatus(response);
        console.log(response);
      })

      .catch((err) => setStatus(err));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form className="register" onSubmit={handleSubmit(handleForm)}>
      <div>
        <input
          className="register_input"
          placeholder="Username"
          {...register("username")}
        />

        {errors.username?.message && (
          <span className="register_error">{errors.username.message}</span>
        )}
      </div>
      <div>
        <input
          type="password"
          className="register_input"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password?.message && (
          <span className="register_error">{errors.password.message}</span>
        )}
      </div>

      <button className="register_btn" type="submit">
        Entrar
      </button>
    </form>
  );
};
export default Login;

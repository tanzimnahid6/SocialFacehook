import { useForm } from "react-hook-form";
import Feild from "./common/Feild";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData) => {

    const user = { ...formData };
    console.log(user);
    setAuth({ user });
    navigate("/");
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="text-center font-bold text-2xl py-4">Login Form</div>
      {/* email */}
      <Feild className="auth-label" htmlFor="Email" label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Feild>
      {/* password */}
      <Feild label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Feild>

      <Feild>
        <button className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
          Login
        </button>
      </Feild>
    </form>
  );
};

export default LoginForm;

import React from "react";
import { useAuthorized, useAuthStore } from "../stores/hooks/useAuthStore";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const isAuthorized = useAuthorized();
  const authStore = useAuthStore();

  if (isAuthorized) return <Redirect to={{ pathname: "/map" }} />;

  const onSubmit = (data) => {
    const { email, password } = data;

    authStore.login(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name="email" ref={register({ required: true })} />
        <input
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

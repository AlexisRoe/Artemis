import Header from "../components/Header";
import { Main } from "../components/helper/Main";
import { LoginButton, LoginInput, LoginForm } from "../components/Login";
import useAuth from "../utils/hook/useAuth";

const defaultHeader = {
  title: "Login",
  date: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  loading: false,
  isError: false,
  message: null,
};

function Login() {
  const {
    signIn,
    loading,
    isError,
    message,
    formState,
    credentials,
    handleID,
    handlePassword,
  } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    signIn();
  };

  return (
    <>
      <Header
        settings={defaultHeader}
        showNotification={loading}
        isError={isError}
        message={message}
      />
      <Main>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            value={credentials.id}
            title="Mitarbeiter-ID"
            error={formState}
            onChange={(event) => handleID(event.target.value)}
          />
          <LoginInput
            type="password"
            value={credentials.password}
            title="Password"
            error={formState}
            onChange={(event) => handlePassword(event.target.value)}
          />
          <LoginButton type="submit" error={formState}>
            Login
          </LoginButton>
        </LoginForm>
      </Main>
    </>
  );
}

export default Login;

import Layout from "../Layout/Layout";
import LoginForm from "../LoginForm/LoginForm";

const App = (): JSX.Element => {
  const submitForm = () => null;
  return (
    <>
      <Layout />
      <LoginForm submitForm={submitForm}></LoginForm>
    </>
  );
};

export default App;

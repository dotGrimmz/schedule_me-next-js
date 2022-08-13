import { NextPage } from "next";
import { Layout } from "../src/components/layout/Layout";
import Login from "../src/views/login/Login";
import { AuthContextProvider } from "../src/context/AuthContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Login />
      </Layout>
    </AuthContextProvider>
  );
};

export default Home;

import { NextPage } from "next";
import { Layout } from "../src/components/layout/Layout";
import Login from "../src/views/login/Login";

const Home: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default Home;

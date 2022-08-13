import { NextPage } from "next";
import { Layout } from "../src/components/layout/Layout";
import { AuthContextProvider } from "../src/context/AuthContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
};

export default Home;

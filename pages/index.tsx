import { NextPage } from "next";
import { Layout } from "../src/components/layout/Layout";
import { AuthContextProvider } from "../src/context/AuthContext";
import { AvailabilityContextProvider } from "../src/context/AvailabilityContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <AvailabilityContextProvider>
        <Layout />
      </AvailabilityContextProvider>
    </AuthContextProvider>
  );
};

export default Home;

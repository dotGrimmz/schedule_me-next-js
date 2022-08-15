import { NextPage } from "next";
import { Layout } from "../src/components/layout/Layout";
import { AuthContextProvider } from "../src/context/AuthContext";
import { AvailabilityContextProvider } from "../src/context/AvailabilityContext";
import { SnackbarProvider } from "notistack";

const Home: NextPage = () => {
  return (
    <SnackbarProvider maxSnack={2}>
      <AuthContextProvider>
        <AvailabilityContextProvider>
          <Layout />
        </AvailabilityContextProvider>
      </AuthContextProvider>
    </SnackbarProvider>
  );
};

export default Home;

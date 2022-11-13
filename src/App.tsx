import { FC } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";

const queryClient: QueryClient = new QueryClient();
const App: FC = () => {
  return (
    <section className=" h-screen w-screen ">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Router />
        </Layout>
      </QueryClientProvider>
    </section>
  );
};

export default App;

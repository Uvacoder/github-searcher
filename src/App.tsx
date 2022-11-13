import { FC } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient: QueryClient = new QueryClient();
const App: FC = () => {
  return (
    <section className=" h-screen w-screen ">
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Home />
        </Layout>
      </QueryClientProvider>
    </section>
  );
};

export default App;

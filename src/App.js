import Layout from "./components/layout/Layout";
import QuotePage from "./pages/QuotePage";
import { CategoryContextProvider } from "./store/category-context";

function App() {
  return (
    <CategoryContextProvider>
      <Layout>
        <QuotePage />
      </Layout>
    </CategoryContextProvider>
  );
}

export default App;

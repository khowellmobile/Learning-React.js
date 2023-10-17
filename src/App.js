import Layout from "./components/layout/Layout";
import QuotePage from "./pages/QuotePage";
import { QuoteContextProvider } from "./store/quote-context";

function App() {
  return (
    <QuoteContextProvider>
      <Layout>
        <QuotePage />
      </Layout>
    </QuoteContextProvider>
  );
}

export default App;

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import QuotePage from "./pages/QuotePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<QuotePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

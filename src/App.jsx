import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster
        richColors
        position="bottom-right"
        visibleToasts={1}
        toastOptions={{
          style: {
            width: "320px",
          },
          duration: "1000",
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

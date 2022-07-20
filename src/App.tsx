import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React from "react";
import AppRoutes from "AppRoutes";

const App = () => {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.Suspense>
    </RecoilRoot>
  );
};

export default App;

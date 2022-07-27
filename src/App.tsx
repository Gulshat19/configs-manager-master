import { createTheme, CssBaseline, ThemeProvider, CircularProgress } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { indigo } from '@mui/material/colors';
import React from "react";
import AppRoutes from "AppRoutes";

const theme = createTheme({
  palette: {
    primary: indigo,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <React.Suspense fallback={<CircularProgress />}>
          <CssBaseline />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </React.Suspense>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;

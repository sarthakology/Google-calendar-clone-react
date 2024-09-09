import React from 'react';
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer} from 'react-toastify';

function App() {


  return (
    <React.Fragment>
      <AppRoutes />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import AppRoutes from "./AppRoutes";
import { ToastContainer} from 'react-toastify';

function App() {
  return (<div>
    <React.Fragment>
      <AppRoutes />
      <ToastContainer />
    </React.Fragment>
  </div>
  );
}

export default App;

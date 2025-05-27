
import './App.css';
import ROOT from './router/Index.routes';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
function App() {
  const root=createBrowserRouter(ROOT)
  return (
    <div className="App">
 <RouterProvider router={root}/>
    </div>
  );
}

export default App;

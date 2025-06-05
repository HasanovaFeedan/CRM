
import Client from "../pages/Cli/Client";
import ClientDetail from "../pages/Cli/ClientDetail"; // Added import
import Document from "../pages/documents/Document";
import EmployeeDetail from "../pages/Employees/EmployeeDetail";
import Employees from "../pages/Employees/Employees";
import Eevents from "../pages/events/Eevents";
import Home from "../pages/Home/Home";
import Operation from "../pages/operation/Operation";
import OperationDetail from "../pages/operation/OperationDetail"; // Added import for OperationDetail
import Quetos from "../pages/quetos/Quetos";
import Sales from "../pages/sales/Sales";
import SalesNeg from "../pages/sales/SalesNeg";
import SiteRoot from "../pages/SiteRoot";
import Task from "../pages/tasks/Task";

     const ROOT=[{
        path:"",
        element:<SiteRoot/>,
        children:[{
               path:"/",
        element:<Home/>, 
        },
        {
                       path:"operations",
        element:<Operation/>,
        },
        {
            path:"operations/detail", // Added route for OperationDetail
            element: <OperationDetail/>
        },
            {
                       path:"tasks",
        element:<Task/>, 
        },
            {
                       path:"clients",
        element:<Client/>,
        },
        {
            path:"clients/detail", // Added route for ClientDetail
            element: <ClientDetail/>
        },
        {
                       path:"employees",
        element:<Employees/>, 
        },
          {
                       path:"employees/detail",
        element:<EmployeeDetail/>, 
        },
        {
                  path:"quotes",
        element:<Quetos/>, 
        },
        {
                  path:"documents",
        element:<Document/>, 
        },
                    {
                        path:"sales",
        element:<Sales/>, 
        },
                    {
                        path:"salesneg",
        element:<SalesNeg/>, 
        },
        {
                                 path:"events",
        element:<Eevents/>,  
        }
       ]

    }]
    export default ROOT
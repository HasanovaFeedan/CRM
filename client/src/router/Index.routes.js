
import Client from "../pages/Cli/Client";
import Employees from "../pages/Employees/Employees";
import Home from "../pages/Home/Home";
import Operation from "../pages/operation/Operation";
import Quetos from "../pages/quetos/Quetos";
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
                       path:"tasks",
        element:<Task/>, 
        },
            {
                       path:"clients",
        element:<Client/>, 
        },
        {
                       path:"employees",
        element:<Employees/>, 
        },{
                  path:"quotes",
        element:<Quetos/>, 
        }
     
       ]

    }]
    export default ROOT
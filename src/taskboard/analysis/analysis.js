import React, {useEffect, useContext} from "react";
import { Context } from "../../context/context";
import PieCharts from "./piechart";
import Barchart from "./barchart";
import './analysis.css'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";


export default function Analysis(){
  useEffect(()=>{
    localStorage.setItem("lastVisitedPage", window.location.pathname);
  }, [])
  const { taskboardReducer } = useContext(Context);
  const { state } = taskboardReducer;
  const stateKeys = Object.keys(state)

  Object.values(state).map((val, i)=>{
       if(val.isActive == true){
          console.log(stateKeys[i]);
          localStorage.setItem('lastTaskState', JSON.stringify( stateKeys[i].toUpperCase()))
       }
  })


    return (<>

  <main className="flex flex-row gap-x-2">
<PieCharts/>
<Barchart/>
  </main>

  <section className="ml-4 h-48 pt-4 w-2/3 mt-4 rounded-lg shadow-md bg-white ">
    <article className=" underline flex grid-cols-4 w-1/2 justify-evenly items-center text-xs ml-2">
      <span>Today</span>
      <span>Yesterday</span>
      <span>This Month</span>
      <span>This Year</span>
    </article>
    <article className="grid grid-flow-col justify-center gap-x-28 mt-4">
      <div className="flex flex-col justify-between items-center space-y-5">
        <h1 className="font-bold text-sm">New Task</h1>
        <span className="text-4xl font-bold">2</span>
        <div className="border-t text-xs pt-1">View Tasks</div>
      </div>
      <div className="flex flex-col justify-between items-center space-y-5">
        <h1 className="font-bold" text-sm>Tasks in Progress</h1>
        <span className="text-4xl font-bold text-center">10</span>
        <div className="border-t text-xs pt-1">View Tasks</div>
      </div>
      <div className="flex flex-col justify-between items-center space-y-5 ">
        <h1 className="font-bold text-sm">Completed Tasks</h1>
        <span className="text-4xl font-bold">5</span>
        <div className="border-t text-xs pt-1">View Tasks</div>
      </div>
    </article>
  </section>
  <section className="ml-4 h-72 w-2/3 mt-4 rounded-lg shadow-md bg-white ">
  <article className=" underline flex grid-cols-4 w-1/2 justify-evenly items-center text-xs ml-2">
      <span>New Task</span>
      <span>Task In Progress</span>
      <span>Completed Tasks</span>
 
    </article>
  <article className=" border h-64 px-8 w-full">
    <VictoryChart  theme={VictoryTheme.material} domain={{x: [0, 12], y:[0, 25]}} height={400} width={800} domainPadding={{ x: 30 }}>
      <VictoryBar barRatio={0.1}   style={{data: {fill: '#2D4AE3'}}} data={[
        {x:3, y: 5},
        {x:5, y: 15},
        {x:7, y: 8}
        ]}/>
    </VictoryChart>
  </article>
  </section>

  <section className=" h-fit mt-4 rounded-lg shadow-md bg-white w-full ">
  <h1 className="text-xl px-4  pt-4 font-medium ">Task History</h1>
  <p className="text-xs px-4  font-bold mt-4">64 Tasks <span className="font-normal">Engaged with</span></p>

  <article className="grid grid-flow-row space-y-2  justify-self-auto items-center mt-2 w-full ">
        <table class="px-4  table-fixed text-center border-separate  py-4 space-y-4 w-full">
  <thead className=" h-10 mt-3 space-y-4 justify-evenly font-medium py-4 items-center text-xs">
    <tr className="">
      <th>Hub Name</th>
      <th>Project</th>
      <th>Author</th>
      <th>Status</th>
      <th>Requests</th>
      <th>Issues</th>
      <th>Project Life</th>
    </tr>
  </thead>
  <tbody className="text-xs mt-4">
    <tr>
      <td className="grid grid-cols-3 items-center">
    <input className="h-8 w-4 ml-3" type="checkbox"/>
        <span className="text-start ml-1 col-span-2">
          Coloby 
          </span>
        </td>
      <td>Mockup</td>
      <td>Leno</td>
      <td className=""><h1 className="bg-orange-100 mx-auto text-orange-500 rounded-2xl w-20  py-2">In Progress</h1></td>
      <td>0</td>
      <td>2</td>
      <td>10 Sep 23 - 30 Sep 23</td>
    </tr>
  </tbody>

  <tbody className="text-xs">
    <tr>
      <td className="grid grid-cols-3 items-center">
    <input className="h-8 w-4 ml-3" type="checkbox"/>
        <span className="text-start ml-1 col-span-2">
          Coloby 
          </span>
        </td>
      <td>Wireframe</td>
      <td>Leno</td>
      <td className=""><h1 className="bg-green-100 mx-auto text-green-500 rounded-2xl w-20  py-2">Completed</h1></td>
      <td>0</td>
      <td>2</td>
      <td>10 Sep 23 - 30 Sep 23</td>
    </tr>
  </tbody>  <tbody className="text-xs">
    <tr>
      <td className="grid grid-cols-3 items-center">
    <input className="h-8 w-4 ml-3" type="checkbox"/>
        <span className="text-start ml-1 col-span-2">
          Coloby 
          </span>
        </td>
      <td>Competitive Audit</td>
      <td>Leno</td>
      <td>Pending</td>
      <td>0</td>
      <td>2</td>
      <td>10 Sep 23 - 30 Sep 23</td>
    </tr>
  </tbody>  <tbody className="text-xs">
    <tr>
      <td className="grid grid-cols-3 items-center">
    <input className="h-8 w-4 ml-3" type="checkbox"/>
        <span className="text-start ml-1 col-span-2">
          Coloby 
          </span>
        </td>
      <td>User Research</td>
      <td>Leno</td>
      <td>Completed</td>
      <td>0</td>
      <td>2</td>
      <td>10 Sep 23 - 30 Sep 23</td>
    </tr>
  </tbody>  <tbody className="text-xs">
    <tr>
      <td className="grid grid-cols-3 items-center">
    <input className="h-8 w-4 ml-3" type="checkbox"/>
        <span className="text-start ml-1 col-span-2">
          Coloby 
          </span>
        </td>
      <td>Mockup</td>
      <td>Leno</td>
      <td>Completed</td>
      <td>0</td>
      <td>2</td>
      <td>10 Sep 23 - 30 Sep 23</td>
    </tr>
  </tbody>  <tbody className="text-xs">
    <tr>
      <td className="grid grid-cols-3 items-center">
    <input className="h-8 w-4 ml-3" type="checkbox"/>
        <span className="text-start ml-1 col-span-2">
          Coloby 
          </span>
        </td>
      <td>Mockup</td>
      <td>Leno</td>
      <td className=""><h1 className="bg-orange-100 mx-auto text-orange-500 rounded-2xl w-20  py-2">In Progress</h1></td>
      <td>0</td>
      <td>2</td>
      <td>10 Sep 23 - 30 Sep 23</td>
    </tr>
  </tbody>
  
</table>



  </article>
  </section>
    </>
)};

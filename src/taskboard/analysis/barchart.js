import React from "react";
import {VictoryLabel, VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryTheme } from "victory";

export default function Barchart(){
    return(<>
        <section className="h-40 mt-4  w-64 bg-white shadow-lg rounded-lg">
         

        <VictoryChart  theme={VictoryTheme.material} height={500}  width={700}  domainPadding={{ x: 30 }}>
        <VictoryLabel
      x={225}
      y={25}
      textAnchor="middle"
      text="2023 Work Flow"
    />
<VictoryGroup offset={12}
  colorScale={['#2D4AE3', '#BC7828', '#3FC529']}

>
  <VictoryBar
    data={[{ x: 1, y: 100 }, { x: 2, y: 20 }, { x: 3, y: 50 } , { x: 4, y: 35} , { x: 5, y: 5 }, { x: 6, y: 5 } , { x: 7, y: 60 }, { x: 8, y: 45 }, { x: 9, y: 5 }, { x: 10, y: 5 } ,   { x: 11, y: 5 }, ]}
  />
  <VictoryBar
  

    data={[{ x: 1, y: 20 }, { x: 2, y: 50 }, { x: 3, y: 5 }, { x: 4, y: 25 } , { x: 5, y: 65},  { x: 6, y: 5 }, { x: 7, y: 60 }, { x: 8, y: 45 }, { x: 9, y: 5 }, { x: 10, y: 5 } ,   { x: 11, y: 5 }, ]}
  />
   <VictoryBar
  

    data={[{ x: 1, y: 60 }, { x: 2, y: 45 }, { x: 3, y: 60 }, { x: 4, y: 80 } ,   { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 60 }, { x: 8, y: 45 }, { x: 9, y: 5 }, { x: 10, y: 5 } ,   { x: 11, y: 5 }, { x: 12, y: 5 } ]}
  />

  
  
  
  
</VictoryGroup>
<VictoryAxis
      tickCount={12}
      tickValues={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',  'Jul', 'Aug', 'Sep', 'Oct',  'Nov', 'Dec']}
    />
<VictoryAxis
      dependentAxis
    />
</VictoryChart>

      </section>
        </>)
}
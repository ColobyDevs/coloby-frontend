import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { GoDotFill } from "react-icons/go";

export default function PieCharts() {
  return (
    <>
      <section className="ml-4 mt-4 flex flex-row gap-x-4 z-20">
        <article className="overall-pie-bg h-40 rounded-md w-56 border flex flex-row items-center">
          <section className="flex flex-col">
            <div className="mt-12 text-white px-2 flex flex-col justify-start">
              <h1 className="text-xs font-medium">Overall Project</h1>
              <span className="pie-date font-light">Jan 23 till date</span>
            </div>
            <div className="h-40 w-32  ">
              <svg viewBox="12 0 200 200">
                <circle cx={100} cy={100} r={50} fill="white" />
                <VictoryPie
                  standalone={false}
                  width={200}
                  height={200}
                  colorScale={["#2D4AE3", "#BC7828", "#3FC529"]}
                  data={[
                    { x: 1, y: 198 },
                    { x: 2, y: 126 },
                    { x: 3, y: 36 },
                  ]}
                  innerRadius={75}
                  labelRadius={20}
                  style={{
                    data: {
                      fillOpacity: 0.9,
                    },
                    labels: {
                      fontSize: 25,
                      fill: "#c43a31",
                      visibility: "hidden",
                    },
                    parent: {
                      marginTop: 20,
                    },
                  }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 30, fill: "black", fontWeight: "bold" }}
                  x={100}
                  y={100}
                  text="10%"
                />
              </svg>
            </div>
          </section>
          <section className="justify-between flex flex-row gap-x-2 mt-10">
            <article className="flex flex-col space-y-2">
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-blue-500 text-xs task-ctg" />
                <span>To do</span>
              </div>
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-orange-400 text-xs task-ctg" />
                <span>In Progress</span>
              </div>
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-green-500 text-xs task-ctg" />
                <span>Completed</span>
              </div>
            </article>
            <article className="space-y-2 task-ctg justify-end flex flex-col items-center text-white">
              <span>55%</span>
              <span>35%</span>
              <span>10%</span>
            </article>
          </section>
        </article>
        <article className="month-pie-bg  h-40 rounded-md w-56 border flex flex-row items-center">
          <section className="flex flex-col">
            <div className="mt-12 text-white px-2 flex flex-col justify-start ">
              <h1 className="text-xs font-medium">This Month</h1>
              <span className="pie-date font-light">June 2023</span>
            </div>
            <div className="h-40 w-32  ">
              <svg viewBox="12 5 200 240">
                <circle cx={100} cy={100} r={50} fill="white" />
                <VictoryPie
                  standalone={false}
                  width={200}
                  height={200}
                  colorScale={["#2D4AE3", "#BC7828", "#3FC529"]}
                  data={[
                    { x: 1, y: 72 },
                    { x: 2, y: 126 },
                    { x: 3, y: 162 },
                  ]}
                  innerRadius={75}
                  labelRadius={20}
                  style={{
                    data: {
                      fillOpacity: 0.9,
                    },
                    labels: {
                      fontSize: 25,
                      fill: "#c43a31",
                      visibility: "hidden",
                    },
                    parent: {
                      marginTop: 20,
                    },
                  }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 30, fill: "black", fontWeight: "bold" }}
                  x={100}
                  y={100}
                  text="45%"
                />
              </svg>
            </div>
          </section>
          <section className="justify-between flex flex-row gap-x-2 mt-10">
            <article className="flex flex-col space-y-2">
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-blue-500 text-xs task-ctg" />
                <span>To do</span>
              </div>
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-orange-400 text-xs task-ctg" />
                <span>In Progress</span>
              </div>
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-green-500 text-xs task-ctg" />
                <span>Completed</span>
              </div>
            </article>
            <article className="space-y-2 task-ctg justify-end flex flex-col items-center text-white">
              <span>20%</span>
              <span>35%</span>
              <span>45%</span>
            </article>
          </section>
        </article>
        <article className="week-pie-bg h-40 rounded-md w-56 border flex flex-row items-center">
          <section className="flex flex-col">
            <div className="mt-12 text-white px-4 flex flex-col justify-start ">
              <h1 className="text-xs font-medium">This week</h1>
              <span className="pie-date font-light">Mon-Sun</span>
            </div>
            <div className="h-40 w-32  ">
              <svg viewBox="12 5 200 240">
                <circle cx={100} cy={100} r={50} fill="white" />
                <VictoryPie
                  standalone={false}
                  width={200}
                  height={200}
                  colorScale={["#2D4AE3", "#BC7828", "#3FC529"]}
                  data={[
                    { x: 1, y: 18 },
                    { x: 2, y: 126 },
                    { x: 3, y: 180 },
                  ]}
                  innerRadius={75}
                  labelRadius={20}
                  style={{
                    data: {
                      fillOpacity: 0.9,
                    },
                    labels: {
                      fontSize: 25,
                      fill: "#c43a31",
                      visibility: "hidden",
                    },
                    parent: {
                      marginTop: 20,
                    },
                  }}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 30, fill: "black", fontWeight: "bold" }}
                  x={100}
                  y={100}
                  text="50%"
                />
              </svg>
            </div>
          </section>
          <section className="justify-between flex flex-row gap-x-2 mt-10">
            <article className="flex flex-col space-y-2">
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-blue-500 text-xs task-ctg" />
                <span>To do</span>
              </div>
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-orange-400 text-xs task-ctg" />
                <span>In Progress</span>
              </div>
              <div className="task-ctg flex flex-row items-center text-white">
                <GoDotFill className="text-green-500 text-xs task-ctg" />
                <span>Completed</span>
              </div>
            </article>
            <article className="space-y-2 task-ctg justify-end flex flex-col items-center text-white">
              <span>20%</span>
              <span>35%</span>
              <span>45%</span>
            </article>
          </section>
        </article>
      </section>
    </>
  );
}

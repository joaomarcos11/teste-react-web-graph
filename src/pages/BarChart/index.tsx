import React from "react";
import Chart from "react-google-charts";

export const data = [
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ];
  
  export const options = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    colors: ["#b0120a", "#ffab91"],
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };

const BarChart = (): JSX.Element => {
    return (
        <>
            <h1>Bar Chart</h1>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}

export default BarChart;

// export const data = [
//   ["City", "2010 Population", "2000 Population"],
//   ["New York City, NY", 8175000, 8008000],
//   ["Los Angeles, CA", 3792000, 3694000],
//   ["Chicago, IL", 2695000, 2896000],
//   ["Houston, TX", 2099000, 1953000],
//   ["Philadelphia, PA", 1526000, 1517000],
// ];

// export const options = {
//   title: "Population of Largest U.S. Cities",
//   chartArea: { width: "50%" },
//   isStacked: true,
//   hAxis: {
//     title: "Total Population",
//     minValue: 0,
//   },
//   vAxis: {
//     title: "City",
//   },
// };

// export function App() {
//   return (
//     <Chart
//       chartType="BarChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }

// export const data = [
//   [
//     "Element",
//     "Density",
//     { role: "style" },
//     {
//       sourceColumn: 0,
//       role: "annotation",
//       type: "string",
//       calc: "stringify",
//     },
//   ],
//   ["Copper", 8.94, "#b87333", null],
//   ["Silver", 10.49, "silver", null],
//   ["Gold", 19.3, "gold", null],
//   ["Platinum", 21.45, "color: #e5e4e2", null],
// ];

// export const options = {
//   title: "Density of Precious Metals, in g/cm^3",
//   width: 600,
//   height: 400,
//   bar: { groupWidth: "95%" },
//   legend: { position: "none" },
// };

// export function App() {
//   return (
//     <Chart
//       chartType="BarChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }

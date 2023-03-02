import React from "react";
import Chart from "react-google-charts";

const PieChart = (): JSX.Element => {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];
      
    const options = {
        title: "My Daily Activities",
    };

    return (
        <>
            <h1>Pie Chart</h1>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </>
    )
}

export default PieChart;

// export const data = [
//     ["Language", "Speakers (in millions)"],
//     ["Assamese", 13],
//     ["Bengali", 83],
//     ["Bodo", 1.4],
//     ["Dogri", 2.3],
//     ["Gujarati", 46],
//     ["Hindi", 300],
//     ["Kannada", 38],
//     ["Kashmiri", 5.5],
//     ["Konkani", 5],
//     ["Maithili", 20],
//     ["Malayalam", 33],
//     ["Manipuri", 1.5],
//     ["Marathi", 72],
//     ["Nepali", 2.9],
//     ["Oriya", 33],
//     ["Punjabi", 29],
//     ["Sanskrit", 0.01],
//     ["Santhali", 6.5],
//     ["Sindhi", 2.5],
//     ["Tamil", 61],
//     ["Telugu", 74],
//     ["Urdu", 52],
//   ];
  
//   export const options = {
//     title: "Indian Language Use",
//     legend: "none",
//     pieSliceText: "label",
//     slices: {
//       4: { offset: 0.2 },
//       12: { offset: 0.3 },
//       14: { offset: 0.4 },
//       15: { offset: 0.5 },
//     },
//   };
  
//   export function App() {
//     return (
//       <Chart
//         chartType="PieChart"
//         data={data}
//         options={options}
//         width={"100%"}
//         height={"400px"}
//       />
//     );
//   }


// export const data = [
//     ["Pizza", "Popularity"],
//     ["Pepperoni", 33],
//     ["Hawaiian", 26],
//     ["Mushroom", 22],
//     ["Sausage", 10], // Below limit.
//     ["Anchovies", 9], // Below limit.
//   ];
  
//   export const options = {
//     title: "Popularity of Types of Pizza",
//     sliceVisibilityThreshold: 0.2, // 20%
//   };
  
//   export function App() {
//     return (
//       <Chart
//         chartType="PieChart"
//         data={data}
//         options={options}
//         width={"100%"}
//         height={"400px"}
//       />
//     );
//   }

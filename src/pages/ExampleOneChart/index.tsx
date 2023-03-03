import Chart from "react-google-charts";

const dataBase = {
    months: ["7/2022", "8/2022", "9/2022", "10/2022"],
    income: [3500, 2500, 3000.65, 8000],
    expense: [2500, 3600, 8950, 7000],
};
// a ideia foi transformar os dados acima (que poderia vir assim do JSON) no formato da doc do google-chart

let arrIndice = Object.keys(dataBase);
console.log(arrIndice);
let arrValues = Object.values(dataBase);
console.log(arrValues);

export let data: any = [];

for (let i = 0; i < arrValues[0].length; i++) {
    data[i] = arrValues.map((item) => {
        return item[i];
    })
}

data.unshift(arrIndice);

console.log(data);

export const options = {
    title: 'Receitas x Despesas',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { format: 'currency' },
    animation: { duration: 500, easing: 'linear', startup: true },
}

const ExampleOneChart = (): JSX.Element => {
    return (
        <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={data}
            options={options}  
            chartLanguage="pt-BR"
        />
    )
}

export default ExampleOneChart;

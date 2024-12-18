import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({input}) {

    const data = calculateInvestmentResults({...input});
    console.log(data);

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <RenderTableResult data={data} />
        </table>
    );
}

function RenderTableResult({data}){
    const rows = [];
    for(let i = 0; i < data.length; i++){
        rows.push(ObjectRow(data[i]));
    }
    return <tbody>{rows}</tbody>;
}

function ObjectRow(data){
    return (
        <tr key={data.year}>
            <td className="center">{data.year }</td>
            <td className="center">{formatter.format(data.valueEndOfYear)}</td>
            <td className="center">{formatter.format(data.interest)}</td>
            <td className="center">{formatter.format(data.annualInvestment)}</td>
            <td className="center">{formatter.format(data.valueEndOfYear - data.annualInvestment)}</td>
        </tr>
    );
}
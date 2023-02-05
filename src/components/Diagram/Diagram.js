import './Diagram.css'
import DiagramBar from "./DiagramBar";

const Diagram = function (props) {

    const costsArr = props.dataSet.map(data => data.value);
    const maxMonthCosts = Math.max(...costsArr);
    console.log(maxMonthCosts
    )



    return (
        <div className={'diagram'}>
            {props.dataSet.map(dataSet =>
                <DiagramBar
                    key={dataSet.id}
                    label={dataSet.label}
                    maxValue={maxMonthCosts}
                    value={dataSet.value}/>)}

        </div>
    )
}

export default Diagram;
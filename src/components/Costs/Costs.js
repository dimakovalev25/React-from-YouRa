import CostItem from "./CostItem";
import Card from "../UI/Card";
import './Costs.css'
import CostFilter from "./CostFilter";
import CostsDiagram from "./CostsDiagram";

function Costs({props, onCheckYear2}) {
    const checkYear = function (data) {
        const year = data;
        onCheckYear2(year)
     }

    return (
        <Card className={'costs'}>
            <CostsDiagram props={props}/>
            <CostFilter onCheckYear={checkYear}/>
            {props.length === 0 ?
                (<p>no shopping</p>) :
                (props.map(i => <CostItem key={i.id} costs={i}/>)
                )}
            {/*{props.map(i => <CostItem key={i.id} costs={i}/>)}*/}
        </Card>
    )
}

export default Costs;
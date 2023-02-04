import CostItem from "./CostItem";
import Card from "../UI/Card";
import './Costs.css'
import CostFilter from "./CostFilter";

function Costs({props, onCheckYear2}) {
    const checkYear = function (data) {
        const year = data;
        onCheckYear2(year)
     }

    return (
        <Card className={'costs'}>
            <CostFilter onCheckYear={checkYear}/>
            {props.map(i => <CostItem key={i.id} costs={i}/>)}
        </Card>
    )
}

export default Costs;
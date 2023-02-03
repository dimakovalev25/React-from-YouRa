import CostItem from "./CostItem";
import Card from "../UI/Card";
import './Costs.css'
function Costs({props}) {

    return (
        <Card className={'costs'}>
            {props.map(i  => <CostItem key={i.id} costs={i}/>)}
        </Card>
    )
}

export default Costs;
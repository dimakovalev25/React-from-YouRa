import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem(props) {

    return (
        <Card className={'cost-item'}>
            <CostDate props={props} />
            <div className={'cost-item__description'}>
                <h2>{props.costs.description}</h2>
                <div className={'cost-item__price'}>{props.costs.amount}$</div>
            </div>
        </Card>
    )
}


export default CostItem;
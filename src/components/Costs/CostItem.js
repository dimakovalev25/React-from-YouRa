import CostDate from "./CostDate";
import Card from "../UI/Card";
import {useState} from "react";

function CostItem(props) {

    const [amount, setAmount] = useState(props.costs.amount)

    function incAmount() {
        setAmount(amount + 1)
    }

    function decAmount() {
        setAmount(amount - 1)
    }

    return (
        <Card className={'cost-item'}>
            <CostDate props={props}/>
            <div className={'cost-item__description'}>
                <h2>{props.costs.description}</h2>
                <div className={'cost-item__price'}>{amount}$</div>
            </div>
            <div>
                <button
                    onClick={incAmount}
                    className={'cost-item__price'}>+
                </button>
                <button
                    onClick={decAmount}
                    className={'cost-item__price'}>-
                </button>
            </div>
        </Card>
    )
}


export default CostItem;
import './NewCost.css'

import CostForm from "./CostForm";
import Card from "../UI/Card";
import {useState} from "react";

function NewCost(props) {

    const [flag, setFlag] = useState(true)

    const saveCostDataHandler = function (inputCostData) {
        const CostData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(CostData)
    }
    const changeFlag = function () {
        setFlag(!flag);
    }

    const button = <div className={'new-cost__actions'}>
        <button onClick={changeFlag} type={"submit"}>you can add purchase</button>
    </div>

    return (
        <Card className={'new-cost'}>
            {flag ? button : <CostForm changeFlag={changeFlag}  onSaveCostData={saveCostDataHandler}/>}
        </Card>
    )
}

export default NewCost;
import './NewCost.css'

import CostForm from "./CostForm";
import Card from "../UI/Card";

function NewCost(props) {

    const saveCostDataHandler = function (inputCostData) {
        const CostData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        props.onAddCost(CostData)
    }

    return (

            <Card className={'new-cost'}>
                <CostForm  onSaveCostData={saveCostDataHandler}/>
            </Card>


    )
}

export default NewCost;
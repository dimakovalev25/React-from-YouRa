import './NewCost.css'

import CostForm from "./CostForm";
import Card from "../UI/Card";

function NewCost() {

    const saveCostDataHandler = function (inputCostData) {
        const CostData = {
            ...inputCostData,
            id: Math.random().toString(),
        }

        console.log(CostData)
    }

    return (

            <Card className={'new-cost'}>
                <CostForm  onSaveCostData={saveCostDataHandler}/>
            </Card>


    )
}

export default NewCost;
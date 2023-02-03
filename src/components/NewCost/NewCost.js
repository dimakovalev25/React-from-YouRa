import './NewCost.css'

import CostForm from "./CostForm";
import Card from "../UI/Card";

function NewCost() {
    return (

            <Card className={'new-cost'}>
                <CostForm/>
            </Card>


    )
}

export default NewCost;
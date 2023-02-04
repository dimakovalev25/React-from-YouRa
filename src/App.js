import './components/Costs/CostItem.css'
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

function App() {

    const costs = [
        {
            costDate: new Date(2022, 10, 2),
            description: 'Phone',
            amount: 340,
            id: 1,
        },
        {
            costDate: new Date(2022, 11, 2),
            description: 'T-shirt',
            amount: 40,
            id: 2,
        },
        {
            costDate: new Date(2023, 0, 12),
            description: 'Mouse',
            amount: 20,
            id: 3,
        },
        {
            costDate: new Date(2023, 0, 22),
            description: 'Pen',
            amount: 2,
            id: 4,
        },
        {
            costDate: new Date(2023, 0, 22),
            description: 'Apple',
            amount: 1,
            id: 5,
        },
        {
            costDate: new Date(2021, 0, 22),
            description: 'Pencill',
            amount: 2,
            id: 6,
        }
    ];

    const [purchase, setPurchase] = useState(costs);
    // purchase.map(i => console.log((i.costDate).toString().includes('2022')));
    // console.log(purchase[0].costDate);
    const addCostHandler = function (data) {
        setPurchase([...purchase,
            data]);
    }

    const checkYear2 = function (data) {
        const year = data;
        setPurchase(costs.filter(i => (i.costDate).toString().includes(year)))
    }

    return (
        <div>
            <h1>SPA_React</h1>
            <NewCost onAddCost={addCostHandler}/>
            <Costs props={purchase} onCheckYear2={checkYear2}/>
        </div>
    );
}

export default App;

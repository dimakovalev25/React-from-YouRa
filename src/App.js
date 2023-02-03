import './components/Costs/CostItem.css'
import Costs from "./components/Costs/Costs";

function App() {

    const costs = [
        {
            costDate: new Date(2023, 0, 2),
            description: 'Phone',
            amount: 340,
            id: 1,
        },
        {
            costDate: new Date(2023, 1, 2),
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
    ]

    return (
        <div>
            <h1>SPA_React</h1>
            <Costs props={costs}/>
        </div>
    );
}

export default App;

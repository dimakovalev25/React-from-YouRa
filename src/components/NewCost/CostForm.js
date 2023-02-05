import './CostForm.css'
import {useState} from "react";

function CostForm(props) {

    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //      name: '',
    //      sum:'',
    //      date: ''
    //  })

    const nameChangeHandler = function (e) {
        setName(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     name:e.target.value,
        // })
    }
    const dateChangeHandler = function (e) {
        setDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     date:e.target.value,
        // })
    }
    const sumChangeHandler = function (e) {
        setSum(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     sum:e.target.value,
        // })
    }
    const confirmForm = function (e) {
        e.preventDefault()
        // console.log('confirmForm')
        const costData = {
            costDate: new Date(date),
            description: name,
            amount: sum,
        }
        // console.log(costData);
        props.onSaveCostData(costData);
        setName('');
        setDate('');
        setSum('');

    }

    const newCostChangeFlag = function () {
        props.changeFlag()
    }

    return (
        <form onSubmit={confirmForm}>
            <div className={'new-cost__controls'}>
                <div className={'new-cost__control'}>
                    <label>Name purchase </label>
                    <input onChange={nameChangeHandler} value={name} type={'text'}></input>

                </div>
                <div className={'new-cost__control'}>
                    <label>Sum</label>
                    <input onChange={sumChangeHandler} value={sum} type={'number'} min={0.1} step={0.1}></input>

                </div>
                <div className={'new-cost__control'}>
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={date} type={'date'} min={'2019-01-01'} step={'2023-12-31'}></input>

                </div>
                <div className={'new-cost__actions'}>
                    <button onClick={newCostChangeFlag} type={"submit"}>ADD</button>
                </div>
                <div className={'new-cost__actions'}>
                    <button onClick={newCostChangeFlag} type={"submit"}>Cancel</button>
                </div>
            </div>

        </form>
    )
}

export default CostForm;
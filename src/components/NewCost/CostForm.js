import './CostForm.css'
import {useState} from "react";
function CostForm() {

    const [name , setName] = useState('');
    const [sum , setSum] = useState('');
    const [date , setDate] = useState('');

    const nameChangeHandler = function (e){
        setName(e.target.value)
    }
    const dateChangeHandler = function (e){
        setDate(e.target.value)
    }

    const sumChangeHandler = function (e){
        setSum(e.target.value)
    }

    const confirmForm = function (e) {
        e.preventDefault()
        console.log('confirmForm')

    }

    return (
        <form>
            <div className={'new-cost__controls'}>
                <div className={'new-cost__control'}>
                    <label>Name</label>
                    <input onChange={nameChangeHandler} type={'text'}></input>

                </div>
                <div className={'new-cost__control'}>
                    <label >Sum</label>
                    <input onChange={sumChangeHandler} type={'number'} min={0.1} step={0.1}></input>

                </div>
                <div className={'new-cost__control'}>
                    <label >Date</label>
                    <input onChange={dateChangeHandler} type={'date'} min={'2019-01-01'} step={'2023-12-31'}></input>

                </div>
                <div className={'new-cost__actions'}>
                    <button onClick={confirmForm} type={"submit"}>ADD</button>
                </div>
            </div>

        </form>
    )
}

export default CostForm;
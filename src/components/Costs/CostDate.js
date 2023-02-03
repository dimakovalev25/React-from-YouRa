import './CostDate.css'
function CostDate({props}) {

    const month = props.costs.costDate.toLocaleString('ru-RU', {month: 'long'});
    const day = props.costs.costDate.toLocaleString('ru-RU', {day: '2-digit'});
    const year = props.costs.costDate.getFullYear();

    return (
        <div className={'cost-date'} >
            <div className={'cost-date__day'}>{day}</div>
            <div className={'cost-date__month'}>{month}</div>
            <div className={'cost-date__year'}>{year}</div>
        </div>
    )
}

export default CostDate;
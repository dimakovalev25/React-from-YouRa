import Diagram from "../Diagram/Diagram";


const CostsDiagram = ({props}) => {
    // console.log(props)

    const diagramDataSets = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];
    // console.log(diagramDataSets)

    for (let i = 0; i < props.length; i++) {
        const costMonth = props[i].costDate.getMonth();
        diagramDataSets[costMonth].value += props[i].amount;
    }
    // console.log(diagramDataSets)

    return (
        <>
            <Diagram

                dataSet={diagramDataSets}/>
        </>
    )


}

export default CostsDiagram;
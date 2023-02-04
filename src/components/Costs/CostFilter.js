import "./CostFilter.css";

const CostsFilter = (props) => {
    const yearChange = function (e) {
        const year = e.target.value;
        props.onCheckYear(year)
        console.log(year)
    }

    return (
        <div className="costs-filter">
            <div className="costs-filter__control">
                <label>Choose year</label>
                <select onChange={yearChange}
                >
                    <option value="2">All</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default CostsFilter;
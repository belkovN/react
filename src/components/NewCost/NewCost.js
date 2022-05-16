import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

    const SaveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
        console.log(costData);
    };

    return <div className='new-cost'>
        <CostForm onSaveCostData={SaveCostDataHandler}/>
    </div>
}

export default NewCost;
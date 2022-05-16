import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: "999.99"
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 24),
    description: "Ноутбук",
    amount: "2999.01"
  },
  {
    id: 'c3',
    date: new Date(2021, 5, 20),
    description: "Iphone",
    amount: "1299.99"
  }
];

const App = () => {

  const[costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('app component');
    setCosts(prevCosts=>{
      return [cost, ...prevCosts]
    });
  };



  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;

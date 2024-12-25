import React,{useState} from "react";
import './State.css';
function State(){
    const [foods,setFoods] = useState(["apple","banana","mango"])

    function handleAddFood(){

        const newfood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f => [...foods,newfood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((element,i) => i!== index));
    }

    return(<div>
      <div className="hello">
    <h1>LIST OF FOOD:</h1>
        <ul>
        {foods.map((food, index) =>
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        )}
      </ul>
      </div>

      <input type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add Food</button>
    </div>);
}

export default State;
import React,{useState} from "react";

function Hookstate(){
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[comment,setComment] = useState("");
    const[gender,setGender] = useState("");
    const[color,setColor]=useState("#FFFFFF");
    const[car,setCar]=useState({year:2024,
        brand:"Toyota",
        model:"Camry"});

    function handleAgeChange(e){
        setAge(e.target.value);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleCommentChange(c){
        setComment(c.target.value);
    }

    function handleGenderChange(g){
        setGender(g.target.value);
    }

    function handleColorChange(col){
        setColor(col.target.value);
    }

    function handleYearChange(e){
        setCar(e =>({...e,year:e.target.value}));
    }
    function handleMakeChange(e){
        setCar(e=>({...e,brand:e.target.value}));
    }
    function handleModelChange(e){
        setCar(e=>({...e,model:e.target.value}));
    }



    return(
        <>
        <div>
        <input value={age} onChange={handleAgeChange} />
        <p>Age: {age}</p>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>   

        <textarea value ={comment} onChange={handleCommentChange} placeholder="Write a comment here" />
        <p>Comment:{comment}</p> 

        <p>Please Select Your Gender:</p>
        <label for="male">Male</label>
        <input type="radio" name="gender" value="Male"  onClick={handleGenderChange}/><br />
        <label for="female">Female</label>
        <input type="radio" name="gender" value="Female"  onClick={handleGenderChange}/><br />
        <p>GENDER:{gender}</p>
        </div>

        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color -display" style={{backgroundColor:color}}>
                <p>Selected Color:{color}</p>

            <label for="Color">COLOR:</label>
            <input type="color" value="color"  onChange={handleColorChange}/><br />
            </div>  

        
        </div> 
        </>
    );
}

export default Hookstate;
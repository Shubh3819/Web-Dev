import React,{useState} from "react";

function Hookstate(){
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[comment,setComment] = useState("");
    const[gender,setGender] = useState("")
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

    return(
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
    );
}

export default Hookstate;
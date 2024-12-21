import './Card.css';
function Card(){
    return(
        <>
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_oAHS6B0HTR4uxnc37lK_JmyOmR8g9ZojQ&s" style={{ width: "200px" }} alt="Descriptive text" ></img>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make
                    up the bulk of its content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </>
    );
}

export default Card;
import React from "react";

let CardNumber = (props)=> {

    return ( 
        <div className="mb-3 mb-sm-0 my-1 mx-1">
            <div className="card bg-dark">
                <div className="card-body text-white">
                {props.number}

                </div>
            </div>
        </div>
    )
 }


let SecoundsCounter = (props) =>{
    return (<div className="d-flex flex-row justify-content-center bg-dark text-white py-4 fw-bold fs-1 ">
         <div className="mb-2 mb-sm-0 mx-2 my-2">
          <div className="card bg-dark ">
            <div className="card-body text-white  ">
                <i class="fa-regular fa-clock"></i>
            </div>
          </div>
        </div>
        <CardNumber number={Math.floor((props.seconds/100000)%10)}/>
        <CardNumber number={Math.floor((props.seconds/10000)%10)}/>
        <CardNumber number={Math.floor((props.seconds/1000)%10)}/>
        <CardNumber number={Math.floor((props.seconds/100)%10)}/>
        <CardNumber number={Math.floor((props.seconds/10)%10)}/>
        <CardNumber number={Math.floor((props.seconds/1)%10)}/>

    </div>)
}
export default SecoundsCounter ;

import React from "react";
function Card2(props){
    return(
        <div>
            <div className="bg-slate-50 w-[240px] h-[330px] rounded-lg ml-1">
                <img className=" mb-1 h-[220px] rounded-md hover:cursor-pointer" src={props.img} alt="img" />
                <div className="p-1 ">
                    <span className=" bg-red-600 p-1 ml-1 text-sm rounded-sm text-white w-3 h-3">{props.off}</span>
                    <span className="p-2 text-red-700 font-bold text-sm">{props.text}</span>    
                </div>
                <div>
                    <span className='font-bold p-2' >Rs.{props.price}</span>
                    <span className= "text-sm text-slate-400 pl-2">M.R.P:</span><span className="text-sm text-slate-400 p-1 line-through">Rs.{props.Mrp}</span>
                </div>
                <div className="text-sm  font-sans p-2">
                    {props.name}    
                </div>    
            </div>
        </div>
    )
}

export default Card2;
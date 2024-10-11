import React from "react";
function Image(props){
    return (
        <>
            <img className="h-[200px] rounded-md font-medium p-3 hover:cursor-pointer " src={props.img} alt="" />
        </>
    )
}

export default Image
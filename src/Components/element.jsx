import React from "react";

function Element(props) {
    return (
        <div className="font-medium ml-2 text-[13px] p-2 hover:cursor-pointer hover:border-[1px] hover:border-white-500 text-white">{props.name}</div>
    )
}

export default Element;
import React from "react";
function Card(props) {
    return(
        <div className="bg-slate-100 w-[320px] h-[420px] rounded-md ml-1 ">
            <div className="mx-auto content-center">

            
            <div className="font-bold text-[20px] p-5 hover:cursor-pointer"  >{props.Tile}</div>
            <div className="flex flex-wrap justify-center gap-3">
            <div className="leading-[0px]">
                <img className="w-[140px] h-[120px] rounded-sm font-medium p-3 hover:cursor-pointer" src={props.img1} alt="" />
                <div className="font-normal p-3 ">{props.objname1}</div>
            </div>
            <div className="leading-[0px]">
                <img className="w-[140px] h-[120px]  rounded-sm font-medium p-3 hover:cursor-pointer" src={props.img2} alt="" />
                <div className="font-normal p-3 ">{props.objname2}</div>
            </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">

            <div className="leading-[0px]">
                <img className="w-[140px] h-[120px] rounded-sm font-medium p-3 hover:cursor-pointer" src={props.img3} alt="" />
                <div className="font-normal p-3 ">{props.objname3}</div>
            </div>
            <div className="leading-[0px]">
                <img className="w-[140px] h-[120px]  rounded-sm font-medium p-3 hover:cursor-pointer" src={props.img4} alt="" />
                <div className="font-normal p-3 ">{props.objname4}</div>
            </div>
            </div>
           <div className=" ml-3 text-[14px] p-3 text-blue-500 hover:cursor-pointer" >{props.footer}</div>
           </div>
        </div>
    )
}

export default Card;
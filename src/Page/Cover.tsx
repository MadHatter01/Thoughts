import { useRef } from "react"
import { ChangeEventHandler } from "react";


export const Cover = ()=>{
    const fileRef = useRef<HTMLInputElement>(null);
    const handleClick = () =>{
        fileRef.current?.click();
    }
    const handleImageUpload : ChangeEventHandler<HTMLInputElement>= (event)=>{
        const target = event.target;
        console.log(target?.files?.[0]);
    }
    return (
        <div className="cover">
            <img src = "/vite.svg" alt="cover"/>
            <button onClick={handleClick}> Change Cover</button>
            <input style={{display:'none'}} ref={fileRef} type="file" onChange={handleImageUpload}/>
        </div>
    )
}
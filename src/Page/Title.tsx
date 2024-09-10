import { useEffect, useRef } from "react";
import { NodeData } from "../utils/types"
import {nanoid} from "nanoid";


type TitleProps = {
    title : string; 
    changePageTitle(title:string):void;
    addNode(node: NodeData, index:number): void;

}

export const Title = ({title, changePageTitle, addNode}:TitleProps)=>{
    const headerRef = useRef<HTMLHeadingElement>(null);
        const isFocused = document.activeElement == headerRef.current;
        if(!isFocused && headerRef.current){
            headerRef.current.textContent = title;
        }
    useEffect(()=>{

    }, [title])
    return(<div>
            <h1 contentEditable suppressContentEditableWarning onInput={(event)=> changePageTitle(event.currentTarget.textContent || "")} onKeyDown={(event)=>{
                if(event.key === 'Enter'){
                    event.preventDefault();
                    addNode({type:"text", id:nanoid(), value:""}, 0)
                }
            }}> </h1>
    </div>)
}
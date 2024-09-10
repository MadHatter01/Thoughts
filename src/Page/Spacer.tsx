type SProps = {
    handleClick(): void;
    showTip:boolean;

}

export const Spacer = ({handleClick, showTip}:SProps)=>{
<div onClick={handleClick}>
    {showTip && (
        "Click to create first note"
    )}
</div>
}
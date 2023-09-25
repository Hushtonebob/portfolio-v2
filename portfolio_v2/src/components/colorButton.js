export default function ColorButton({
    color, setColor
}){

    const colorSwitch = ()=>{
        if(color=="Dark"){
        setColor("Light")
    }   else{
        setColor("Dark");
    };
    }

    return(
        <div className={`${color}ColorButton`} onClick={colorSwitch}>
            <div id={`${color}ButtonText`}>{`${color} Mode`}</div>
        </div>
    );
    //end of colorButton
}
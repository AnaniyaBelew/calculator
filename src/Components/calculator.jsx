import { useState} from 'react';
import '../Components/calc.css'
const Calculator =()=>
{
    const val=["7","8","9","*","4","5","6","/","1","2","3","-","0",".","+","A/c","="];
    const [prob, setprob]=useState("");
    const [soln, setsoln]=useState("");
    const handelClick=(event)=>
    {
        const opp=event.target.value;
        if(opp==='=')
        {
            try {
                let result = eval(prob);
                setsoln(result);
                setprob(result);
              } catch (error) {
                console.log(`Error: Invalid expression. Details: ${error.message}`);
              }
        }
        else if(opp==='A/c')
        {
            setprob("");
            setsoln("")
        }
        else setprob(prob+event.target.value)
    }
    return(
        <div className="calc_container">
            <div className='result_view'> 
                {prob}
               <p><span>{soln}</span></p>
            </div>
            <div className='logic_container'>
            {val.map((val)=>
            {
                return(<div className="Buttons">
        
                <button value={val} onClick={handelClick}>{val}</button>
                </div>)
            })}
            </div>
            
        </div>
    )
}
export default Calculator
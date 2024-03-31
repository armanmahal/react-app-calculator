import React from 'react'
import Buttons from "./buttons.js"

export default function App() {

    const [calculation, setCalculation] = React.useState('')
    const [displayMain, setDisplayMain] = React.useState("")
    const [displaySec, setDisplaySec] = React.useState("")
    const [operation, setOperation] = React.useState('')

    const updateDisplay = (value) => {
        setDisplayMain((prevValue)=>{
           return(prevValue+value)
        })
    }

    const updateCalculation = (value) => {
        setOperation(value)
        setDisplaySec( displayMain)
        setDisplayMain("")
    }

    const clearDisplay = () => {
        setDisplayMain("")
        setDisplaySec("")
        setOperation('')
    }

    const result = () => {

        switch (operation) {
            case '+' :
                setCalculation(Number(displayMain) + Number(displaySec))
                break;
        
            case '-' :
                setCalculation(Number(displaySec) - Number(displayMain))
                break;
        
            case '*' :
                setCalculation(Number(displayMain) * Number(displaySec))
                break;
        
            case '/' :
                setCalculation(Number(displaySec) / Number(displayMain))
                break;
        
            default:
                break;
        }

        
    }

    React.useEffect(()=>{
        setDisplaySec((prevValue)=>{
            return(prevValue+operation+displayMain+" =")
        })
        setDisplayMain("" + calculation)
        
        setOperation('')
    }, [calculation])

    return (
        <div className='boundary'>
            <div className='display'>{displaySec}{operation}</div>
            <div className='display'>{displayMain}</div>
            <Buttons
                handleClick={updateDisplay}
                handleOpr={updateCalculation}
                handleClear={clearDisplay}
                handleCalculation={result}
            />

        </div>
    )
}


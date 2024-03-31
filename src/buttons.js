import React from "react";

export default function Buttons(props){

    const styles = {
        backgroundColor: "orange",
        color: "white"
    }

    const updateDisplay = (value) => {
        props.handleClick(value)
    }

    const updateCalculation = (value) => {
        props.handleOpr(value)
    }

    const clearDisplay = () => {
        props.handleClear()
    }

    const result = () => {
        props.handleCalculation()
    }



    return(
        <div className='button-container'>

            <button className='grid-item-1' onClick={clearDisplay}>AC</button>
            <button className='grid-item' onClick={()=> updateDisplay(".")}> .</button>
            <button className='grid-item' style={styles} onClick={()=> updateCalculation("/")}>/</button>
            <button className='grid-item' onClick={()=> updateDisplay("7")}>7</button>
            <button className='grid-item' onClick={()=> updateDisplay("8")}>8</button>
            <button className='grid-item' onClick={()=> updateDisplay("9")}>9</button>
            <button className='grid-item' style={styles} onClick={()=> updateCalculation("*")}>*</button>
            <button className='grid-item' onClick={()=> updateDisplay("4")}>4</button>
            <button className='grid-item' onClick={()=> updateDisplay("5")}>5</button>
            <button className='grid-item' onClick={()=> updateDisplay("6")}>6</button>
            <button className='grid-item' style={styles} onClick={()=> updateCalculation("-")}>-</button>
            <button className='grid-item' onClick={()=> updateDisplay("1")}>1</button>
            <button className='grid-item' onClick={()=> updateDisplay("2")}>2</button>
            <button className='grid-item' onClick={()=> updateDisplay("3")}>3</button>
            <button className='grid-item' style={styles} onClick={()=> updateCalculation("+")}>+</button>
            <button className='grid-item-1' onClick={()=> updateDisplay("0")}>0</button>
            <button className='grid-item' onClick={()=> updateDisplay("00")}>00</button>
            <button className='grid-item' style={styles} onClick={()=> result()}>=</button>

            
       </div>
    )
}
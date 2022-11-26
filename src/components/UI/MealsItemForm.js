import React from 'react'
import { useRef, useState } from 'react'
import Input from './Input'
import './MealsItemForm.css'

export default function MealsItemForm(props) {
    const amountInputRef= useRef();
    const [amountIsValid, setAmountIsValid]=useState(true)
    const submitHandler=(e)=>{
        e.preventDefault()

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
        console.log(enteredAmountNumber)

        if (enteredAmount.trim().length === 0 || 
        enteredAmount < 1 || 
        enteredAmount > 5){
            setAmountIsValid(false)
            return;
        }
    props.onAddToCart(enteredAmountNumber)


    }


  return (
    <form className='form' onSubmit={submitHandler}>
        <Input
        ref={amountInputRef}  
        label='Amount' 
        input={{
            id:'amount' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button > + Add</button>
        {!amountIsValid && <p>Please, enter valid amount.</p>}
    </form>
  );
};

import './ExpenseForm.css';
import React, {useState} from 'react';

function ExpenseForm(props){
    const[title, setNewTitle] = useState('');
    const[amount, setNewAmt] = useState('');
    const[date, setNewDate] = useState('');
    function titleChangeHandler(event){
        setNewTitle(event.target.value);
    }
    //We will try to merge amount and date handler to one function
    function genericChangeHandler(labelIdentifier, value){
        if(labelIdentifier === 'Date'){
            setNewDate(value)
            console.log("full date is > " , date )
            console.log("full date is >>>>" , value )
        }
        if(labelIdentifier === 'Amount'){
            setNewAmt(value)
        }

    }

    const submit = function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            title : title,
            date : new Date(date),
            amount : amount
        }
        console.log(" Expense Object received from User: ", expenseData);
        props.onSaveUserData(expenseData);

        setNewTitle("");
        setNewAmt("");
        setNewDate("");


    }

    return <form onSubmit={submit}>
        <div className= "new-expense__controls">
            <div className= "new-expense__control">
                <label> Title </label>
                <input type= "text" value ={title} onChange={titleChangeHandler}/>
            </div>
            <div className= "new-expense__control">
                <label> Amount </label>
                <input type= "number" min = "0.01" step ="0.01"  value ={amount} onChange={(event) => genericChangeHandler('Amount', event.target.value)} />
            </div>
            <div className= "new-expense__control">
                <label> Date </label>
                <input type= "date" min = "2019-01-01" max="2024--12-31"  value ={date} onChange={(event) => genericChangeHandler('Date', event.target.value)}/>
            </div>
        </div>
        <div  className ="new-expense__actions"></div>
        <button type ="submit">Add Expense</button>
    </form>

}

export default ExpenseForm;
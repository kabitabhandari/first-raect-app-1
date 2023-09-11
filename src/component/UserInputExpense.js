import React from 'react';
import './UserInputExpense.css';
import ExpenseForm from "./ExpenseForm";
function UserInputExpense(props) {

    const saveUserData = function (data){
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        console.log("expense data at UserInputExpense function() " , expenseData)
        props.addExpenseHandler(expenseData);
    }



    return <div className= "new-expense">
       <ExpenseForm onSaveUserData = {saveUserData}/>
    </div>
}

export default UserInputExpense;
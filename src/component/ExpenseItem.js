import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "./Card";
import React, {useState} from 'react';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    
    function handler(){
        setTitle("Updated Toilet Paper");
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                {/* <h2>{props.title}</h2> */}
                <h2 onClick={handler}>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
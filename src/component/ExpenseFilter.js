
import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    function clickHandler(event){
        const userDesiredDate = event.target.date
        console.log("user selected date is :: " , userDesiredDate)
        props.userDate(userDesiredDate);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select>
                    <option value='2022' onClick={clickHandler}>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
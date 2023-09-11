import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import {useState} from "react";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
   const[ filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandler = function (selectedYear){
        console.log("Year is ", selectedYear);
        setFilteredYear(selectedYear);
    }


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeDateFilter = {filterChangeHandler} year = {filteredYear} />
                {props.expenseItem.map((e) => (
                    <ExpenseItem title= {e.title}  amount = {e.amount} date = {e.date}/>
                ))}
            </Card>
        </div>
    )


}

export default Expenses;
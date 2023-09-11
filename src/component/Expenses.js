import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import {useState} from "react";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
    console.log("props in Expenses ", props)
   const[ filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandler = function (selectedYear){
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onChangeDateFilter = {filterChangeHandler} year = {filteredYear} />
                {filteredExpenses.map((e) => (
                    <ExpenseItem title= {e.title}  amount = {e.amount} date = {e.date}/>
                ))}
            </Card>
        </div>
    )


}

export default Expenses;
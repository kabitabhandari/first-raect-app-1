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
                <p>Data for 2019, 2021, 2022 are hidden currently</p>
                <ExpenseItem
                    title={props.expenseItem[0].title}
                    amount={props.expenseItem[0].amount}
                    date={props.expenseItem[0].date}
                />
                <ExpenseItem
                    title={props.expenseItem[1].title}
                    amount={props.expenseItem[1].amount}
                    date={props.expenseItem[1].date}
                />
                <ExpenseItem
                    title={props.expenseItem[2].title}
                    amount={props.expenseItem[2].amount}
                    date={props.expenseItem[2].date}
                />
                <ExpenseItem
                    title={props.expenseItem[3].title}
                    amount={props.expenseItem[3].amount}
                    date={props.expenseItem[3].date}
                />
            </Card>
        </div>
    )


}

export default Expenses;
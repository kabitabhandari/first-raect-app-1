import './App.css';
import Expenses from "./component/Expenses"
import UserInputExpense from "./component/UserInputExpense";
import ExpenseFilter from "./component/ExpenseFilter";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const addExpense = function (expense){
        console.log("expense in app.js " , expense);
    }

    const filterHere = function (p){

    }
    return (

        <div>
            <h2>Let's get started!</h2>
            <Expenses expenseItem = {expenses}></Expenses>
            <UserInputExpense addExpenseHandler = {addExpense}/>
            <ExpenseFilter pass = {filterHere} />
        </div>
    );
}

export default App;

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.items.date} />
            <div className='expense-item__description'>
                <h2>{props.items.title}</h2>
                <div className='expense-item__price'>${props.items.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
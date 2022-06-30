import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter/ExpensesFilter';

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = selcetedYear => {
        console.log ( selcetedYear);
        console.log('Expenses.js');
        setFilteredYear(selcetedYear);
    }
    return (
        <div>
                <Card className="expenses">
                <ExpenseFilter selected= {filteredYear} onChangeFilter = {filterChangeHandler}/>
                    <ExpenseItem 
                        title={props.expenses[0].title}
                        amount={props.expenses[0].amount}
                        date={props.expenses[0].date}/>

                    <ExpenseItem title={props.expenses[1].title} 
                                 amount={props.expenses[1].amount} 
                                 date={props.expenses[1].date}/>

                    <ExpenseItem title={props.expenses[2].title}
                                 amount={props.expenses[2].amount} 
                                 date={props.expenses[2].date}/>

                    <ExpenseItem title={props.expenses[3].title}
                                 amount={props.expenses[3].amount}
                                 date={props.expenses[3].date}/>
                </Card>
                </div>
            )
}

export default Expenses;

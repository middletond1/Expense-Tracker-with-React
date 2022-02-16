import React from 'react'
import Table from 'react-bootstrap/Table'

export default function ExpenseTable(props) {
    
    function parseDay(date) {
        const day = date.substr(8, 2);
        return day;
    }
    
    function parseMonth(date) {
        const month = parseInt(date.substr(5, 2)) - 1;
        return month;
    }
    
    function monthToCalendar(month) {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return months[month];
    }
    
    function parseYear(date) {
        const year = date.substr(0, 4);
        return year;
    }
    const tableElements = props.tableData.map(item => (
            <tr key={item.id}>
                <td>{item.expense}</td>
                <td>$ {item.amount}</td>
                <td>{`${monthToCalendar(parseMonth(item.date))} ${parseDay(item.date)}, ${parseYear(item.date)}`}</td>
                <td>{item.store}</td>
                <td><button id={item.id} onClick={props.removeTableData}>Delete</button></td>
            </tr>
        )
    )

    return (
        <div className='container'>
            <Table striped hover bordered id="expensetable">
                <thead className='table-success'>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Store</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {tableElements}
                </tbody>
            </Table>
        </div>
    )
}
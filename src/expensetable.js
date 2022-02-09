import React from 'react'

export default function ExpenseTable(props) {
    const tableElements = props.tableData.map(item => (
            <tr key={item.id}>
                <td>{item.expense}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
                <td>{item.store}</td>
                <td><button id={item.id} onClick={props.removeTableData}>Delete</button></td>
            </tr>
        )
    )

    return (
        <table id="expensetable">
            <thead>
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
        </table>
    )
}
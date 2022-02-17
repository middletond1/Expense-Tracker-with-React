import React from 'react';
import ExpenseForm from './expenseform';
import ExpenseTable from './expensetable';
import { nanoid } from 'nanoid';
import Button from 'react-bootstrap/Button'


export default function App() {
    const [formData, setFormData] = React.useState(
        {expense: "", amount: "", date: "", store: ""}
    );

    const [tableData, setTableData] = React.useState(JSON.parse(localStorage.getItem('tabledata')) || [])

    const [darkMode, setDarkMode] = React.useState(false)

    function changeToDarkMode() {
        setDarkMode([prevDarkMode => !prevDarkMode])
    }

    function handleFormChange(event) {
        setFormData(prevFormData => {
            const { name, value } = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function resetFormData() {
        setFormData(() => {
            return {
                expense: "", 
                amount: "", 
                date: "", 
                store: ""
            }     
        })
    }

    function addTableData() {
        if (!formData.expense || !formData.amount || !formData.date) {
            return
        }
        setTableData(prevTableData => {
            return [
                ...prevTableData,
                {
                    id: nanoid(),
                    expense: formData.expense,
                    amount: formData.amount,
                    date: formData.date,
                    store: formData.store
                }
            ]
        })
        resetFormData()
    }

    function removeTableData(event) {
        setTableData(prevTableData => prevTableData.filter(item => item.id != event.target.id))
    }

    React.useEffect(() => localStorage.setItem('tabledata', JSON.stringify(tableData)), [tableData])
    
    console.log(tableData)

    return (
        <div className='container mt-5'>
            <Button>Dark Mode</Button>
            <h1 className='text-center'>Expense Tracker with React</h1>
            <ExpenseForm 
                handleFormChange={handleFormChange}
                formData={formData}
                addTableData={addTableData}
            />
            <ExpenseTable 
                tableData={tableData}
                removeTableData={removeTableData}
            />
        </div>
    )
}
import React from 'react';
import Form from './form';
import ExpenseTable from './expensetable';

export default function App() {
    const [formData, setFormData] = React.useState(
        {expense: "", amount: "", date: "", store: ""}
    );

    const [tableData, setTableData] = React.useState([])

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

    function addTableData(event) {
        event.preventDefault();
        setTableData(prevTableData => {
            return [
                ...prevTableData,
                {
                    expense: formData.expense,
                    amount: formData.amount,
                    date: formData.date,
                    store: formData.store
                }
            ]
        })
        resetFormData()
    }

    function removeTableData() {
        
    }

    console.log(formData)
    console.log(tableData)
    
    return (
        <div>
            <Form 
                handleFormChange={handleFormChange}
                formData={formData}
                addTableData={addTableData}
            />
            <ExpenseTable 
                tableData={tableData}
            />
        </div>
    )
}
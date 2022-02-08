import React from 'react';
import Form from './form';
import ExpenseTable from './expensetable';

export default function App() {
    const [formData, setFormData] = React.useState(
        {expense: "", amount: "", date: "", store: ""}
    );

    function handleFormChange(event) {
        setFormData(prevFormData => {
            const { name, value } = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    console.log(formData)

    return (
        <div>
            <Form 
                handleFormChange={handleFormChange}
                formData={formData}
            />
            <ExpenseTable />
        </div>
    )
}
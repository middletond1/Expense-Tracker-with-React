import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ExpenseForm(props) {
    return (
        <div className='container mt-5'>
            <Form onSubmit={props.addTableData}>
                <Form.Group className="mb-3" controlId='expense'>
                    <Form.Label>Expense:</Form.Label>
                    <Form.Control
                        type="text" 
                        name="expense" 
                        placeholder="Enter Item"
                        value={props.formData.expense}
                        onChange={props.handleFormChange}
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId='amount'>
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control
                        type="number" 
                        name="amount" 
                        step=".01" 
                        placeholder="Price" 
                        value={props.formData.amount}
                        onChange={props.handleFormChange}
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId='date'>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control
                        type="date" 
                        name="date"
                        value={props.formData.date}
                        onChange={props.handleFormChange}
                        required 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId='store'>
                    <Form.Label>Store:</Form.Label>
                    <Form.Control
                        type="text" 
                        name="store" 
                        placeholder="Where was it bought?" 
                        value={props.formData.store}
                        onChange={props.handleFormChange}
                    />
                </Form.Group>
                <Button className="mb-5" onClick={props.addTableData} type="submit">Add Expense</Button>
            </Form>
        </div>
    )
}
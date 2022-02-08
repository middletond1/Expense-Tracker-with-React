import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form>
                <label htmlFor="expense">Expense:</label>
                <input 
                    type="text" 
                    name="expense" 
                    placeholder="Enter Item"
                    value={props.formData.expense}
                    onChange={props.handleFormChange}
                    required 
                />
                <label htmlFor="amount">Amount:</label>
                <input 
                    type="number" 
                    name="amount" 
                    step=".01" 
                    placeholder="Price" 
                    value={props.formData.amount}
                    onChange={props.handleFormChange}
                    required 
                />
                <label htmlFor="date">Date:</label>
                <input 
                    type="date" 
                    name="date"
                    value={props.formData.date}
                    onChange={props.handleFormChange}
                    required 
                />
                <label htmlFor="store">Store:</label>
                <input 
                    type="text" 
                    name="store" 
                    placeholder="Where was it bought?" 
                    value={props.formData.store}
                    onChange={props.handleFormChange}
                />
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}
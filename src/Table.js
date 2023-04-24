import React from 'react'

function Table({ transactions }) {
    return (
        <table className='table table-striped text-center'>
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.length > 0 ? (
                    transactions.map(transaction => {
                        return <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>

                    })
                ) :<tr><td>No transactions</td></tr>
                    

                }

            </tbody>
        </table>
    )
}

export default Table
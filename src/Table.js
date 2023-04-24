import React from 'react'

function Table({ transactions }) {
    return <>
    {transactions.length>0?(
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
                {transactions.map(transaction => {
                        return <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    })                            
                }

            </tbody>
        </table>):<p className='text-secondary text-center'>No transactions</p>}
    </>
            }

export default Table
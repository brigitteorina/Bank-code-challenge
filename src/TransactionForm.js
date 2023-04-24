import React from 'react'

function TransactionForm({formData, onChange, onSubmit}) {
  

  return (
    <form className='row p-2' onSubmit={(e)=>onSubmit(e)}>
      <div className='form-group col-md-3 gap-2 d-flex align-items-center'>
        <label className='label'>Date: </label>
        <input className='form-control' type='date' value={formData.date} id="date" onChange={(e)=>onChange(e.target)}/>
      </div>
      <div className='col-md-3'><input type='text' value={formData.description} id="description" className='form-control' placeholder='Description' onChange={(e)=>onChange(e.target)}/></div>
      <div className='col-md-3'><input type='text' value={formData.category} id="category" className='form-control' placeholder='Category' onChange={(e)=>onChange(e.target)}/></div>
      <div className='col-md-3'><input type='number' value={formData.amount} id="amount" className='form-control' placeholder='Amount' onChange={(e)=>onChange(e.target)}/></div>
      <button type='submit' className='addTransBtn btn mx-auto w-auto text-black my-3'>Add Transaction</button>
    </form>
  )
}

export default TransactionForm
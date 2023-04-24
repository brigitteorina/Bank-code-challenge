import React from 'react'

function Search({ onSearch }) {
  return (
    <div className='my-2'><input type="text" placeholder='Search your Recent Transactions' className="form-control" id="search" onChange={(e) => onSearch(e.target.value)} />
      <div className="input-group-append">
        <i className="bi bi-search"></i>
      </div></div>
  )
}

export default Search
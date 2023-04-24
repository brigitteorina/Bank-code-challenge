import { useEffect, useState } from "react"
import Header from "./Header"
import Search from "./Search"
import TransactionForm from "./TransactionForm"
import Table from "./Table"
function App() {
  const [transactions, setTransactions] = useState([])
  const [formData, setFormData] = useState({ id: '', date: '', description: '', category: '', amount: 0 })
  const [filteredTransactions, setFilteredTransactions] = useState([])

  async function getTransactions() {
    const promise = await fetch('http://localhost:8001/transactions')
    const response = await promise.json()
    return response
  }
  useEffect(() => {
    getTransactions().then(resp => {
      setTransactions(resp)
      setFilteredTransactions(resp)
    }).catch(err => console.log(`${err}. Please ensure server is running on port 8001`))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    setFilteredTransactions([...filteredTransactions, formData])
    setFormData({ id: '', date: '', description: '', category: '', amount: 0 })
  }

  const handleChange = (elem) => {
    setFormData({ ...formData, id: formData.length + 1, [elem.id]: elem.value })
  }

  const handleSearch = (value) => {
    const foundTransactions = transactions.filter(transaction => transaction.description.toLowerCase().split(" ").includes(value.toLowerCase().trim()) || transaction.description.toLowerCase().includes(value.toLowerCase().trim()) || value === "")

    setFilteredTransactions(foundTransactions)
  }

  return (

    <div className="app">
      <Header />
      <Search onSearch={handleSearch} />
      <TransactionForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      <Table transactions={filteredTransactions} />

    </div>
  )
}
export default App;
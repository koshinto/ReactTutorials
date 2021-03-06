import React, { useState } from 'react'

interface Product {
  name: string
  price: string,
  stocked: boolean,
  category: string,
}

function ProductRow(props: Product) {
  const name = props.stocked ?
    props.name :
    <span style={{color: 'red'}}>{props.name}</span>
  return (
    <tr>
      <td>{name}</td>
      <td>{props.price}</td>
    </tr>
  )
}

interface CategoryName {
  name: string
}

function ProductCatagoryRow(props: CategoryName) {
  return (
    <tr>
      <td colSpan={2}>
        {props.name}
      </td>
    </tr>
  )
}

function ProductTable() {
  const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]
  const rows: JSX.Element[] = []
  let lastCategory = ""
  products.forEach((product: Product) => {
    if(product.category !== lastCategory) {
      rows.push(<ProductCatagoryRow name={product.category} key={product.category} />)
      lastCategory = product.category
    }
    rows.push(
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
        category={product.category}
      />
    )
  })
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

interface Search {
  filterText: string
  inStockOnly: boolean
  setFilterText(text: string): void
  setInStockOnly(bool: boolean): void
}

function SearchBar(props: Search) {
  const handleFilterTextChange = (e: any) => {
    props.setFilterText(e.target.value)
  }

  const handleInStockChange = (e: any) => {
    props.setInStockOnly(e.target.checked)
  }
  
  return (
    <form>
      <div>
        <input type="text" placeholder="Search text..." value={props.filterText} onChange={handleFilterTextChange} />
      </div>
      <div>
        <input type="checkbox" checked={props.inStockOnly} onChange={handleInStockChange} />Only show products in stock
      </div>
    </form>
  )
}

export default function FilterableProductTable() {
  const [ filterText, setFilterText ] = useState('')
  const [ inStockOnly, setInStockOnly ] = useState(false)

  function onFilterTextChange(text: string) {
    setFilterText(text)
    console.log(`change text: ${filterText}`)
  }

  function onInstockedOnlyChange(bool: boolean) {
    setInStockOnly(bool)
    console.log(`change inStock: ${inStockOnly}`)

  }
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={onFilterTextChange}
        setInStockOnly={onInstockedOnlyChange}
      />
      <ProductTable />
    </div>
  )
}

import React from 'react'

interface ProductRow {
  category: string,
  price: string,
  stocked: boolean,
  name: string
}

function ProductRow(props: ProductRow) {
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
  category: string
}

function ProductCatagoryRow(props: CategoryName) {
  return (
    <td colSpan={2}>
      {props.category}
    </td>
  )
}

interface CategoryRows {
  products: ProductRow[]
}

function ProductTable(props: CategoryRows) {
  return 
}

function SearchBar() {
  return <input></input>
}

export default function FilterableProductTable() {
  const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ]
  return (
    <div></div>
  )
}

import React from 'react'

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
    <td colSpan={2}>
      {props.name}
    </td>
  )
}

function ProductTable(props: any) {
  const products = props
  const row: JSX.Element[] = []
  let lastCategory = ""
  products.map((product: { category: string; name: string; price: string; stocked: boolean }) => {
    if(product.category !== lastCategory) {
      row.push(<ProductCatagoryRow name={product.category} />)
      lastCategory = product.category
    }
    row.push(
      <ProductRow
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
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <tbody>
          {row}
        </tbody>
      </tbody>
    </table>
  )
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search text..."/>
      <input type="checkbox"/>
    </form>
  )
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
    <div>
      <ProductTable products={products} />
      <SearchBar />
    </div>
  )
}

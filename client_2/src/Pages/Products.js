import React,  { useEffect, useState} from "react";
import {useTable, useSortBy, useFilters} from "react-table" 
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";
// import axios from 'axios'

let dane1 = {id: 1, nazwa:"Jablko", ilosc: 1, cena: 2};
let dane2 = {id: 2, nazwa:"Gruszka", ilosc: 2, cena: 2};
let dane = [dane1, dane2]


function TextFilter({
    column: { filterValue, preFilteredRows, setFilter },
   }) {
    const count = preFilteredRows.length
   
    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
        placeholder={`Search ${count} records...`}
      />
    )
   }

function Products(){


    const [error,setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])


    useEffect(()=>{
        fetch("http://localhost:3001/produkt/getAll")
        .then(res => res.json())
        .then((result)=>{

            setIsLoaded(true);
            console.log(result)
            setItems(result);
            console.log(isLoaded)


        }, (error)=>{
            setIsLoaded(true);
            setError(error);
        })
    },[]
)

    const data = React.useMemo(() =>
    
    dane,
    []
   )
  
   const columns = React.useMemo(
    () => 
    
    [{
    Header: 'id',
    accessor: 'id',
    },
    {
        Header: 'nazwa',
        accessor: 'nazwa',
    },    
    {
        Header: 'ilosc',
        accessor: 'ilosc',
    },
    {
        Header: 'cena',
        accessor: 'cena',
    },
],
    []
   )

   const defaultColumn = React.useMemo(
    () => ({
      Filter: TextFilter,
    }),
    []
   )

   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data ,defaultColumn,}, useFilters,useSortBy,)

        if(error)
        {
            return <div>Error: {error.message}</div>
        }    
        else if(!isLoaded){
            return <div>Loading: ...</div>
        }
        else if(isLoaded)
        {
            console.log("@"+items)
            return(
                    <div className="produktyRamka">
                        <div className="nazwaRamka">
                            <div className="tekstNazwaRamka" >Zarządzanie produktami</div>
                            <div className="margines">
                                <table className="tabela">
                                    <tr>
                                        <td>
                                            <div>
                                                <Link to="/addproducts" className="przycisk"> Dodaj </Link>
                                                <Link to="/modifyproduct" className="przycisk"> Modyfikuj </Link>
                                                <Link to="/deleteproduct" className="przycisk"> Usuń </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="nazwaRamka">
                                                <div className="tekstNazwaRamka">Wyszukiwanie</div>
                                                <div className="margines">
                                                    <table className="tabela">
                                                        <tbody>
                                                            <tr> 
                                                                <td><input className="poleDoWpisywania" type="text" name="search"/></td> <td><button className="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>   
                                            </div>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
                                        </td>
                                        <td>
                                            <br></br>
                                            <div className="nazwaRamka">
                                                <div className="tekstNazwaRamka">Elementy</div>
                                                <div className="margines">
                                                    
                                                <table  {...getTableProps()}>
                                                    <thead>
                                                        {headerGroups.map(headerGroup => (
                                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                                            {headerGroup.headers.map(column => (
                                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} style = {{/* #DAWID TUTAJ PIERDOLNIJ FORMATKĘ */ color: "#ffffff", }}>{column.render('Header')}
                                                            {/* <span>
                                                                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                                            </span> */}
                                                            <div>{column.canFilter ? column.render('Filter') : null}</div>
                                                            </th>
                                                            
                                                            ))}
                                                        </tr>
                                                        ))}
                                                        </thead>
                                                        <tbody {...getTableBodyProps()}>
                                                            {rows.map(row => {
                                                            prepareRow(row)
                                                            return (
                                                                <tr {...row.getRowProps()}>
                                                                {row.cells.map(cell => {
                                                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                                })}
                                                                </tr>
                                                            )
                                                            })}
                                                            </tbody>
                                                    </table>
                                                </div>   
                                            </div>                             
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            
                                            <Link to="/" className="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link>
                                        </td>
                                    </tr>
                                </table>
                                
                            </div>
                        </div>
                    </div>
           )
        }
}






export default Products;
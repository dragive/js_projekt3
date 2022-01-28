import React,  { useEffect, useState} from "react";
import {useTable, useSortBy, useFilters} from "react-table" 
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";
import ProduktService from "../ProduktService"
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

function editElement(id){
    console.log(id)
    //todo
}
function deleteElement(id){
    console.log("ID:")
    console.log(id)
    fetch("http://localhost:3001/produkt/delete", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id:id }),
        // mode: 'no-cors'
    }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            //todo dodanie odswierzenia strony
        })
        .catch((err) => console.log(err))

}

function Products(){


    const [error,setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])


    useEffect(()=>{
        fetch("http://localhost:3001/produkt/getAll")
        .then(res => res.json())
        .then((result)=>{
            console.log("result")
            console.log(result)
            setItems(result.data);


            console.log("is loaded")
            setIsLoaded(true);
            console.log(isLoaded)


        }, (error)=>{
            setIsLoaded(true);
            setError(error);
        })
    },[]
)

    console.log("123123123")
    console.log(items)

    const data = React.useMemo(() =>
    
    items ,
    [items]
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
    {
        Header: 'akcje',
        accessor: 'actions',
        disableSortBy: true,
        Cell: (props) =>{
            const rowId = props.row.id
            const id = props.row.values.id
            return (
                <div>
                    <span onClick={()=>{editElement()}}>
                        <p className="action">EDIT</p>

                    </span>

                    <span onClick={()=>{deleteElement(id)}}>
                            <p className="action">USUN</p>

                        </span>
                </div>
            )
        }
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

   console.log("useTable")

   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data ,defaultColumn,},useSortBy,)
//useFilters
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
                                           ....
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
                                                            <span>
                                                                {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                                            </span>
                                                            {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
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
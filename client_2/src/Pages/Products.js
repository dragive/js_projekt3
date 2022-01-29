import React, { useEffect, useState } from "react";
import { useTable, useSortBy, useFilters } from "react-table"
import './Components.css';
import { BrowserRouter as useNavigate, Link} from "react-router-dom";


//do usuniecia
// let dane1 = { id: 1, nazwa: "Jablko", ilosc: 1, cena: 2 };
// let dane2 = { id: 2, nazwa: "Gruszka", ilosc: 2, cena: 2 };
// let dane = [dane1, dane2]

// function TextFilter({
//     column: { filterValue, preFilteredRows, setFilter },
//     }) {
//         const count = preFilteredRows.length

//         return (
//             <input
//                 value={filterValue || ''}
//                 onChange={e => {
//                         setFilter(e.target.value || undefined)
//                     }}
//                 placeholder={`Search ${count} records...`}
//             />
//         )
// }

function editElement(id) {
    console.log(id)
    //todo
}


const UpdateValue = (value)=>{

    fetch("http://localhost:3001/produkt/update", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))

}

// Create an editable cell renderer
const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateMyData(index, id, value)
    }
  
    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
    console.log(id)
    if(id == "id"){
        return  <input value={value} disabled/>
    }
    
    return <input value={value} onChange={onChange} onBlur={onBlur} />
  }
  
  // Set our editable cell renderer as the default Cell renderer
  const defaultColumn = {
    Cell: EditableCell,
  }


function Table({ columns, data, updateMyData, skipPageReset }){


    // const defaultColumn = React.useMemo(
    //     () => ({
    //         Filter: TextFilter,
    //     }),
    //     []
    // )

    console.log("useTable")

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        getSortByToggleProps,
    } = useTable({ columns, data, defaultColumn, updateMyData, },useSortBy)
    console.log( {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    })
    return (
            <table className="tabela"  {...getTableProps()}>
            <thead >
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{color: "#000000", margin: "15px" }}>{column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                </span>
                                
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
    )
}

function Products() {


    
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])


  const [skipPageReset, setSkipPageReset] = React.useState(false)

    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
        setItems(old =>
          old.map((row, index) => {
            if (index === rowIndex) {


                let ret = {
                    ...old[rowIndex],
                    [columnId]: value,
                  }
                

                UpdateValue(ret)
                
              return ret
            }
            return row
          })
        )
      }


    useEffect(() => {
        fetch("http://localhost:3001/produkt/getAll")
            .then(res => res.json())
            .then((result) => {
                console.log("result")
                console.log(result)
                setItems(result.data);


                console.log("is loaded")
                setIsLoaded(true);
                console.log(isLoaded)


            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, []
    )



    function DeleteElement(id) {
        const navigate = useNavigate()
        console.log("ID:")
        console.log(id)
        fetch("http://localhost:3001/produkt/delete", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id }),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                navigate("/produkt")
            })
            .catch((err) => console.log(err))
    
    }
    
    
    const data = React.useMemo(() =>
        items,
        [items]
    )

    const columns = React.useMemo(
        () =>

            [{
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Nazwa',
                accessor: 'nazwa',
            },
            {
                Header: 'Ilosc',
                accessor: 'ilosc',
            },
            {
                Header: 'Cena',
                accessor: 'cena',
            },
            {
                Header: 'Akcje',
                accessor: 'actions',
                disableSortBy: true,
                Cell: (props) => {
                    const rowId = props.row.id
                    const id = props.row.values.id
                    return (
                        <div>
                            <span onClick={() => { editElement() }}>
                                <p className="przyciskFunkcyjny">Edytuj</p>

                            </span>

                            <span onClick={() => { DeleteElement(id) }}>
                                <p className="przyciskFunkcyjny">Usuń</p>

                            </span>
                        </div>
                    )
                }
            },
            ],
        []
    )

    useEffect(() => {
        setSkipPageReset(false)
      }, [data])

    //useFilters
    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>Loading: ...</div>
    }
    else if (isLoaded) {
        console.log("@" + items)
        return (
            <div className="produktyRamka">
                <div className="nazwaRamka">
                    <div className="tekstNazwaRamka" >Zarządzanie produktami</div>
                    <div className="margines">
                        <table className="tabela">
                            <tr>
                                <td>
                                    <div>
                                        <Link to="/addproducts" className="przyciskFunkcyjny"> Dodaj produkt </Link>
                                        {/* <Link to="/modifyproduct" className="przycisk"> Modyfikuj </Link>
                                        <Link to="/deleteproduct" className="przycisk"> Usuń </Link> */}
                                    </div>
                                </td>
                                <td>
                                    <div className="nazwaRamka">
                                        <div className="tekstNazwaRamka">Wyszukiwanie</div>
                                        <div className="margines">
                                            <table className="tabela">
                                                <tbody>
                                                    <tr>
                                                        <td><input className="poleDoWpisywania" type="text" name="search" /></td> <td><button className="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </table>
                            <table className="tabela">
                            <tr>
                                <td>
                                    <br></br>
                                    <div className="nazwaRamka">
                                        <div className="tekstNazwaRamka">Elementy</div>
                                        <div className="margines">
                                        <Table 
                                        columns={columns}
                                        data={data}
                                        updateMyData={updateMyData}
                                        skipPageReset={skipPageReset}
                                        />
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
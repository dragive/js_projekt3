import React, { useEffect, useState } from "react";
import { useTable, useSortBy, useFilters } from "react-table"
import './Components.css';
import { BrowserRouter as useNavigate, Link } from "react-router-dom";

import { getCurrentDate } from "../Services/CommonServices"



const textfield = {
    backgroundColor: "#CCCCCC",
    padding: "3px",
};
const textfieldid = {
    backgroundColor: "#CCCCCC",
    padding: "3px",
    width: "25px",
    textAlign: "center",

};
const textfieldid2 = {
    backgroundColor: "#CCCCCC",
    padding: "3px",
    width: "75px",
    textAlign: "center",

};
const naglowek = {
    color: "#000000",
    margin: "15px",
    textAlign: "left",
};



const UpdateValue = (value) => {

    fetch("http://localhost:3001/zamowienie/update", {
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
        let temp = e.target.value

        setValue(temp)
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
    if (id == "id") {
        return <input style={textfieldid} value={value} disabled />
    }
    if (id == "klient_id") {
        return <input style={textfieldid2} value={value} disabled />
    }

    return <input style={textfield} value={value} onChange={onChange} onBlur={onBlur} />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell,
}


function Table({ columns, data, updateMyData, skipPageReset }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        getSortByToggleProps,
    } = useTable({ columns, data, defaultColumn, updateMyData, }, useSortBy)
    
    return (
        <table className="tabela"  {...getTableProps()}>
            <thead >
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} style={naglowek}>{column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
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

function Orders() {



    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [reload, setReload] = useState(false)



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


                    UpdateValue({
                        id: ret.id,
                        dataZalozenia: ret.data_zalozenia,
                        // pracownikId: ret.pracownik_id,
                        klientId: ret.klient_id,
                        dataRealizacji: ret.data_realizacji,
                        stan: ret.stan
                    })

                    return ret
                }
                return row
            })
        )
    }

    function getItemsFromAPI() {
        fetch("http://localhost:3001/zamowienie/getAll")
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
    }

    useEffect(() => {
        getItemsFromAPI()
    }, []
    )



    function deleteElement(id) {

        console.log("ID:")
        console.log(id)
        fetch("http://localhost:3001/zamowienie/delete", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id }),
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {

                setItems(old => {
                    return old.filter(o => { return o.id != id })
                })

                console.log("items")
                console.log(items)

            })
            .catch((err) => console.log(err))

    }


    const data = React.useMemo(() =>
        items,
        [items]
    )


    // const [label,setLabel] = useState("")

    function changeSelect(o, row) {
        row.values.stan = o.target.value
        console.log("row.values")
        console.log(row.values)
        console.log("row.values.stan ")
        let r = row.values
        console.log(r.stan)
        if (r.stan == "Zakończono") {


            UpdateValue({
                id: row.values.id,
                dataZalozenia: row.values.data_zalozenia,
                // pracownikId: row.values.pracownik_id,
                klientId: row.values.klient_id,
                dataRealizacji: ((row.values.data_realizacji == '' || row.values.data_realizacji == undefined) ? getCurrentDate() : row.values.data_realizacji),
                stan: row.values.stan
            })
            getItemsFromAPI()

        }
        else {

            UpdateValue({
                id: row.values.id,
                dataZalozenia: row.values.data_zalozenia,
                // pracownikId: row.values.pracownik_id,
                klientId: row.values.klient_id,
                dataRealizacji: row.values.data_realizacji,
                stan: row.values.stan
            })

            getItemsFromAPI()
        }

    }

    function changeSelectClient(o, row) {
        console.log("o.target.value")
        console.log(o.target.value)
        // row.values.klient_id = o.target.value

        UpdateValue({
            id: row.values.id,
            dataZalozenia: row.values.data_zalozenia,
            // pracownikId: row.values.pracownik_id,
            klientId: o.target.value,
            dataRealizacji: row.values.data_realizacji,
            stan: row.values.stan
        })
        //mozliwe problemy
        getItemsFromAPI()
    
    }

    const [klienci, setKlienci] = useState([])

    useEffect(getKlientsData, [items])

    function getKlientsData() {
        fetch("http://localhost:3001/klient/getAll", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            // mode: 'no-cors'
        }).then((res) => res.json())
            .then((data) => {

                setKlienci(data.data)


                console.log("klienci")
                console.log(klienci)

            })
            .catch((err) => console.log(err))
    }

    function getKlientById(id) {
        for (let i = 0; i < klienci.length; i++) {
            if (klienci[i].id == id) {
                return klienci[i]
            }
        }
    }

    const columns = React.useMemo(
        () =>

            [{
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'Data złożenia',
                accessor: 'data_zalozenia',
            },
            // {
            //     Header: 'Id pracownika',
            //     accessor: 'pracownik_id',
            // },
            {
                Header: 'Id klienta',
                accessor: 'klient_id',
            },
            {
                Header: 'Dane Klienta',
                Cell: (props) => {

                    let kk = getKlientById(props.row.values.klient_id)
                    let arr = []
                    for (let i = 0; i < klienci.length; i++) {
                        let element = klienci[i]
                        arr.push((<option value={element.id}>{element.nazwa_firmy} {element.nip}</option>))

                    }
                    console.log("klienci1")
                    console.log(klienci)
                    if (kk == undefined) {
                        return (<div >
                            <select style={textfield} onChange={(e) => { changeSelectClient(e, props.row) }}>

                                <option value="---" disabled>---</option>

                                {arr}
                            </select>
                        </div>)
                    }
                    return (
                        <div >
                            <select style={textfield} onChange={(e) => { changeSelectClient(e, props.row) }}>

                                <option value={props.row.values.klient_id}>{kk.nazwa_firmy} {kk.nip}</option>

                                <option value="---" disabled>---</option>

                                {arr}
                            </select>
                        </div>
                    )
                }
            },
            {
                Header: 'Data realizacji',
                accessor: 'data_realizacji',
            },
            {
                Header: 'Stan',
                accessor: 'stan',
                disableSortBy: true,
                Cell: (props) => {
                    const colorRef = React.useRef();
                    return (
                        <div >
                            {/*  value={props.row.values.stan} */}
                            <select style={textfield} ref={colorRef} onChange={(e) => { changeSelect(e, props.row) }}>

                                <option value={props.row.values.stan}>{props.row.values.stan}</option>

                                <option value="---" disabled>---</option>

                                <option value='Zaakceptowano'>Zaakceptowano</option>
                                <option value='W trakcie'>W trakcie</option>
                                <option value='Zakończono'>Zakończono</option>
                                <option value='Anulowano'>Anulowano</option>
                            </select>
                        </div>
                    )
                }
            },
            {
                Header: 'Akcje',
                accessor: 'actions',
                disableSortBy: true,
                Cell: (props) => {
                    const rowId = props.row.id
                    const id = props.row.values.id
                    console.log("Cell: (props)")
                    console.log(id)
                    return (
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <span onClick={() => { deleteElement(id) }}>
                                            <p className="przyciskFunkcyjny">Usuń</p>
                                        </span>
                                    </td>
                                    <td>|</td>
                                    <td>
                                        <Link to="/orderproducts" className="przyciskFunkcyjny"> Przedmioty </Link>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    )
                }
            },
            ],
        [klienci]
    )

    useEffect(() => {
        setSkipPageReset(false)
    }, [data])

    //useFilters
    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
        return (
            <div class="menuRamka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Error 404</div>
                    <div class="margines">
                        <div>Loading: ...</div>
                    </div>
                </div>
            </div>
        );
    }

    else if (isLoaded) {
        console.log("@" + items)
        return (
            <div className="zamowienieRamka">
                <div className="nazwaRamka">
                    <div className="tekstNazwaRamka" >Zarządzanie zamówieniami</div>
                    <div className="margines">
                        <table className="tabela">
                            <tr>
                                <td>
                                    <div>
                                        <Link to="/addorders" className="przyciskFunkcyjny"> Dodaj zamówienie </Link>
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
                                                        <td><input className="poleDoWpisywaniaZamowienia" type="text" name="search" /></td> <td><button className="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
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






export default Orders;
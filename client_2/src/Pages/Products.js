import React,  { useEffect, useState} from "react";
import {useTable} from "react-table" 
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";
// import axios from 'axios'

let dane1 = {id: 1, nazwa:"Jablko", ilosc: 1, cena: 2};
let dane2 = {id: 2, nazwa:"Gruszka", ilosc: 2, cena: 2};
let dane = [dane1, dane2]



// const getAllProducts = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/produkt/getAll`);
  
//       const todoItems =  response.data.data;

//       return todoItems;
//     } catch (errors) {
//       console.error(errors);
//     }
//   };


//   const tableBody = document.querySelector("#tabela > tbody");
//   console.log(tableBody)
//     dane.forEach((row)=>{
//         const tr = document.createElement("tr");
//           const td1 =  document.createElement("td");
//           td1.textContext = row.id;
//           tr.appendChild(td1);
//           const td2 =  document.createElement("td");
//           td2.textContext = row.nazwa;
//           tr.appendChild(td2);
//           const td3 =  document.createElement("td");
//           td3.textContext = row.ilosc;
//           tr.appendChild(td3);
//           const td4 =  document.createElement("td");
//           td4.textContext = row.cena;
//           tr.appendChild(td4);
//         console.log(row);
//        tableBody.appendChild(tr);
//     })

function editCell(i){
    console.log(i)
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


    // var columns= [{
    //             Header: 'Id',
    //             accessor: 'id',
    //           },
    //           {
    //             Header: 'Nazwa',
    //             accessor: 'nazwa',
    //           }]
    

    // const tableData = React.useMemo(()=>
    //     dane,[]
    // )
    // const columns = React.useMemo(
    //     () => [

    //         {
    //         Header: 'Id',
    //         accessor: 'id',
    //         },
    //         {
    //         Header: 'Nazwa',
    //         accessor: 'nazwa',
    //         }
    //     ],
    //     []
    //    )


    //    const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    //     } = useTable({ columns, tableData })
    


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
],
    []
   )

   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })

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

            // console.log(items)
            // // var rows = []
            // var data = items
            // console.log("data")
            // console.log(data.data)


            // data = data.data
            // for (let i = 0; i < data.length; i++) {
            //     const element = data[i];

            //     rows.push(
                    
            //         <tr onDoubleClick={()=>{editCell(i)}}>
                        
            //             <td class="{asd}">
            //                 {element.id}
            //             </td>
            //             <td>
            //                 {element.nazwa}
            //             </td>
            //             <td>
            //                 {element.ilosc}
            //             </td>
            //             <td>
            //                 {element.cena}
            //             </td>

            //             <td>
                            
            //             </td>
            //         </tr>
            //     )
                
            // }

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
                                                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
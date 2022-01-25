import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";
import axios from 'axios'

let dane1 = {id: 1, nazwa:"Jablko", ilosc: 1, cena: 2};
let dane2 = {id: 2, nazwa:"Gruszka", ilosc: 2, cena: 2};
let dane = [dane1, dane2]



const getTodoItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/produkt/getAll`);
  
      const todoItems =  response.data.data;
  
      //console.log(`GET: Here's the list of todos`, todoItems);
      //console.log(todoItems);
      return todoItems;
    } catch (errors) {
      console.error(errors);
    }
  };


  const tableBody = document.querySelector("#tabela > tbody");
  console.log(tableBody)
    dane.forEach((row)=>{
        const tr = document.createElement("tr");
          const td1 =  document.createElement("td");
          td1.textContext = row.id;
          tr.appendChild(td1);
          const td2 =  document.createElement("td");
          td2.textContext = row.nazwa;
          tr.appendChild(td2);
          const td3 =  document.createElement("td");
          td3.textContext = row.ilosc;
          tr.appendChild(td3);
          const td4 =  document.createElement("td");
          td4.textContext = row.cena;
          tr.appendChild(td4);
        console.log(row);
       tableBody.appendChild(tr);
    })


  

function Products(){
        //console.log(getTodoItems());
        //let dane = Promise.all(getTodoItems());
        // let dane = {};
        // getTodoItems().then((a) => {
        //     //console.log(a.data[1].nazwa);
        //     dane = a;
        // });
        // console.log(dane)
        //dane =  getTodoItems();
    
    
        // dane.forEach((row)=>{
        //     const tr = document.createElement("tr");

        //     const td1 =  document.createElement("td");
        //     td1.textContext = row.id;
        //     tr.appendChild(td1);
        //     const td2 =  document.createElement("td");
        //     td2.textContext = row.nazwa;
        //     tr.appendChild(td2);
        //     const td3 =  document.createElement("td");
        //     td3.textContext = row.ilosc;
        //     tr.appendChild(td3);
        //     const td4 =  document.createElement("td");
        //     td4.textContext = row.cena;
        //     tr.appendChild(td4);
        //     console.log(row);
        // })



        //console.log(dane);

            
        // const printData = async () => {
        //     await getTodoItems().then((a) => {
        //       console.log(a);
        //       return(a);
        //     });
        //   };

        // console.log(printData().resolve);





        return(
                <div class="produktyRamka">
                    <div class="nazwaRamka">
                        <div class="tekstNazwaRamka" >Zarządzanie produktami</div>
                        <div class="margines">
                            <table class="tabela">
                                <tr>
                                    <td>
                                        <div>
                                            <Link to="/addproducts" class="przycisk"> Dodaj </Link>
                                            <Link to="/modifyproduct" class="przycisk"> Modyfikuj </Link>
                                            <Link to="/deleteproduct" class="przycisk"> Usuń </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="nazwaRamka">
                                            <div class="tekstNazwaRamka">Wyszukiwanie</div>
                                            <div class="margines">
                                                <table class="tabela">
                                                <tr> 
                                                    <td><input class="poleDoWpisywania" type="text" name="search"/></td> <td><button class="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
                                                </tr>
                                                </table>
                                            </div>   
                                        </div>
                                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        <br></br>
                                        <div class="nazwaRamka">
                                            <div class="tekstNazwaRamka">Elementy</div>
                                            <div class="margines">
                                                <table id="tabela" class="tabela">
                                                <tr> 
                                                    <td>ID</td> <td>Nazwa</td> <td>Ilość</td> <td>Cena</td>
                                                </tr>
                                                <tbody></tbody>
                                                </table>
                                                <table>
                                                <tr> 
                                                    <td><button class="przyciskStrzalka"> &lt; </button> </td> <td><button class="przyciskStrzalka"> &gt; </button> </td>
                                                </tr>
                                                </table>
                                                 
                                            </div>   
                                        </div>                             
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        
                                        <Link to="/" class="przyciskFunkcyjny"> &lt;Cofnij&gt; </Link>
                                    </td>
                                </tr>
                            </table>
                            
                        </div>
                    </div>
                </div>
        )
}




export default Products;
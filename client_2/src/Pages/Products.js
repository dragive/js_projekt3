import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";


document.getElementById('get-produkts').addEventListener('click', getAjax);
var jsonResponse
function getAjax(){
    console.log('aaa');
    const xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.onLoad = () => {
        if(xhr.status === 200){
            document.getElementById('response').textContent = xhr.responseText;            }
    }

    xhr.open('GET', 'http://localhost:3000/produkt/getAll', true);
    xhr.send();
    jsonResponse = JSON.parse(this.responseText);
    console.log(jsonResponse);
}



function Products(){

        return(
                <div class="produktyRamka">
                    <div class="nazwaRamka">
                        <div class="tekstNazwaRamka">Zarządzanie produktami</div>
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
                                                <table class="tabela">
                                                <tr> 
                                                    <td>ID</td> <td>Nazwa</td> <td>Ilość</td> <td>Cena</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
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
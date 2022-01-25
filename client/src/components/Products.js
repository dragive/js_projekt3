import React from "react";
import './Components.css';

let  searchValue;
class Products extends React.Component{

    //przechowywanie stanów
    state = {
        search: "Nic",
        click: "Nic"
    }

    handleSearchChange = (e) => {
        searchValue = this.refs.search.value;
        this.setState({
            search: searchValue
        })
        console.log(searchValue);
    }
    clickSearch = () => {
        this.setState({
            click: searchValue
        })
    }

    render(){
    //tu podpiąć imię i nazwisko użytkownika zalogowanego
    let name = "Jan Nowak";

        return(
                <div class="produktyRamka">
                    <div class="nazwaRamka">
                        <div class="tekstNazwaRamka">Zarządzanie produktami</div>
                        <div class="margines">
                            <table class="tabela">
                                <tr>
                                    <td>
                                        <p>
                                            <button class="przycisk">Dodaj</button>
                                            <button class="przycisk">Modyfikuj</button>
                                            <button class="przycisk">Usuń</button>
                                        </p>
                                        <td>
                                        <p>{this.state.search}</p> <p>{this.state.click}</p>
                                    </td>
                                    </td>
                                    
                                    <td>
                                        <div class="nazwaRamka">
                                            <div class="tekstNazwaRamka">Wyszukiwanie</div>
                                            <div class="margines">
                                                <table class="tabela">
                                                <tr> 
                                                    <td><input onChange={this.handleSearchChange} class="poleDoWpisywania" type="text" ref="search" name="search"/></td> <td><button onClick={this.clickSearch} class="przyciskFunkcyjny">&lt;Szukaj&gt;</button></td>
                                                </tr>
                                                </table>
                                            </div>   
                                        </div>
                                        <br></br>
                                        <div class="nazwaRamka">
                                            <div class="tekstNazwaRamka">Elementy</div>
                                            <div class="margines">
                                                <table class="tabela">
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
                                                <tr> 
                                                    <td>Coś w tabeli</td> <td>Coś w tabeli 2</td> <td>Coś w tabeli 3</td>
                                                </tr>
                                                </table>
                                            </div>   
                                        </div>                             
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button class="przyciskFunkcyjny">&lt;Cofnij&gt;</button> 
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
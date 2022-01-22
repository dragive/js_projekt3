import React from "react";
import './Components.css';
import Products from "./Products";

class Menu extends React.Component{


    clickLogOut = () => {
        console.log("aaaa");
        return (<Products />);
    }

    render(){
    //tu podpiąć imię i nazwisko użytkownika zalogowanego
    let name = "Jan Nowak";
        return(
            <div class="mainRamka">
                <div class="nazwaRamka">
                    <div class="tekstNazwaRamka">Menu</div>
                    <div class="margines">
                        <table class="tabela">
                            <tr>
                                <td>Zalogowano jako:</td> <td> &nbsp;&nbsp; {name}</td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr> 
                                <td><button class="przycisk">Produkty</button> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><button class="przycisk">Klienci</button> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><button class="przycisk">Pracownicy</button> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><button class="przycisk">Zamówienia</button> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><button class="przycisk">O nas</button> </td> <td></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr> 
                                <td></td><td><button onClick="return (<Products />)" class="przyciskFunkcyjny">&lt;Wyloguj&gt;</button> </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
import React from "react";
import './Components.css';
import { BrowserRouter as useNavigate, Link  } from "react-router-dom";
var xh = undefined
function Home(){


    // var jsonResponse
    // function getAjax(){
    //     console.log('aaa');
    //     const xhr = new XMLHttpRequest();
    //     console.log(xhr)
        
    //     xhr.open('GET', 'http://localhost:3001/produkt/getAll');
        
    //     xhr.onLoad = (ob,a,b,c,d,e,s) => {
            
    //         console.log(xhr)
    //         console.log(ob)
    //         console.log(a)
    //         console.log(b)
    //         console.log(c)
    //         console.log(d)
    //         console.log(e)
    //         if(ob.status === 200){
    //             document.getElementById('response').textContent = ob.responseText; 
    //         }
    //         console.log(ob.responseText)
    //     }
    //     var result =  xhr.send()
    //     console.log("result: "+result)



    // }


    
    let name = "Jan Nowak";
        return(
            <div class="menuRamka">
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
                                <td><Link to="/products" class="przycisk" id="get-produkts"> Produkty </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/clients" class="przycisk"> Klienci </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/orders" class="przycisk"> Zamówienia </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/category" class="przycisk"> Kategorie </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/supplys" class="przycisk"> Dostawy </Link> </td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/employees" class="przycisk"> Pracownicy </Link></td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/position" class="przycisk"> Stanowiska </Link></td> <td></td>
                            </tr>
                            <tr> 
                                <td><Link to="/about" class="przycisk"> O nas </Link> </td> <td></td>
                            </tr>
                            <tr>
                                <br></br>
                            </tr>
                            <tr> 
                                <td></td><td><button  class="przyciskFunkcyjny">&lt;Wyloguj&gt;</button> </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
}

export default Home;
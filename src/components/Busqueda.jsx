import React, {useState} from 'react'
import "./estilosbusqueda.css"

function Busqueda() {

const [comida, setComida]= useState("");
const [resultado, setResultado]=useState([]);

const getcomida = async()=> {

try {
     const respuesta = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${comida}`)
    const data = await respuesta.json();

if (data.meals){
setResultado(data.meals);
} else {
    setResultado([]);
}
    
} catch (error) {
    console.log("Error al buscar la comida", error);
};
}
  return (
    <div>
      
<input
value={comida}
placeholder='Ingrese el nombre de su comida...'
onChange={(e)=>setComida(e.target.value)} //aqui estoy actualizando la comida a lo que cliente escribio
></input>

<h3>Su comida es: {comida}</h3>
<button onClick={getcomida}>Buscar</button>

<div>

{resultado.length>0 ? ( //<--aqui voy a mostrar los resultados mapenadolos->

<ul>
{resultado.map((meal) =>(


<li key={meal.idMeal}>
<h3>{meal.strMeal}</h3>
<img src={meal.strMealThumb} alt={meal.strMeal} width="100" />



</li>


))}




</ul>

) : (

<p>No se encontraron comidas</p>

) }



</div>



    </div>






  )
}

export default Busqueda

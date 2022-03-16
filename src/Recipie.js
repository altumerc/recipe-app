import React from "react";
import style from "./recipie.module.css";
function Recipie ({title,calories,image,ingredients}){ 
    return(
        <div className={style.recipie}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <ul>{ingredient.text}</ul>
                ))}
            </ol>
            <p>{calories}cals</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}


export default Recipie;
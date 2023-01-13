import React, { useEffect, useState } from "react"
import TabsExample from "../filterColum/TabsExample";
import Cards from '../cards/Cards';
import products from '../../../../data/data.json'
import './style.css'
import { useParams } from "react-router-dom";

function ItemListContainer (props){
    const [items, setItems] = useState([]);

    
    const {categoryName} = useParams() 

    useEffect(()=>{
        const traerProductos = ()=>{
            return new Promise((res,rej)=>{

                const productsFiltrados = products.filter((prod) => prod.categoria === categoryName)

                const prodFilter = categoryName ? productsFiltrados : products

                setTimeout(()=>{
                    res(prodFilter)
                },500)
            })
        }
        traerProductos()
            .then((res)=>{
                setItems(res)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[categoryName])

    return(
        <main>
            <h1 style={{textAlign:"center"}}>{props.palabra}</h1>
            <section>
                <div className="conteiner-filter">
                    <TabsExample />
                </div>
                <div className='conteiner__cards'>
                    <Cards items={items}/>
                </div>
            </section>
            
            
        </main>            
    

    )

}

export default ItemListContainer
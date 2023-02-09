import React, { useEffect, useState } from "react"
import TabsExample from "../filterColum/TabsExample";
import Cards from '../cards/Cards';
import './style.css'
import { useParams } from "react-router-dom";
import {productsCollection} from '../../../../firebaseConfig';
import { getDocs, query,where } from "firebase/firestore";
import { toast } from "react-toastify";

function ItemListContainer (props){
    const [items, setItems] = useState([]);
    const [cargando,setCargando]= useState(true)

    
    const {categoryName} = useParams()

    useEffect(()=>{
        const traerProductos = ()=>{

            
            
            if(categoryName){
                const filtro = query(productsCollection,where("categoria","==",categoryName))
                getDocs(filtro)
                .then((resultado)=>{
                        const productos = resultado.docs.map((doc)=>{
                        return {...doc.data(),id:doc.id}
                    })
                    setItems(productos)
                    setCargando(false)
                })
                .catch((error)=>{
                    toast.error("A ocurrido un error, vuelva a intentarlo")
                })
            }else{
                getDocs(productsCollection)
                    .then((resultado)=>{
                        const productos = resultado.docs.map((doc)=>{
                        return {...doc.data(),id:doc.id}
                    })
                    setItems(productos)
                    setCargando(false)
                    })
                    .catch((error)=>{
                        toast.error("A ocurrido un error, vuelva a intentarlo")
                    })
            }
            
            
        }
        
        traerProductos()
    },[categoryName])

    return (    
        <main>
            <h1 style={{textAlign:"center"}}>{props.palabra}</h1>
            <section>
                <div className="conteiner-filter">
                    <TabsExample />
                </div>
                <div className='conteiner__cards'>
                    {cargando ? <h3>cargando...</h3>  : <Cards items={items}/>}
                </div>
            </section>
            
            
        </main>            
    )
    

}

export default ItemListContainer
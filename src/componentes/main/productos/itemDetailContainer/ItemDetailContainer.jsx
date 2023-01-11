import React, {useState, useEffect} from "react"
import products from './../../../../data/data.json'
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer (){
    const [item, setItem] = useState([]);

    const {id} = useParams()
    console.log(id);


    useEffect(()=>{
        const traerProductos = ()=>{
            return new Promise((res,rej)=>{

                const productoEncontrado = products.find((prod)=> prod.id === id)
                setTimeout(()=>{
                    res(productoEncontrado)
                },50)
            })
        }
        traerProductos()
            .then((res)=>{
                setItem(res)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[id])


    return(
        <div>
            <ItemDetail item={item}/>
        </div>

    )
}
export default ItemDetailContainer
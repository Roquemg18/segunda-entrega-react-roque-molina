import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { productsCollection } from "../../../../firebaseConfig";
import { toast } from "react-toastify";

function ItemDetailContainer (){
    const [item, setItem] = useState([]);
    const [cargando,setCargando]= useState(true)

    const {id} = useParams()


    useEffect(()=>{
        const traerProductos = ()=>{
            const referenciaDoc = doc(productsCollection,id)
            const pedido = getDoc(referenciaDoc)

            pedido
            .then((resultado)=>{
                const producto = resultado.data()
                setItem(producto)
                setCargando(false)

            })
            .catch((error)=>{
                toast.error("A ocurrido un error, vuelva a intentarlo")
            })
        }
        traerProductos()
    },[id])


    return(
        <div className="container-Detail">
            {cargando ? <h3>cargando...</h3>  :<ItemDetail item={item}/>}
        </div>

    )
}
export default ItemDetailContainer
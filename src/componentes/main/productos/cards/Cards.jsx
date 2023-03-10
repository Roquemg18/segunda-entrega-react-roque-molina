import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './style.css'

function Cards({items}) {

return (
    <div className="conteiner__cards">
        {items.map(function (item){
            return(
    <Card key={item.id}  className="conainer-card">
        
        <Card.Img variant="top" src={item.logo} className="card-img"/>
        <Card.Body className="container-info-card">
            <Card.Title >{item.nombre } </Card.Title> 
            <Card.Title >{"$" + item.precio}</Card.Title>
            <Link className="verMasButton" to={`/detail/${item.id}`}>Ver mas</Link>

        </Card.Body>
    </Card>
 )
        })}
    </div>
)
    }
    


export default Cards;

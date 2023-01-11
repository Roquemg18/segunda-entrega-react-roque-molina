
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";



function Cards({items}) {

return (
    <>
        {items.map(function (item){
            return(
    <Card key={item.id} style={{ width: "250px" } }>
        
        <Card.Img variant="top" src={item.logo} />
        <Card.Body>
            <Card.Title>{item.nombre } </Card.Title> 
            <Card.Title>{"$" + item.precio}</Card.Title>
            <Card.Text>{item.categoria }
            </Card.Text>
            <Link className="verMasButton" to={`/detail/${item.id}`}>Ver mas</Link>
        </Card.Body>
    </Card>
 )
        })}
    </>
)
    }
    


export default Cards;

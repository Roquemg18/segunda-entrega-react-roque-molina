import { Link } from 'react-router-dom';
import './filter.css'


function TabsExample() {
  return (
    <div>
      <ul className='container-category'>
        <li className='Categorias'>
          <Link to="/productos" className='link-category'>Categorias</Link>
        </li>
        <li>
          <Link to="/productos/globos" className='link-category'>Globos</Link>
        </li>
        <li>
          <Link to="/productos/velas" className='link-category'>Velas</Link>
        </li>
        <li>
          <Link to="/productos/disfraces" className='link-category'>Disfraces</Link>
        </li>
        <li>
          <Link to="/productos/reposteria" className='link-category'>Reposteria</Link>
        </li>
        <li>
          <Link to="/productos/adornos" className='link-category'>Adornos de torta</Link>
        </li>
        <li>
          <Link to="/productos/carioca" className='link-category'>Carioca</Link>
        </li>
        
      </ul>
    </div>
  );
}


export default TabsExample;
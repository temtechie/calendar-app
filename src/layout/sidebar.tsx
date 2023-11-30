import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar({ routes, isOpen }: any) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        {routes.map((route: any) => (
          <li key={route.path}>
            <Link to={`/${route.path}`}>{route.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

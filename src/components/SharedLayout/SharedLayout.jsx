import { Outlet } from 'react-router-dom';
import { Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </div>
  );
};

// поменять див на контейнер

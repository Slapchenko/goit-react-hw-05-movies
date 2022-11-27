import { Outlet } from 'react-router-dom';
import { Header, Link, Container, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};

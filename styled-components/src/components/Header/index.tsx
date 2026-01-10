import React from 'react'
import { Button } from '../Button';
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, Wrapper, UserPicture, ImgLogo} from './styles';
import logo from '../../assets/logo-dio.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header =() => {

      const { user, handleSignOut } = useAuth();

  return (
    <Wrapper>
      <Container> 
        <Row>
          <Link to="/">
            <ImgLogo src={logo} alt="Logo da DIO" />
          </Link>
            {user.id ? (
              <>
              <BuscarInputContainer>
              <Input placeholder='Buscar...'/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global </Menu>
              </>
            ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
            <UserPicture src='https://avatars.githubusercontent.com/u/82729028?v=4' />
            <a href="/login" onClick={handleSignOut}>Sair</a>
            </>
          ) : (
            <>
            <MenuRight href='#'>Home</MenuRight>
            <Button title="Entrar"/>
            <Button title="Cadastrar"/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header };
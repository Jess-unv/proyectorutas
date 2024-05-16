import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  
  const redirectToOriginalPage = () => {
    const originalPage = state?.from ? state.from : '/dashboard';
    navigate(originalPage);
  };

  return (
    <>
      <header>
        <h1>
          <Link to='/'>Logo</Link>
        </h1>
        {state?.logged ? (
          <div className='user'>
            <span className='username'>{state?.name}</span>
            <button className='btn-logout' onClick={onLogout}>
              Cerrar sesión
            </button>
            <nav>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/profile'>Perfil</Link>
              <Link to='/settings'>Configuración</Link>
              <Link to='/reports'>Mensajes</Link>
            </nav>
          </div>
        ) : (
          <nav>
            <Link to={{ pathname: '/login', state: { from: useLocation().pathname } }}>
              Iniciar sesión
            </Link>
            <Link to='/register'>Registrarse</Link>
            <Link to='/about'>Sobre nosotros</Link>
            <Link to='/contact'>Contacto</Link>
            <Link to='/services'>Servicios</Link>
          </nav>
        )}
      </header>
      <Outlet />
    </>
  );
};

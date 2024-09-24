import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <Container>
        {/* 네비게이션 버튼 */}
        <Nav>
          <NavLink to="/login">로그인</NavLink>
          <NavLink to="/signup">회원가입</NavLink>
        </Nav>

        {/* 페이지 라우팅 */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Nav = styled.nav`
  margin-bottom: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #bf94e4;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #d3d3d3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
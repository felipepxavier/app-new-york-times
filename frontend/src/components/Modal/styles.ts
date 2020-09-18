import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .container-btn {
    display: flex;
    justify-content: flex-end;
  }

  .modal {
    background: white;
    width: 1000px;
    max-width: 100%;
    max-height: 100%;
    padding: 20px;
    margin: 0 25px;
    border-radius: 10px;
    position: relative;
    animation: modal 0.3s forwards;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fechar {
    width: 40px;
    font-size: 32px;
    color: #ced1d9;
    cursor: pointer;
    transition: 250ms;
    float: right;
    top: 0;
    right: 0;

    &:hover {
      color: #ababad;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 16px;
    color: #9e9e9e;
    font-weight: 900;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    padding-left: 20px;
  }

  svg {
    width: 30px;
    font-size: 35px;
    color: #c1c1be;
    cursor: pointer;

    &:hover {
      color: #90908f;
    }
  }
`;

export const By = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;

  time {
    font-size: 14px;
  }

  span {
    color: #969690;
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
  }
`;

export const Content = styled.article`
  width: 100%;
  padding: 10px 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.6em;
    color: #3a3a3a;
  }

  p {
    color: #333;
    font-size: 1.3em;
    margin-bottom: 4px;
    line-height: 1.5em;

    border-top: 1px solid #333;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const BtnLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  color: #ffffff;
  padding: 5px 10px;
  background-color: #ffc107;
  transition: 250ms;
  text-transform: uppercase;

  &:hover {
    background-color: #fddd7c;
  }
`;

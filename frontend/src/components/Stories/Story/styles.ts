import styled from 'styled-components';

const colorSections = {
  arts: '#68d897',
  automobiles: '#FC3348',
  books: '#6987E3',
  business: '#707070',
  food: '#9900CC',
  health: '#E7B309',
  home: '#FF8036',
  magazine: '#B68682',
  movies: '#B68682',
  nyregion: '#B68682',
  obituaries: '#B68682',
  opinion: '#B68682',
  politics: '#B68682',
  realestate: '#B68682',
  science: '#2196f3',
  sports: '#B68682',
  sundayreview: '#B68682',
  technology: '#00d4a3',
  't-magazine': '#B68682',
  travel: '#B68682',
  upshot: '#B68682',
  style: '#ff9800',
  insider: '#673ab7',
  briefing: '#ffc107',
  climate: '#e0574d',
  us: '#00bcd4',
  world: '#B68682',
};

interface TagProps {
  section: keyof typeof colorSections;
}

export const Container = styled.a`
  height: 90%;

  cursor: pointer;
  background: #fff;
  border-radius: 5px;
  margin-right: 50px;
  padding: 15px;
  text-decoration: none;
  border: 2px solid transparent;
  transition: 250ms;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateX(10px);
    background-color: #ffffd4;
    border-color: #ff9800;
  }

  strong {
    font-size: 20px;
    color: #3a3a3a;
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: #969690;
  }

  @media (max-width: 600px) {
    strong {
      font-size: 18px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Tag = styled.span<TagProps>`
  display: flex;
  justify-content: flex-end;

  span {
    display: inline;
    font-size: 12px;
    text-transform: capitalize;
    padding: 5px;
    color: #ffffff;

    background: ${({ section }) => colorSections[section]};
    border-radius: 4px;
  }
`;

export const Thumbnail = styled.img`
  width: auto;
  max-height: 150px;
  margin-right: 10px;
  border-radius: 4px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px 35px;
  }
`;

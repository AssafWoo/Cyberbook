import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding-bottom:1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  flex-grow: 1; 
  height: 100%; 
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  }

`;

export const BookImage = styled.img`
  transform: translateY(-10%);
  width: 100px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

`;

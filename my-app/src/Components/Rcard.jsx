import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width:800px;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Comfortaa", sans-serif;
  margin-bottom: 10px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category = styled.span`
  background-color: #333;
  font-family: "Comfortaa", sans-serif;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const RightColumn = styled.div`
    flex: 0.5;
  display: flex;
  align-items: center;
  justify-content:center;
  
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: teal;
  font-family: "Comfortaa", sans-serif;
  color: white;
  padding: 10px;
  gap: 5px;
  font-size: 2rem;
  border-radius:10px ;
`;

const StarIcon = styled.span`


`;


const Rcard = ({ restaurant }) => {
  const { name, categories, stars } = restaurant;

  return (
    <CardContainer>
      <LeftColumn>
        <Title>{name}</Title>
        <Categories>
          {categories.split(',').map((category, index) => (
            <Category key={index}>{category}</Category>
          ))}
        </Categories>
      </LeftColumn>
      <RightColumn>
        <RatingContainer>
          <StarIcon>⭐️</StarIcon>
          {stars}
        </RatingContainer>
      </RightColumn>
    </CardContainer>
  );
};

export default Rcard;

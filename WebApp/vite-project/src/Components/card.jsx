import React, { useState } from 'react';
import styled from 'styled-components';
import Res from '../assets/Res.jpeg';
import axios from 'axios'; // Import axios for making HTTP requests

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 2px solid #333;
  box-shadow: 0px 2px 20px -8px rgba(0,0,0,0.75);
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-family: "Comfortaa", sans-serif;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
`;

const Desc = styled.div`
  width: 80%;
  font-family: "Comfortaa", sans-serif;
  text-align: start;
`;

const RatingContainer = styled.div`
  display: flex;
`;

const RatingItem = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isselected }) => (isselected ? '#333' : 'transparent')};
  color: ${({ isselected }) => (isselected ? '#fff' : '#333')};
`;

const Card = ({ item, updateRating }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    updateRating(item.name, rating); // Update parent component with the selected rating
  };

  return (
    <>
      <CardContainer>
        <Left>
          <Image src={Res} />
          <Title>{item.name}</Title>
        </Left>
        <Right>
          <Title>Ratings</Title>
          <RatingContainer>
            {[1, 2, 3, 4, 5].map((ratingValue) => (
              <RatingItem
                key={ratingValue}
                isselected={ratingValue <= selectedRating}
                onClick={() => handleRatingClick(ratingValue)}
              >
                {ratingValue}
              </RatingItem>
            ))}
          </RatingContainer>
        </Right>
      </CardContainer>
    </>
  );
};

export default Card;

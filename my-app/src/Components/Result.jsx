import React from "react";
import styled from "styled-components";
import Rcard from "./Rcard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const ResultContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-family: "Comfortaa", sans-serif;
  margin-bottom: 20px;
  position: sticky;
  top: 90px;
  width: 100%;
  padding: 20px;
  background-color: white;
`;

const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  overflow-y: auto; /* Apply scrollable behavior */
  padding: 20px;
  width: 100%; /* Ensure full width */
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2086AE;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  cursor: pointer;
  position: sticky;
  bottom: 15px;

  transition: all 0.3s ease;
  &:hover {
    background-color: #1b4f72;
  }
  box-shadow: 0px 2px 36px -1px rgba(0,0,0,0.75);
  `

  const Span = styled.span`
  font-size: 2rem;
  margin-left: 10px;
  color: #2086AE;
`;

const Result = () => {
  const [suggestedRestaurants, setSuggestedRestaurants] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setUserName(userData.userName);
    console.log(userName);
    if (userData) {
      const transformedData = transformRatingsObject(userData);
      fetchSuggestions(transformedData);
    }
  }, []);

  const fetchSuggestions = async (userData) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', userData);
      setSuggestedRestaurants(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const transformRatingsObject = (userData) => {
    const transformedData = {
      user_id: userData.userName, // Assuming userName is equivalent to user_id
      review_count: Object.keys(userData.ratings).length,
      stars: Object.values(userData.ratings).reduce((acc, curr) => acc + curr) / Object.keys(userData.ratings).length,
      ...userData.ratings
    };
    return transformedData;
  };


  return (
    <ResultContainer>
      <Title>Here are the top recommendation for<Span>{userName}</Span></Title>
      <ScrollableContainer>
        {suggestedRestaurants.map((restaurant, index) => (
          <Rcard key={index} restaurant={restaurant}  />
        ))}
      </ScrollableContainer>
      <Button>
      <Link to="/" style={{textDecoration:"none",color:'white'}}>
      Go Back
      </Link>
      </Button>
    </ResultContainer>
  );
};

export default Result;

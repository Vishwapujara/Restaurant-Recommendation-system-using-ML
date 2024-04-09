import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Card from './card';
import { Items } from '../../data';
import { Link } from 'react-router-dom';
import Result from './Result';

import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #333;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  width: 90%;
  text-align:start;
  align-self: start;
  padding: 10px;
  border-bottom:1px solid #fff;
  font-family: "Comfortaa", sans-serif;
  font-size: 1.8rem;
  color: white;
`;

const ContentContainer = styled.div`
  overflow-y:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

`;

const TopLeft = styled.div`
  background-color:#ED846D;
  flex: 1;
  height: 90vh;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const Wrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
  `

const Desc = styled.div`
  margin-top: 20px;
  width: 80%;
  align-self: start;
  font-family: "Comfortaa", sans-serif;
`;

const P = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;
  padding: 10px;
  letter-spacing: 1px;
  line-height: 1.5;
`;

const Box = styled.div`
  background-color:transparent;
  border: 1px solid #333;
  font-family: "Comfortaa", sans-serif;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
`;

const Span = styled.span`
  font-size: 2rem;
  margin-left: 10px;
`;


const TopRight = styled.div`
 background-color: #fff;
  flex: 1;
  height: 90vh;
  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;
  overflow-y: auto; /* Add this to make the content scrollable */
  gap: 20px;
`;

const Top = styled.div`
  font-family: "Comfortaa", sans-serif;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  padding: 10px;
  position: sticky;
  top: 0;
  background-color:#FBDB32;
  box-shadow: 0px 2px 36px -1px rgba(0,0,0,0.75);
`;

const TitleRight = styled.h1`
font-family: "Comfortaa", sans-serif;
font-size: 1.5rem;
color:black;
text-align: center;
padding: 10px;
border-bottom: 1px solid #fff;
position: sticky;
top: 10px;

z-index: 1;
`

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

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Comfortaa", sans-serif;
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  padding: 10px;
`;

const Span2 = styled.span`
  font-size: 1.5rem;
  color: #333;  
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-family: "Comfortaa", sans-serif;
  color: #333;
  text-align: center;
  outline: none;
`;

const Hero = () => {
  const [ratings, setRatings] = useState({
    "American (New)": 0,
    "American (Traditional)": 0,
    "Asian Fusion": 0,
    "Bagels": 0,
    "Bakeries": 0,
    "Barbeque": 0,
    "Bars": 0,
    "Bubble Tea": 0,
    "Burgers": 0,
    "Caribbean": 0,
    "Chicken Wings": 0,
    "Chinese": 0,
    "Coffee & Tea": 0,
    "Comfort Food": 0,
    "Dance Clubs": 0,
    "Desserts": 0,
    "Diners": 0,
    "Donuts": 0,
    "Ethnic Food": 0,
    "Fast Food": 0,
    "French": 0,
    "Gluten-Free": 0,
    "Greek": 0,
    "Halal": 0,
    "Ice Cream & Frozen Yogurt": 0,
    "Indian": 0,
    "Irish": 0,
    "Italian": 0,
    "Japanese": 0,
    "Juice Bars & Smoothies": 0,
    "Korean": 0,
    "Latin American": 0,
    "Lounges": 0,
    "Mediterranean": 0,
    "Mexican": 0,
    "Middle Eastern": 0,
    "Nightlife": 0,
    "Noodles": 0,
    "Pizza": 0,
    "Ramen": 0,
    "Salad": 0,
    "Sandwiches": 0,
    "Seafood": 0,
    "Soup": 0,
    "Southern": 0,
    "Spanish": 0,
    "Steakhouses": 0,
    "Sushi Bars": 0,
    "Szechuan": 0,
    "Tacos": 0,
    "Tapas Bars": 0,
    "Tapas/Small Plates": 0,
    "Tex-Mex": 0,
    "Thai": 0,
    "Vegan": 0,
    "Vegetarian": 0,
    "Vietnamese": 0
  });
  const [userName, setUserName] = useState('');

  const updateRating = (name, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: rating,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const ratedCategoriesCount = Object.values(ratings).filter((rating) => rating > 0).length;
    if (ratedCategoriesCount < 3 || userName.trim() === '') {
      alert('Please rate at least 3 categories and provide your name.');
      return;
    }
  
    const totalStars = Object.values(ratings).reduce((acc, curr) => acc + curr, 0);
    const averageStars = totalStars / ratedCategoriesCount;
  
    const userData = {
      user_id: userName,
      review_count: 1,
      stars: averageStars,
      ...ratings
    };
    console.log(userData);
  
    axios.post('http://127.0.0.1:5000/predict', userData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('userData', JSON.stringify({ userName, ratings }));
        navigate('/result');
 // Redirect to "/result" page after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (<>

    <ContentContainer>
      <TopLeft>
        <Wrapper>
          <Title>
            Connect with the best restaurants in your area and find the perfect dining experience.
          </Title>
          <Desc>
            <P>
              TastyQuest is a website that helps you find the best restaurants in your area.
            </P>
            <P>
              The restaurant recommendation system utilizes machine learning techniques to provide personalized restaurant suggestions based on user preferences and ratings. By leveraging user data and restaurant features, the system aims to enhance user experience and satisfaction by offering relevant dining options.
            </P>
          </Desc>
          <Box>
            Rate the restaurants categories that you like atleast 3 <Span>👉</Span>
          </Box>
        </Wrapper>
      </TopLeft>
      <TopRight>
        <Top>
          <TitleRight>
            Rate atleast 3 categories to get started
          </TitleRight>
          <User>
            <Span2>Name:</Span2>
            <Input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </User>
        </Top>
        {Items.map((item) => (
          <Card key={item.id} item={item} updateRating={updateRating} />
        ))}
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </TopRight>
    </ContentContainer>
  
  </>
  );
};

export default Hero;
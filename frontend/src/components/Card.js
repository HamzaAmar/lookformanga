import React from "react";
import styled from "styled-components";
import { Container, ImageWrapper, Heading, Text } from "../styles/styles";

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;
const CardContainer = styled.div``;

const Card = () => {
  return (
    <Container>
      <Cards>
        <CardContainer>
          <ImageWrapper>
            <img src="https://picsum.photos/id/200/200/200" alt="hello" />
          </ImageWrapper>
          <Heading as={h3}>Hello</Heading>
          <Text>HEllo world</Text>
        </CardContainer>
      </Cards>
    </Container>
  );
};

export default Card;

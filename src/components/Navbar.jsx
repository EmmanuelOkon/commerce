import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``
const Center = styled.div``
const Right = styled.div``

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni ratione aliquam facilis omnis temporibus neque repellat ipsa consequuntur, dolore nam at distinctio voluptatum quae ducimus numquam. Porro, quo aut.</Left>
          <Center>Center</Center>
          <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

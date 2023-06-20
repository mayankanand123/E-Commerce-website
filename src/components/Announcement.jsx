
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    background-color: #f7eef6;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    /* justify-content: space-between; */

`;

const Wrapper = styled.div`
  color: #235d90;
  font-weight: 800;
  font-size: large;
`;

const Image = styled.img`
  height: 30px;
  width: 60px;
  margin-left: -600px;
  margin-right: 550px;
`;

const Announcement = () => {
  return (
    <Container>
      <Image  src="https://th.bing.com/th/id/OIP.lzJpM6JZBjG0jV0U5wSk4AHaCa?pid=ImgDet&rs=1"/>
      <Wrapper>
      Announcement
      </Wrapper>

      </Container>
  )
}

export default Announcement
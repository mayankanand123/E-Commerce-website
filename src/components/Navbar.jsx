import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
height: 80px;
background-color: #ebebf8;

${mobile({ backgroundColor: "lavender", height: "100px",})};
`;

const Wrapper = styled.div`
padding: 10px 20Px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
flex: 1.2;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
display: flex;
font-weight: 500;

${mobile({ display: "none" })}
`;

const Select = styled.select`
 padding: 2px;
  margin-right: 10px;
  margin-left: 10px;

`;

const Option = styled.option`
  
`;


const SearchContainer = styled.div`
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
   
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
flex: 0.8;
text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "44px" })}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
justify-content: space-between;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    font-weight: 600;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>
                        Select Lang
                    <Select>
            <Option disabled selected>
              EN
            </Option>
            <Option>हिंदी</Option>
            <Option>español</Option>
            <Option>français</Option>
            <Option>日本語</Option>
            <Option>中文 </Option>
          </Select>
                    </Language>
                   
                    <MenuItem><b><Link to="/"> Home</Link></b></MenuItem>
                    <MenuItem><b><Link to="/productlists"> Product Categories</Link></b></MenuItem>
                    <MenuItem><b><Link to="/products"> Product Description</Link></b></MenuItem>
                   
                </Left>
                <Center>
                    <Logo>
                        Ax.
                    </Logo>
                </Center>

                <Right>
                <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color: "gray", fontSize:26}}/>
                    </SearchContainer>
                    <MenuItem><Link to="/login">Sign In</Link></MenuItem>
                    <MenuItem><Link to="/register">Register</Link></MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color='primary'>
                     <Link to="/cart"><ShoppingCartOutlined/></Link>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
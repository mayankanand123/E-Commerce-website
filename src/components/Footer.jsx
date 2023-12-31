import {
  Facebook,
  Instagram,
  MailOutline,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    /* margin-top: -20px; */
    ${mobile({ flexDirection: "column" })}
    height: 200px;
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;

const Logo = styled.h1`
  
  `;

const Desc = styled.p`
    margin: 0px 0px;
    margin-bottom: 5px;
  `;


const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;

const Title = styled.h3`
    margin-bottom: 30px;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img`
      width: 50%;
  `;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    
  `;

  const Name = styled.div`
    display: flex;
    align-items: center;
  `;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AX.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>

      </Left>


      <Left>
        {/* <Logo>AX.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but 
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc> */}
        <Title>Connect With Us On</Title>
        <SocialMedia>
          <Name>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <Title>Facebook</Title>
          </Name>
          <Name>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <Title>Instagram</Title>
          </Name>
          <Name>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <Title>Twitter</Title>
          </Name>
         
        </SocialMedia>
      </Left>



      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        {/* <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem> */}
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
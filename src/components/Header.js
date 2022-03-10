import { useState } from "react";
import styled from "styled-components";
import { Menu } from "@material-ui/icons";
import { Close } from "@material-ui/icons";
function Header() {
    const [ BurggerStatus, setBurggerStatus ] = useState(false);
    return ( 
        <Container>
            <a href="">
                <img src="/images/logo.svg" ></img>
            </a>
            
            <Menus>
                <a href="">Model S</a>
                <a href="">Model Y</a>
                <a href="">Model 3</a>
                <a href="">Model X</a>
            </Menus>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Tesla Accouunt</a>
            </RightMenu>
            <BurgerNav show= {BurggerStatus} >
                <CloseWrapper>
                    <CloseIcon onClick={ ()=>setBurggerStatus(false) } />
                </CloseWrapper>
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Model S</a></li>
                <li><a href="">Model Y</a></li>
                <li><a href="">Model 3</a></li>
                <li><a href="">Model X</a></li>
                <li><a href="">Accessories</a></li>
            </BurgerNav>
            <CustomMenu onClick={()=>setBurggerStatus(true)} />
        </Container>
     )
}

export default Header;

const Container = styled.div`
    margin-top:20px;
    position:fixed;
    display:flex;
    align-item:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
    
const Menus = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;
    flex:1;
    @media (max-width:786px) {
        display:none;
    }
    a{
        font-weight:600;
        text-transformation:uppercase;
        padding:0 10px;
        flex-warp:nowarp;
    }
`
    
const RightMenu = styled.div`
    display:flex;
    align-item:center;
    
    a{
        font-weight:600;
        text-transformation:uppercase;
        margin-right:10px;
    }
    
`

const CustomMenu = styled(Menu)`
    cursor:pointer;
`

const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    // display:flex;
    flex-start:column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    li {
        padding:15px;
        border-bottom:1px solid rgba(0, 0, 0, .2);

        a{
            font-weigh:600;
        }
    }
`

const CloseIcon = styled(Close)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`
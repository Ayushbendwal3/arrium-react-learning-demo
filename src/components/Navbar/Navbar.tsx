import {
  StyledNavcontainer,
  StyledLinkContainer,
  StyledNavInnerContainer,
  StyledLinkText,
  StyledNavButton
} from "./Navbar.styled";

import Button from "@mui/material/Button";

import BrandLogo from "../../assets/logo/brandLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavcontainer>
      <StyledNavInnerContainer>
        <Link to={`/`}>
          <img src={BrandLogo} alt="Arrium Logo" />
        </Link>
        <StyledLinkContainer>
          <StyledNavButton variant="text">
            <StyledLinkText>Benefits</StyledLinkText>
          </StyledNavButton>
          <StyledNavButton variant="text">
            <StyledLinkText>How it Works</StyledLinkText>
          </StyledNavButton>
          <StyledNavButton variant="text">
            <StyledLinkText>Contact Us</StyledLinkText>
          </StyledNavButton>
        </StyledLinkContainer>
      </StyledNavInnerContainer>

      <StyledNavInnerContainer>
        <StyledNavButton variant="text">
          <StyledLinkText>Login</StyledLinkText>
        </StyledNavButton>
        <Button
          sx={{ padding: "0.5rem 1rem", borderRadius: "10px" }}
          color="primary"
          variant="contained"
        >
          Start Free Trial
        </Button>
      </StyledNavInnerContainer>
    </StyledNavcontainer>
  );
};

export default Navbar;

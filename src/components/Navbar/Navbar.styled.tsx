import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const StyledNavcontainer = styled("nav")`
  position: sticky;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  padding: 0 5rem;
  top: 0;
  justify-content: space-between;
`;

export const StyledNavInnerContainer = styled("div")`
  display: flex;
  align-items: center;
`;

export const StyledLinkContainer = styled("div")`
  display: flex;
  margin-left: 5rem;
`;

export const StyledLinkText = styled("p")`
  text-transform: capitalize;
  color: #000000;
  font-weight: 500;
  font-size: 1rem;
  line-height: 16px;
`;

export const StyledNavButton = styled(Button)`
  margin-right: 2.5rem;
  padding: 0.5rem 1rem;
`;

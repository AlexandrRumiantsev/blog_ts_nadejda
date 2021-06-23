import React from "react";
import headerImg from "../../assets/img/header.jpg";
import { StyledMain } from "./styles";

interface IProps {
}

const Main = ({}: IProps) => {
  return (
    <StyledMain>
        <div>
            <img src={headerImg} />
        </div>;
    </StyledMain>
  )
  
  
};

export {Main};
import styled from "styled-components";

export type ButtonVariante = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariante;
}

const buttonVariante = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return `background-color:  ${buttonVariante[props.variant]}`;
  }}
`;

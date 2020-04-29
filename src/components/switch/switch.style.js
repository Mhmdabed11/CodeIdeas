import styled from "@emotion/styled"

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 1rem 1rem;
  outline: none;
`

export const Toggler = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  position: relative;
  transform: ${props => (!props.checked ? "scale(1.3)" : "")};
  transition: all 0.35s ease;

  &:after {
    box-shadow: ${props =>
      props.checked
        ? "0 -13px 0 #fff, 0 13px 0 #fff, 13px 0 0 #fff, -13px 0 0 #fff,9px 9px 0 #fff, -9px 9px 0 #fff, 9px -9px 0 #fff, -9px -9px 0 #fff;"
        : "none"};
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: -2px 0 0 -2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: all 0.35s ease;
  }

  &:before {
    content: "";
    width: 16px;
    height: 16px;
    background-color: black;
    position: absolute;
    border-radius: 50%;
    top: ${props => (props.checked ? "-100%" : "-6px")};
    right: ${props => (props.checked ? "-100%" : "-6px")};
    border-color: #fff;
    transition: all 0.35s ease;
  }
`

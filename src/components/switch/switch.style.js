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
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  transform: ${props => (props.checked ? "scale(1.3)" : "")};
  transition: all 0.35s ease;

  &:after {
    box-shadow: ${props =>
      !props.checked
        ? "0 -13px 0 rgba(255, 255, 255, 0.8), 0 13px 0 rgba(255, 255, 255, 0.8), 13px 0 0 rgba(255, 255, 255, 0.8), -13px 0 0 rgba(255, 255, 255, 0.8),9px 9px 0 rgba(255, 255, 255, 0.8), -9px 9px 0 rgba(255, 255, 255, 0.8), 9px -9px 0 rgba(255, 255, 255, 0.8), -9px -9px 0 rgba(255, 255, 255, 0.8);"
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
    background-color: #0f1b34;
    position: absolute;
    border-radius: 50%;
    top: ${props => (!props.checked ? "-100%" : "-6px")};
    right: ${props => (!props.checked ? "-100%" : "-6px")};
    border-color: #fff;
    transition: all 0.35s ease;
  }
`

import styled from "@emotion/styled"

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background-color: #06d6a0;
    span {
      left: calc(100% - 1px);
      transform: translateX(-100%);
    }
  }
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: grey;
  border-radius: 50px;
  position: relative;
  transition: background-color 0.1s;

  &:active {
    span {
      width: 30px;
    }
  }

  span {
    content: "";
    position: absolute;
    left: 1px;
    width: 25px;
    height: 25px;
    border-radius: 45px;
    transition: 0.1s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
`

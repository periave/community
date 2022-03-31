import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #CDA3F1;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 179px;
  height: 59px;
  left: 868px;
  top: 616px;
  box-shadow: 2px 2px 5px rgba(169, 169, 169, 0.25);
  border: none;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

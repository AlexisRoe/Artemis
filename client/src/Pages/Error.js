import styled from "styled-components";
import logo from "../assets/logo/logo-bg.svg";
import { useHistory } from "react-router-dom";
import { STANDARD_500 } from "../utils/config/constants";

const Article = styled.article`
  padding: 25vh 25%;
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -25vw 30vh;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  button {
    width: 100%;
    height: 50px;
    font-family: var(---font-family-header);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-font-white);
    background-color: var(--color-golden);
    border: none;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

export default function ErrorHandler() {
  const history = useHistory();

  return (
    <Article>
      <h2>{STANDARD_500}</h2>
      <button onClick={() => history.push("/")}>Go Home</button>
    </Article>
  );
}

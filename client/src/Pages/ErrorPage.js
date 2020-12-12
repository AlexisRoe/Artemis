import styled from "styled-components";
import logo from "../assets/logo/logo-bg.png";
import { useParams } from "react-router-dom";

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
  const {
    message = `Error: Try again or contact the system administrator`,
  } = useParams();

  return (
    <Article>
      <h2>{message}</h2>
      <button>Go Back</button>
    </Article>
  );
}

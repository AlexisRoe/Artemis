import styled from "styled-components";
import logo from "../../assets/logo/logo-bg.svg";

const Div = styled.div`
  width: 100%;
  min-height: 250px;
  display: grid;
  place-items: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 25%;
  background-position: center center;

  img {
    z-index: -1;
    width: 130px;
    height: auto;
  }

  h4 {
    width: 200px;
    text-align: center;
  }
`;

export default function MissingData() {
  return (
    <Div>
      <h4>
        nothing found to do <br />
        in the next 6 hours
      </h4>
    </Div>
  );
}

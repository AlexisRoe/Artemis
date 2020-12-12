import styled from "styled-components";
import src from "../../assets/logo/logo-artemis.png";

const Div = styled.div`
  width: 100%;
  min-height: 350px;
  display: grid;
  place-items: center;

  img {
    z-index: -1;
    width: 130px;
    height: auto;
  }

  h4 {
    width: 200px;
  }
`;

export default function MissingData() {
  return (
    <Div>
      <h4>
        nothing to found to do <br />
        in the next 6 hours
      </h4>
      <img href={src} alt="" />
    </Div>
  );
}

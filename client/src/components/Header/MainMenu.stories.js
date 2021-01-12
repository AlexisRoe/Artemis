import { Button, Ul, Nav } from "./MainMenu";
import styled from "styled-components/macro";

const PlaceHolder = styled.div`
  margin-bottom: 100px;
`;

export const Menu = (args) => {
  function animationState() {
    if (args.animation === "fade In") {
      return true;
    }
    if (args.animation === "fade Out") {
      return false;
    }
  }

  return (
    <>
      <PlaceHolder />
      <Nav state={animationState()}>
        <Ul>
          <li className="link">Daily Overview</li>
          <li>Profile</li>
          <li>Weekly Overview</li>
          <li>Room Overview</li>
          <li>Kalkulation</li>
          <li>Beverage Counting</li>
        </Ul>
        <Button>Logout</Button>
      </Nav>
    </>
  );
};

export default {
  title: "Components/Header",
  components: Menu,
  argTypes: {
    animation: {
      control: {
        type: "radio",
        options: ["fade In", "fade Out"],
      },
      table: {
        disable: false,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
};

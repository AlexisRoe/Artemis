import styled from "styled-components/macro";
import PropTypes from "prop-types";

import iconArrowToLeft from "../../assets/icons/icon-arrow-toLeft.svg";
import iconArrowToRight from "../../assets/icons/icon-arrow-toRight.svg";

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Container = styled.nav`
  width: 100%;
  min-height: 50px;
  background-color: var(--color-bg-sub);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-top: 100px;
`;

const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 0.5rem;
  margin: 0.5rem;
`;

const FilterHeader = styled.h3`
  color: var(--color-golden);
  margin: 0.5rem auto;
  text-align: center;
  width: 100%;
`;

const FilterButton = styled(Button)`
  background-color: var(--color-golden) !important;
  color: var(--color-font-white);
  padding: 0.4rem 0.8rem;
  margin: 0 0.2rem;
  flex-wrap: 1;
`;

export const NotificationArea = ({ arrowleft, arrowright, filter }) => {
  return (
    <Container>
      {arrowleft && (
        <Button>
          <img src={iconArrowToLeft} alt="show me yesterday" />
        </Button>
      )}
      {filter && (
        <Filter>
          <FilterHeader>FILTER</FilterHeader>
          <FilterButton>All</FilterButton>
          <FilterButton>Setup</FilterButton>
          <FilterButton>F&B</FilterButton>
        </Filter>
      )}
      {arrowright && (
        <Button>
          <img src={iconArrowToRight} alt="show me tomorrow" />
        </Button>
      )}
    </Container>
  );
};

NotificationArea.propTypes = {
  arrowleft: PropTypes.bool.isRequired,
  arrowright: PropTypes.bool.isRequired,
  filter: PropTypes.bool.isRequired,
};

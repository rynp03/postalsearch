import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  background-color: #164863;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #9bbec8;
`;

const Title = styled.h3`
  color: #fff;
`;

const AppBar = () => {
  return (
    <Bar>
      <Title>Zip Code Information App</Title>
    </Bar>
  );
};

export default AppBar;

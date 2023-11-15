import { useState, useEffect } from "react";
import styled from "styled-components";
import { BounceLoader } from "react-spinners";

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const AddressBox = styled.div`
  display: flex;
  margin: 20px;
  flex-direction: column;
  font-size: 1.1em;
`;

const PlaceCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 0 20px 0 20px;
  margin: 10px;
  background-color: #fff;
  font-size: 1.1em;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

// eslint-disable-next-line react/prop-types
const Address = ({ address, loading }) => {
  const [add, setAdd] = useState();

  useEffect(() => {
    setAdd(address);
  }, [address]);

  return (
    <>
      {loading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <BounceLoader
            color="#427D9D"
            loading
            size={130}
            speedMultiplier={0.8}
          />
        </div>
      ) : (
        <AddressContainer>
          {add && (
            <AddressBox>
              <span>Post Code: {add?.["post code"]}</span>
              <span>Country: {add?.["country"]}</span>
              <span>Country Abbreviation: {add?.["country abbreviation"]}</span>
            </AddressBox>
          )}
          {Array.isArray(add?.places) &&
            add.places.map((place, index) => {
              return (
                <PlaceCard key={index}>
                  <span>Place Name: {place?.["place name"]}</span>
                  <span>State: {place?.state}</span>
                  <span>
                    State Abbreviation: {place?.["state abbreviation"]}
                  </span>
                </PlaceCard>
              );
            })}
        </AddressContainer>
      )}
    </>
  );
};

export default Address;

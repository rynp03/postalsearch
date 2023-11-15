import { useState } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { getAddress } from "../Config/api";
import Address from "./Address";
import ClearIcon from "@mui/icons-material/Clear";

const ZipInput = styled.input`
  border: none;
  padding: 10px 15px;
  caret-color: #164863;
  outline: none;
  color: #164863;
  font-size: 1em;
  font-weight: 600;
`;

const ZipForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

const ZipLabel = styled.label`
  margin-right: 10px;
  font-size: 1em;
  font-weight: 600;
  color: #164863;
`;

const ZipSend = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 15px;
  background-color: #427d9d;
  transition: 0.3s all;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: #427d9d98;
  }
`;

const ClearButton = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  padding: 10px;
  background-color: #ff8080;
  border-radius: 5px 0 0 5px;
  transition: 0.3s all;
  &:hover {
    background-color: #fd5d5d;
  }
`;

const ErrorMessage = styled.span`
  font-size: 1em;
  color: #fe0000;
  font-weight: 600;
  text-align: center;
`;

const MainBody = () => {
  const [address, setAddress] = useState();
  const [zipcode, setZipCode] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleZipSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await getAddress(zipcode);
    if (response.status <= 299) {
      setAddress(response.data);
      setLoading(false);
      setError(false);
    } else {
      setLoading(false);
      if (response.status >= 400) {
        setError(true);
        setAddress(null)
      }
    }
  };

  return (
    <>
      <ZipForm>
        <ZipLabel>Enter ZipCode:</ZipLabel>
        <div style={{ display: "flex" }}>
          <ClearButton
            onClick={(e) => {
              setAddress(null),
                setZipCode(""),
                e.preventDefault(),
                setError(false);
            }}
          >
            <ClearIcon style={{ color: "white" }} />
          </ClearButton>
          <ZipInput
            type="number"
            value={zipcode}
            onChange={(e) => handleInputChange(e)}
          />
          <ZipSend type="submit" onClick={(e) => handleZipSend(e)}>
            <SendIcon style={{ color: "white" }} />
          </ZipSend>
        </div>
      </ZipForm>
      {error && <ErrorMessage>Incorrect ZipCode!!!</ErrorMessage>}
      <Address address={address} loading={loading} />
    </>
  );
};

export default MainBody;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  width: 395px;
  border: 2px solid paleviolet;
  margin-bottom: 20px;
  height: 30px;
`;

export default function SearchInput({ value, onChangeSearchInput }) {
  return (
    <>
      <p>Find contact by name:</p>
      <Input
        type="text"
        value={value}
        onChange={onChangeSearchInput}
        placeholder="Enter name to search"
      />
    </>
  );
}

SearchInput.propTypes = {
  onChangeSearchInput: PropTypes.func,
};

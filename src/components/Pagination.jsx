import React from "react";
import {Button,ButtonGroup,Select} from '@chakra-ui/react';

const Pagination = ({handlePage}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" value={1} onClick={handlePage}>First</Button>
      <Button data-cy="pagination-previous-button" value={2} onClick={handlePage}>Previous</Button>
      <Select data-cy="pagination-limit-select" value={4} onChange={handlePage}>
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" value={5} onClick={handlePage}>Next</Button>
      <Button data-cy="pagination-last-button" value={7} onClick={handlePage}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;

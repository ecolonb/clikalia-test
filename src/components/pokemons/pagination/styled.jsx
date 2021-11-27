import styled from 'styled-components';

export const PaginationButton = styled.button`
  height: 30px;
  width: auto;
  padding: 0 8px;
  background-color: #fff;
  border: 1px solid #5a86ff;
  color: #323232d6;
  margin: 0 1px;
  outline: none;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #5a86ff;
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

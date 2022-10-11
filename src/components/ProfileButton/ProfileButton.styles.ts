import styled from 'styled-components';

export const ProfileButton = styled.button`
  background-color: gray;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  border-top-left-radius: 33px;
  border-top-right-radius: 33px;
  border: none;
  display: flex;
  padding: 4px;
  text-align: left;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: darkgray;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: 8px;

  > * {
    margin: 0;
  }

  > * + * {
    margin-top: 4px;
  }
`;

export const Name = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Credits = styled.p`
  color: white;
  font-size: 12px;
`;

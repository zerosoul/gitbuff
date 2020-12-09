import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .tip {
    font-size: 2rem;
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 1.2rem;
    color: #fff;
    background-color: rgba(2, 2, 2, 0.8);
  }
  .input {
    margin-top: -4rem;
    min-width: 38rem;
    font-size: 1.6rem;
    padding: 1.2rem;
    border-radius: 0.8rem;
    border: 2px solid #333;
    &:focus {
      outline: none;
      border-color: blue;
    }
  }
  .btn {
    font-size: 2rem;
    padding: 1rem 1.2rem;
    text-decoration: none;
    visibility: hidden;
    &.downloadable {
      visibility: visible;
    }
  }
`;

export default StyledWrapper;

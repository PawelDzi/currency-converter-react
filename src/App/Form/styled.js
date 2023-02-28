import styled from "styled-components";

export const Wrapper = styled.form`
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 20px;   
    background-color: #f3f3f3;
    position: absolute;
    max-width: 400px;
    width: 100%;
    top: 30%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: #007497;
    border: 1px solid #000;
    border-radius: 5px;
    color: white;
`;
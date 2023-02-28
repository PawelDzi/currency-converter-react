import styled from "styled-components";

export const Wrapper = styled.form`
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 10px;
    padding: 20px;   
    background-color: ${({theme}) => theme.color.concrete};
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
    background-color: ${({theme}) => theme.color.allports};
    border: 1px solid ${({theme}) => theme.color.black};
    border-radius: 5px;
    color: ${({theme}) => theme.color.white};
`;
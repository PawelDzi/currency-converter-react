import styled from "styled-components";

export const Wrapper = styled.form`
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 10px;
    padding: 20px;   
    background-color: ${({ theme }) => theme.color.concrete};
    position: absolute;
    min-height: 275px;
    max-width: 400px;
    width: 100%;
    top: 30%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.allports};
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.teal};
    padding: 40px 20px 20px 50px;
`;

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.color.torchRed};
    padding: 40px;
`;

export const WrapperSelect = styled.select`
    width: 203px;
`;

export const WrapperInput = styled.input`
    width: 203px;
`;
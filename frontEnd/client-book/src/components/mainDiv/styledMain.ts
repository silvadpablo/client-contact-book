import styled from "styled-components";

export const StyledMainDiv = styled.main`
    text-align: right;
    color: var(--grey-4);
    background-color: var(--grey-1);
    width: 100%;
    height: 100%;
    max-height: 800px;
    gap: 20px;
    padding: 15px;

    .div {
        border-radius: var(--radius);
        padding: 15px;
        gap: 10px;
        width: 50%;
    }
    
    .clientDiv {
        border: 4px solid var(--primary-2);
    }
    .contactDiv {
        text-align: center;
        border: 4px solid var(--secondary);
    }
`
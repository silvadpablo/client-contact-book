import styled from "styled-components";

export const StyledClientCard = styled.div`
    overflow-wrap: break-word;
    text-align: left;
    text-overflow: ellipsis;
    font-weight: 800;
    background-color: var(--secondary);
    border-radius: var(--radius-card);
    gap: 7px;
    padding: 7px;
    color: var(--grey-1);
    width: 150px;
    max-height: 120px;
    
    :hover {
        cursor: pointer;
    }
`

export const StyledContactCard = styled(StyledClientCard)`
    background-color: var(--primary-2);
    width: 100%;
    padding: 20px;
`
import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    padding: 24px 9.5px 0 16px;

    background-color: var(--secondary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;

export const Category = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 6px;

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;
    color: var(--symbol);
    cursor: pointer;
`;

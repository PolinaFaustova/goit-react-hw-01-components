import styled from "styled-components";

export const FriendListItemStyled = styled.li`
    display: flex;
    gap: 15px;
    align-items: center;
    background-color: #89CFF0;
    height: 90px;
    padding: 0px 16px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const Name = styled.p`
    font-weight: 700;
    color: #000;
`;
const bgColor = ({isOnline}) => {
    return isOnline ? 'green' : 'red';
    }
export const Status = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${bgColor};
`;
export const Avatar = styled.img`
    border-radius: 10px;
    background-color:  #fff;
    width: 48px;
`;
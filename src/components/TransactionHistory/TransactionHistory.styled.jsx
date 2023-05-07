import styled from 'styled-components';

export const History = styled.table`
 border-collapse: collapse;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 450px; 
    margin: 50px auto;    
` 

export const HistoryTh = styled.th`
    background-color: rgb(32, 154, 241);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    border-right: 1px solid #fff;
    
    &:last-child {
        border-right: none;
    }
`

export const HistoryTd = styled.td`
border-bottom: 1px solid #fff;     
    color: #000;
    font-size: 14px;
    padding: 10px;
    text-align: center;    
`

export const Item = styled.tr`
   &:nth-child(even) {
    background-color: #D6D1D1;
  }  
`

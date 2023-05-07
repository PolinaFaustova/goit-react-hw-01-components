import PropTypes from 'prop-types';
import { History, HistoryTh, HistoryTd, Item } from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
    return (
        <History>
            <thead>
                <tr>
                    <HistoryTh>Type</HistoryTh>
                    <HistoryTh>Amount</HistoryTh>
                    <HistoryTh>Currency</HistoryTh>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <Item key={id}>
                            <HistoryTd>{type}</HistoryTd>
                            <HistoryTd>{amount}</HistoryTd>
                            <HistoryTd>{currency}</HistoryTd>
                        </Item>
                    )
                })}
            </tbody>
        </History>
    )
};
    TransactionHistory.propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};
import React, {Component} from 'react';
import {Query} from "@apollo/client/react/components";
import {GET_CURRENCIES} from "../../queries/queries";
import {CurrencyDiv, CurrencyItem, CurrencyWrapper} from "./CurrencyMenu.styles";
import {connect} from "react-redux";

class CurrencyMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {currencyChangeHandler} = this.props;

        return (
            <Query query={GET_CURRENCIES}>
                {({data, loading, error}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return console.error(error);

                    const {currencies} = data;
                    return (
                        <CurrencyWrapper>
                            {currencies.map((currency, index) => (
                                <CurrencyDiv
                                    key={index}
                                    onClick={() => currencyChangeHandler(currency)}
                                >
                                    <CurrencyItem>{`${currency.symbol} ${currency.label}`}</CurrencyItem>
                                </CurrencyDiv>
                            ))}
                        </CurrencyWrapper>
                    );
                }}
            </Query>
        );
    }
}

export default connect()(CurrencyMenu)
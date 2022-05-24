import React, {Component} from 'react';
import {
    ButtonContainer,
    CartIcon,
    Container,
    Image,
    ImageContainer, InfoContainer,
    NoStock,
    NoStockContainer, Price, Title
} from "./ProductCard.styles";
import {Link} from "react-router-dom";
import {images} from "../../img/consts";
import actions from "../../store/actions/index";
import {connect} from "react-redux";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {id, name, gallery, prices, inStock, attributes} = this.props.product;
        const {activeCurrency} = this.props;

        let initialAttributes = {}
        attributes.forEach((attribute) => {
            const {name, items} = attribute;
            initialAttributes = {
                ...initialAttributes,
                [name]: items[0].value
            };
        });

        const price = prices.filter((price) => price.currency.label === activeCurrency)

        return (
            <Container>
                <Link to={`/product/${id}`}>
                    <ImageContainer>
                        <Image src={gallery[0]} alt="Apollo Running Short"/>
                        {!inStock && (
                            <NoStockContainer>
                                <NoStock>OUT OF STOCK</NoStock>
                            </NoStockContainer>
                        )}
                    </ImageContainer>
                </Link>
                {inStock && (
                    <ButtonContainer
                        onClick={() => this.props.addToCart(id, attributes, initialAttributes, prices)}
                    >
                        <CartIcon src={images.WhiteCart} alt="White Cart"/>
                    </ButtonContainer>
                )}
                <InfoContainer>
                    <Title>{name}</Title>
                    <Price>{`${price[0].currency.symbol} ${price[0].amount}`}</Price>
                </InfoContainer>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {activeCurrency} = state.productReducer;

    return {
        activeCurrency: activeCurrency,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productId, attributes, selectedAttributes, prices) =>
            dispatch(
                actions.productActions.addToCart(
                    productId,
                    attributes,
                    selectedAttributes,
                    prices
                )
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
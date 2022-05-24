import React, {Component} from 'react';
import {
    AddCart,
    AddCartContainer,
    Container, Desc, FullDesc,
    ImageContainer,
    InfoContainer,
    OuterContainer,
    OutOfStock,
    OutOfStockContainer,
    Price,
    PriceValue,
    PrimaryImage,
    PrimaryImageContainer,
    SecondaryImage,
    SecondaryImageInnerContainer,
    SecondaryImageOuterContainer,
    SubTitle,
    Title
} from "./SingleProduct.styles";
import {Query} from "@apollo/client/react/components";
import {GET_PRODUCT} from "../../queries/queries";
import ProductAttributes from "../../components/ProductAttributes/ProductAttributes";
import {Markup} from "interweave";
import actions from "../../store/actions/index";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {Loading} from "../../components/Loading/Loading";

class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryImage: 0,
        };
    }

    imageChangeHandler = (idx) => {
        this.setState({
            primaryImage: idx,
        })
    }

    render() {
        const {productId} = this.props.params;
        const {activeCurrency, selectedAttributes} = this.props;
        return (
            <OuterContainer>
                <Query query={GET_PRODUCT} variables={{productId}}>
                    {({data, loading, error}) => {
                        if (loading) return <Loading/>;
                        if (error) return console.error(error);

                        const {
                            id,
                            name,
                            brand,
                            description,
                            inStock,
                            attributes,
                            gallery,
                            prices,
                        } = data.product;

                        let initialAttributes = {};
                        attributes.forEach((attribute) => {
                            const {name, items} = attribute;
                            initialAttributes = {
                                ...initialAttributes,
                                [name]: items[0].value,
                            };
                        });

                        const price = prices.filter(
                            (price) => price.currency.label === activeCurrency
                        );

                        return (
                            <Container>
                                <ImageContainer>
                                    <SecondaryImageOuterContainer>
                                        <SecondaryImageInnerContainer>
                                            {gallery.map((pic, index) => (
                                                <SecondaryImage
                                                    src={pic}
                                                    key={index}
                                                    onClick={() => this.imageChangeHandler(index)}
                                                />
                                            ))}
                                        </SecondaryImageInnerContainer>
                                    </SecondaryImageOuterContainer>
                                    <PrimaryImageContainer>
                                        <PrimaryImage
                                            src={gallery[this.state.primaryImage]}
                                        />
                                    </PrimaryImageContainer>
                                </ImageContainer>
                                <InfoContainer>
                                    <Title>{brand}</Title>
                                    <SubTitle>{name}</SubTitle>
                                    <ProductAttributes
                                        type='singleProduct'
                                        attributes={attributes}
                                        initialAttributes={initialAttributes}
                                    />
                                    <Price>Price: </Price>
                                    <PriceValue>
                                        {`${price[0].currency.symbol} ${price[0].amount}`}
                                    </PriceValue>
                                    {inStock ? (
                                        <AddCartContainer
                                            onClick={() =>
                                                this.props.addToCart(
                                                    id,
                                                    attributes,
                                                    selectedAttributes,
                                                    prices,
                                                )
                                            }
                                        >
                                            <AddCart>Add to Cart</AddCart>
                                        </AddCartContainer>
                                    ) : (
                                        <OutOfStockContainer>
                                            <OutOfStock>Out of Stock</OutOfStock>
                                        </OutOfStockContainer>
                                    )}
                                    <Desc>
                                        <FullDesc>
                                            <Markup content={description}/>
                                        </FullDesc>
                                    </Desc>
                                </InfoContainer>
                            </Container>
                        )
                    }}
                </Query>
            </OuterContainer>
        );
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
                prices,
            )
        )
        }
}

const mapStateToProps = (state) => {
    const {isMiniCartOpen, activeCurrency, selectedAttributes} = state.productReducer;

    return{
        isMiniCartOpen: isMiniCartOpen,
        activeCurrency: activeCurrency,
        selectedAttributes: selectedAttributes,
    }
}

export default connect
(mapStateToProps, mapDispatchToProps)
((props) => <SingleProduct {...props} params={useParams()}/>)
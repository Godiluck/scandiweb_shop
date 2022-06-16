import React, {Component} from 'react';
import {Container, Heading, OuterContainer, ProductContainer} from "./AllProducts.styles";
import {Query} from "@apollo/client/react/components";
import {GET_PRODUCTS} from "../../queries/queries";
import {Loading} from "../../components/Loading/Loading";
import {connect} from "react-redux";
import ProductCard from "../../components/ProductCart/ProductCard";
import {useParams} from "react-router-dom";

class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {category} = this.props.params
        return (
            <OuterContainer>
                <Container>
                    <Heading>
                        {`Category: ${category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}`}
                    </Heading>
                    <ProductContainer>
                        <Query query={GET_PRODUCTS} variables={{category}}>
                            {({data, loading, error}) => {
                                if (loading) return <Loading/>;
                                if (error) return console.error(error);

                                return data.category.products.map((product) => (
                                    <ProductCard key={product.id} product={product}/>
                                ))
                            }}
                        </Query>
                    </ProductContainer>
                </Container>
            </OuterContainer>
        );
    }
}

const mapStateToProps = (state) => {
    const {isMiniCartOpen} = state.productReducer;

    return {
        isMiniCartOpen: isMiniCartOpen
    };
};

export default connect(mapStateToProps)((props) => (
    <AllProducts {...props} params={useParams()}/>
));
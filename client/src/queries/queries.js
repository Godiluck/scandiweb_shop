import {gql} from "@apollo/client";

export const GET_PRODUCT = gql`
  query ($productId: String!) {
    product(id: $productId) {
      id
      name
      gallery
      description
      attributes {
        name
        type
        items {
          displayValue
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
      inStock
    }
  }
`;

export const GET_PRODUCTS = gql`
  query ($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        gallery
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
        inStock
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;
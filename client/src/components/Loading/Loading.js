import React, {Component} from 'react';
import {LoadingContainer, LoadingGif} from "./Loading.styles";
import {images} from "../../img/consts";

export class Loading extends Component {
    render() {
        return (
            <LoadingContainer>
                <LoadingGif src={images.LoadingGif} alt='Loading'/>
            </LoadingContainer>
        );
    }
}
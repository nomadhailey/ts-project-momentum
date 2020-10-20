import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import naverLogo from '../../images/naver_square_20x20.png';
import {StyledDiv} from './ModalSearchStyle';

export default function ModalSearch () {

    return (
        <StyledDiv>
            <h3>SEARCH WITH</h3>
            <ul>
                <li><FcGoogle /><span>Google</span></li>
                <li><img src={naverLogo} alt='naverLogo'/><span>Naver</span></li>                
            </ul>
        </StyledDiv>
    );
}
import React, {useState} from "react";
import { StyledDiv } from "./LinksStyle";
import {BiSearch} from 'react-icons/bi';
import ModalSearch from './ModalSearch';
import {IoLogoGoogle} from 'react-icons/io';

export default function Links() {
  const [searchModal, setSearchModal] = useState(false);
  const openModal = () => {
    setSearchModal(true);
  }
  return (
    <>
  <StyledDiv>
    {/* <a href='chrome://apps' target='_blank' rel='noopener noreferrer'> */}
    {/* <a href='chrome-search://local-ntp/local-ntp.html' target='_blank' rel='noopener noreferrer'> */}
    <div className='linkWrapper'>
    <span className='links' >Links</span>
      <BiSearch className='icon'/>
      </div>
    <div className='inputWrapper'>
      <form>
      <label htmlFor='search'/>
      <input type='text' id='search'/>
      <IoLogoGoogle className='googleBtn' onClick={openModal}/>
    </form>
    </div>
    </StyledDiv>
    {/* {searchModal && <ModalSearch />} */}
    <ModalSearch />
    </>
  );
}

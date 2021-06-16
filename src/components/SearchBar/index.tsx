import React, { useEffect, useState } from 'react';
import { useOrders } from '../../hooks/useOrders';
import { SearchBarContainer } from './styles';
import IconBusca from '../../assets/icon-busca.png';
// import { Container } from './styles';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const { handleSearch } = useOrders();
    useEffect(() => {}, [searchText]);
    function handleSearchText(e: any) {
        setSearchText(e.target.value);
        handleSearch(e.target.value);
    }
    return (
        <SearchBarContainer>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchText}
                placeholder="Buscar receita..."
            />
            <img src={IconBusca} alt="Busca" />
        </SearchBarContainer>
    );
};

export default SearchBar;

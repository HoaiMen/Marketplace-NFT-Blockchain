import React, { useContext, useState } from "react";
import { Stack, InputGroup, Input, Button, InputRightElement } from '@chakra-ui/react'
import { HomeContext } from "../contexts/HomeContext";
const Search = () => {
    const { keyWord, setKeyWord, handleSearch } = useContext(HomeContext)

    return (
        <Stack direction={'row'} w="full">
            <InputGroup w="full">
                <Input bg="white" pr="4.5rem" type="text" placeholder="Tìm kiếm sản phẩm" value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
                <InputRightElement width="4.5rem">
                    <Button
                        colorScheme="green"
                        h="1.75rem"
                        size="sm"
                        onClick={handleSearch}
                    >
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Stack>
    );
}
export default Search;
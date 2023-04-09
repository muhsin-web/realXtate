import React, { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues  } from "../utils/filtersData";



const SearchFilter = () => {
  const router = useRouter()
  const [filters, setFilters] = useState(filterData)
  const searchProperties = (filterValues) => {
        const path = router.pathname;
        const {query} = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
          if(item.value && filterValues?.[item.name]){
            query[item.name] = item.value;
          }
        })

        router.push({pathname: path, query})
  }
  return(
    <Flex bg="gray.100" flexWrap="wrap" p="4" justifyContent="center">
        {filters.map((filter) => (
          <Box key={filter.queryName}>
              <Select
              p="2"
              w="fit-content"
              placeholder={filter.placeholder}
              onChange={(e) => searchProperties({ [filter.queryName]: e.target.value})}>
                    {filter?.items?.map((item) => (
                      <option
                      value={item.value} key={item.value}>
                        {item.name}
                      </option>
                    ))}
              </Select>
          </Box>
        ))}
    </Flex>
 )
}

export default SearchFilter;

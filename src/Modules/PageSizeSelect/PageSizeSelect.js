import { Select } from "@chakra-ui/react";
import React from "react";

const PageSizeSelect = ({ pageSize, handlePageSizeChange, options }) => (
    <Select
        value={pageSize}
        background="white"
        onChange={(e) => handlePageSizeChange(Number(e.target.value))}
        mb={4}
        borderRadius="15px"
        width="150px"
    >
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.value} items
            </option>
        ))}
    </Select>
);

export default React.memo(PageSizeSelect)
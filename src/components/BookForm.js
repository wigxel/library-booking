import React from "react";

import { H1, H3, Paragraph } from './Text';
import { Input, Checker } from "@wigxel/react-components";

const SearchBookForm = props => {
  return (
    <div className="w-full invert-bg py-10">
      <div className="container mx-auto">
        <H3 className="mb-4">
          Search for book:
        </H3>

        <Paragraph className="ml-3 mb-2">
         - By Book Title :
        </Paragraph>
        <Input 
          className=" ml-3 mb-4 w-7/12"
          placeholder="Book Title"
          type="text"
          name="book_Title"
        />

        <br />

        <Paragraph className="ml-3 mb-2">
         - By Author :
        </Paragraph>
        <Input 
          className=" ml-3 mb-4 w-7/12"
          placeholder="Author Names"
          type="text"
          name="book_Title"
        />

        <br />

        <div className="ml-3">
          <Checker  
            buttons={["Primary 1- 6", "Jss 1 - 3", "Sss 1- 3", "Teachers"]}
            canClear={false}
            disabled={false}
            label="By Category"
            name=""
            onChange={props.onChange}
          />

        </div>

      </div>
    </div>
  )
}

export default SearchBookForm
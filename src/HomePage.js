import React from "react";
import HomePageLayout from "./views/HomePageLayout";
import { LayoutProvider } from './libs/LayoutStore';
import styled, { css } from "@wigxel/react-components";


import { H1, H3, Paragraph } from './components/Text';
import SearchBookForm from "./components/BookForm";

const StyledHeroBg = styled.div`
  position: absolute;
  right: 0;
  bottom: -25%;
  background-image: url("/assets/images/library.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
`


const HomePage = () => {
  return (
    <LayoutProvider>
      <HomePageLayout>
        <div className="container flex justify-between mx-auto pb-20 relative bg-grid">
          <div className="my-20 mb-3">
            <H1 className="mb-3">
              <span className="text-blue-500 block -mb-5">
                Borrow any Book 
              </span> 
              From the School Library
            </H1>
            <Paragraph className="text-xl">
              Just select the book below.
            </Paragraph>
          </div>
          <StyledHeroBg className="min-h-full w-5/12" />

        </div>

        <SearchBookForm />



      </HomePageLayout>
  </LayoutProvider>
  );
};

export default HomePage;

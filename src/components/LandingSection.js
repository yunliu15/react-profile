import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Yun!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size='2xl'
        name='Pete'
        src="/AvatarYun2.png"
      />
      <Heading as='h3' size='md' noOfLines={1} mb={8}>{ greeting }</Heading>
      <Heading as='h1' size='4xl' noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as='h2' size='3xl' noOfLines={1}>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

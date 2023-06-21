import {
  Button as ChakraButton,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  UnorderedList,
  ListItem as ChakraListItem,
  Text,
  Heading as ChakraHeading,
} from '@chakra-ui/react';

const Button = (props) => {
  return (
    <ChakraButton
      color="gray.black"
      display="inline-block"
      p="0.5rem 1rem"
      borderColor="gray.black"
      borderWidth="1px"
      borderRadius="4px"
      backgroundColor="gray.white"
      {...props}
    />
  );
};

// Define your Input
const Input = (props) => {
  return (
    <ChakraInput
      color="gray.black"
      cursor="auto"
      p="0.5rem 1rem"
      borderColor="gray.black"
      borderWidth="1px"
      borderRadius="4px"
      backgroundColor="gray.white"
      {...props}
    />
  );
};

// Define your Textarea
const Textarea = (props) => {
  return (
    <ChakraTextarea
      color="gray.black"
      cursor="auto"
      p="0.5rem"
      borderColor="gray.black"
      borderWidth="1px"
      borderRadius="4px"
      backgroundColor="gray.white"
      {...props}
    />
  );
};

// Define your List
const List = (props) => {
  return (
    <UnorderedList
      w="100%"
      m="1em 0px 1em 0px"
      display="block"
      p="0px 0px 0px 1.5rem"
      listStyleType="none"
      {...props}
    />
  );
};

// Define your ListItem
const ListItem = (props) => {
  return <ChakraListItem display="list-item" {...props} />;
};

// Define your Content
const Content = (props) => {
  return (
    <Text
      fontSize="16px"
      fontFamily="Inter"
      fontWeight="400"
      lineHeight="1.15"
      textTransform="none"
      textDecoration="none"
      {...props}
    />
  );
};

// Define your Heading
const Heading = (props) => {
  return (
    <ChakraHeading
      fontSize="32px"
      fontFamily="Inter"
      fontWeight="700"
      lineHeight="1.15"
      textTransform="none"
      textDecoration="none"
      {...props}
    />
  );
};

export { Button, Input, Textarea, List, ListItem, Content, Heading };

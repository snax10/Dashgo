import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Carlos Santos</Text>
        <Text color="gray.300" fontSize="small">carlos_santos0702@hotmail.com</Text>
      </Box>

      <Avatar size="md" name="Carlos Santos" src="https://github.com/snax10.png" />
    </Flex>
  );
}
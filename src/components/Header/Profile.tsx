import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Carlos Santos</Text>
          <Text color="gray.300" fontSize="small">carlos_santos0702@hotmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Carlos Santos" src="https://github.com/snax10.png" />
    </Flex>
  );
}
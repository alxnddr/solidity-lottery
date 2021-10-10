import * as React from "react";
import { Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Card } from "./Card";
import { ParticipateForm } from "./ParticipateForm";

interface LotteryProps {
  participantsCount: number;
  balance: number;
}

export const Lottery = ({ participantsCount, balance }: LotteryProps) => (
  <Box
    as="section"
    bgGradient={{ md: "linear(to-r, pink.600, purple.600)" }}
    py="20"
    minHeight="100vh"
  >
    <Card maxW="xl" mx="auto" textAlign="center">
      <Stack maxW="xs" mx="auto" spacing="12">
        <Stack spacing="3">
          <Heading as="h1" letterSpacing="tight">
            Lottery
          </Heading>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {participantsCount} participants competing to win {balance} ether
          </Text>
        </Stack>

        <ParticipateForm onSubmit={(e) => e.preventDefault()} />
      </Stack>
    </Card>
  </Box>
);

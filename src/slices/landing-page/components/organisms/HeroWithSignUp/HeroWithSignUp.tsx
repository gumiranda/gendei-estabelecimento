import { Box, SimpleGrid, Stack } from "@/shared/ui";
import { HeroImage, HeroSubtitle, HeroTitle, SignUpForm } from "./components";

export const HeroWithSignUp = () => {
  return (
    <Box m={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 16, md: 64 }}>
        <Stack gap={{ base: 8, md: 12 }} justifyContent="center">
          <Stack gap={{ base: 4, md: 6 }}>
            <HeroTitle />
            <HeroSubtitle />
          </Stack>
          <SignUpForm />
        </Stack>
        <Stack gap={{ base: 8, md: 12 }} justifyContent="center">
          <HeroImage />
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

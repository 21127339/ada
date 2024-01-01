import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import GithubCorner from "components/GtihubCorner";

const HomePage = () => {
    return (
        <Center h={'100vh'}>
            <Stack>
                <Heading>React + Chakra UI</Heading>
                <Text>Create React App. Bo333ilerplate. Docker.</Text>
            </Stack>

            <GithubCorner />
        </Center>
    )
}

export default HomePage;
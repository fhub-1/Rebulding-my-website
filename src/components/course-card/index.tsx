import {
    VStack,
    useColorModeValue as mode,
    Stack,
    Heading,
    Text,
    LinkOverlay,
    LinkBox
} from "@chakra-ui/react";
import { url } from "inspector";
import { Course } from "../../../types/Course";
import ExternalLink from "../external-link";
type Props = Course;

const CourseCard = ({ title, description, url }: Props) => {
    const courseDomain = url.split('/',)[2]
    return (
        < LinkBox as="article">
            <VStack
                p={4} spacing={3}
                bg={mode("gray.100", "gray.700")}
                rounded="md"
                alignItems="flex-start"
            >
                <Stack
                    w="full"
                    direction={{ base: "column", md: "row" }}
                    justifyContent={{ base: "flex-start", md: "space-between" }}
                    alignItems={{ base: "flex-start", md: "center" }}
                >
                    <Heading size='sm' weight='semibold'>{title}</Heading>
                    <LinkOverlay href={url} target='_blank'>
                        <ExternalLink>
                            <Text fontSize='sm' color="inherit">{courseDomain}</Text>
                        </ExternalLink>
                    </LinkOverlay>

                </Stack>
                <Text fontSize="sm">{description}</Text>
            </VStack>
        </LinkBox>
    );
};

export default CourseCard;

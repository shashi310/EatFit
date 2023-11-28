import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  const arr = new Array(5).fill(0)
  const facebookIcon = <FontAwesomeIcon fade size="lg" icon={faFacebook} />;
  const instaIcon = <FontAwesomeIcon fade size="lg" icon={faInstagram} />;
  const linkedinIcon = <FontAwesomeIcon fade size="lg" icon={faLinkedin} />;

  return (
    <Box w="100%" p="20px" bg="rgb(48, 40, 161)">
      <Box w="90%" m="auto" fontFamily="none" fontSize="13px" color="white">
        <Image
          w="120px"
          src="https://djgt4pi2uqo7n.cloudfront.net/prod/assets/images/eatfit-white-footer.svg"
          alt="logo"
        />
        <br />
      </Box>
      <Box w="90%" m="auto">
        <Heading fontSize="22px" color="rgb(45, 160, 255)">
          SITE MAP
        </Heading>
        <br />

        <SimpleGrid
          w="100%"
          gap="20px"
          color="white"
          columns={{ base: "2", sm: "3", md: "4", lg: "6", xl: "6" }}
        >
          {arr.map((ele, ind) => (
            <Box>
              <Text fontWeight="bold" mb="10px" textDecoration="underline">
                Our Partners
              </Text>
              <Text>All Brands</Text>
              <Text>Fruit Pop</Text>
              <Text>BreakFast</Text>
              <Text>My-Orders</Text>
              <Text>All Products</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <br />

      <Text
        color="rgb(45, 59, 255)"
        textAlign="center"
        fontWeight="bold"
        fontSize="20px"
      >
        Follow us on
      </Text>
      <Text color="white" textAlign="center" fontSize="18px">
        {facebookIcon} {instaIcon} {linkedinIcon}
      </Text>
    </Box>
  );
}

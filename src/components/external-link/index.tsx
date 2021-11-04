import { Link, LinkProps, Icon, useColorModeValue } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
  const iconColor = useColorModeValue("gray.700", "white");
  return (
    <Link
      {...linkProps}
      color="purple.500"
      display="inline-flex"
      alignItems="center"
      isExternal
      target="_blank"
    >
      {children}
      <Icon as={FiArrowUpRight} color={iconColor} display="inline" />
    </Link>
  );
};

export default ExternalLink;

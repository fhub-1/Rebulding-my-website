import { Link, LinkProps, Icon } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

const ExternalLink = ({ children, ...linkProps }: LinkProps) => {
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
      <Icon as={FiArrowUpRight} color="gray.700" display="inline" />
    </Link>
  );
};

export default ExternalLink;

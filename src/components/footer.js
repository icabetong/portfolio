import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, Stack } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import locales from "../shared/locales";

const Footer = () => {
  const { t } = useTranslation();
  const references = [
    { icon: FaGithub, target: 'https://www.github.com/icabetong' },
    { icon: FaLinkedinIn, target: 'https://www.linkedin.com/in/isaiah-collins-284a27185/' },
    { icon: FaEnvelope, target: 'mailto:isaiahcollins_02@live.com' },
    { icon: FaTwitter, target: 'https://www.twitter.com/icabetong' },
    { icon: FaInstagram, target: 'https://www.instagram.com/izayakorinzu/' },
  ]

  return (
    <Flex
      as="footer"
      direction="column"
      minHeight="10vh"
      align="center"
      justifyContent="center"
      p={4}>

      <Stack
        direction="row">
        {references.map((reference) => {
          return (
            <IconButton
              rel="noopener"
              role="link"
              key={reference.target}
              variant="link"
              as="a"
              target="_blank"
              href={reference.target}
              py={2}
              _hover={{
                backgroundColor: "blue.800",
                transition: 'all 500ms ease'
              }}>
              {React.createElement(reference.icon, { size: 24 })}
            </IconButton>
          )
        })}
      </Stack>
      <Box my={4} textAlign="center">
        <Trans
          i18nKey="footer.copyright"
          values={{ me: t("me") }}
          components={{
            focus: <Box as="span" color="cyan.500"/>
          }}/>
      </Box>
    </Flex>
  );
}

export default Footer;
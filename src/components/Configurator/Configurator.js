/*!

=========================================================

=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)



=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra Imports
import {
  Box,
  Button,
  DarkMode,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  LightMode,
  Link,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import PropTypes from "prop-types";
import React, { useState } from "react";
import GitHubButton from "react-github-btn";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const [switched, setSwitched] = useState(props.isChecked);
  // Chakra Color Mode
  let fixedDisplay = "flex";
  if (props.secondary) {
    fixedDisplay = "none";
  }
  let colorButton = "white";
  const secondaryButtonBg = "transparent";
  const secondaryButtonBorder = "white";
  const secondaryButtonColor = "white";
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}>
        <DrawerContent
          boxShadow='unset !important'
          bg='linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)'
          backdropFilter='blur(42px)'>
          <DrawerHeader pt='24px' px='24px'>
            <DrawerCloseButton color='white' />
            <Text color='white' fontSize='xl' fontWeight='700' mt='16px'>
              ThunderBot
            </Text>
            <HSeparator />
          </DrawerHeader>
          <DrawerBody w='340px' ps='24px' pe='40px'>
            <Flex flexDirection='column'>
              {/* <Box
                display={fixedDisplay}
                justifyContent='space-between '
                mb='20px'>
                <DarkMode>
                  <Text color='white' fontSize='md' fontWeight='600' mb='4px'>
                    Navbar Fixed
                  </Text>
                  <DarkMode>
                    <Switch
                      colorScheme='brand'
                      isChecked={switched}
                      onChange={(event) => {
                        if (switched === true) {
                          props.onSwitch(false);
                          setSwitched(false);
                        } else {
                          props.onSwitch(true);
                          setSwitched(true);
                        }
                      }}
                    />
                  </DarkMode>
                </DarkMode>
              </Box> */}
              <Box>
                <Box>
                  <Link
                    href='https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra'
                    w='100%'
                    mb='16px'>
                    <Button
                      w='100%'
                      mb='16px'
                      variant='brand'
                      fontSize='xs'
                      px='30px'>
                      SEJA PRO
                    </Button>
                  </Link>
                  <Link
                    href='https://www.creative-tim.com/product/vision-ui-dashboard-chakra'
                    w='100%'
                    mb='16px'>
                    <Button
                      w='100%'
                      mb='16px'
                      variant='outlineWhite'
                      fontSize='xs'
                      px='30px'>
                      CONTATE-NOS
                    </Button>
                  </Link>
                  {/* <Link
                    href='https://demos.creative-tim.com/docs-vision-ui-dashboard-pro-chakra/'
                    w='100%'>
                    <Button
                      w='100%'
                      bg='white'
                      color='gray.800'
                      variant='no-hover'
                      fontSize='xs'
                      px='20px'
                      mb='16px'>
                      <Text textDecorationColor='none'>Documentation</Text>
                    </Button>
                  </Link> */}
                </Box>
                {/* <Flex
                  justifyContent='center'
                  alignItems='center'
                  w='100%'
                  mb='16px'>
                  <GitHubButton
                    href='https://github.com/creativetimofficial/vision-ui-dashboard-pro-chakra'
                    data-icon='octicon-star'
                    data-show-count='true'
                    aria-label='Star creativetimofficial/vision-ui-dashboard-pro-chakra on GitHub'>
                    Star
                  </GitHubButton>
                </Flex> */}
                {/* <Box w='100%'>
                  <Text color='white' mb='6px' textAlign='center'>
                    Thank you for sharing!
                  </Text>
                  <Flex justifyContent='center' alignContent='center'>
                    <Link
                      isExternal='true'
                      href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fvision-ui-dashboard-pro-chakra&text=Check%20vision%20UI%20Dashboard%20made%20by%20%40CreativeTim%20and%20%40simmmple_web%20%23webdesign%20%23dashboard%20%23chakra'>
                      <LightMode>
                        <Button
                          colorScheme='twitter'
                          leftIcon={<FaTwitter />}
                          me='10px'>
                          <Text>Tweet</Text>
                        </Button>
                      </LightMode>
                    </Link>
                    <Link
                      isExternal='true'
                      href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fvision-ui-dashboard-pro-chakra'>
                      <LightMode>
                        <Button
                          colorScheme='facebook'
                          leftIcon={<FaFacebook />}>
                          <Text>Share</Text>
                        </Button>
                      </LightMode>
                    </Link>
                  </Flex>
                </Box> */}
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.func,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};

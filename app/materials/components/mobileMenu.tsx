import {
  Center,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import NavLink from "./navlink";

export default function MobileMenu({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  const navLinks = ["Home", "Portfolio", "Contact", "Shop"];

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Center w="100%" paddingBlock="1.2rem">
            <Image
              src="/black_logo.svg"
              alt="logo"
              width={500}
              height={500}
              style={{ width: "3rem" }}
            />
          </Center>
        </ModalHeader>
        <ModalBody>
          <VStack spacing="1.2rem" paddingBottom="1rem">
            {navLinks.map((nav) => {
              return (
                <Link href={nav.toLowerCase()} onClick={onClose} key={nav}>
                  {nav}
                </Link>
              );
            })}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

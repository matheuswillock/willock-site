import { Flex, Link, Image} from "@chakra-ui/react";

export default function ContactArea() {
    return (
        <Flex alignItems='center' gap='6' justifyContent='space-around' marginTop='5.6rem'>
            <Link href="https://github.com/matheuswillock" isExternal>
                <Image
                    src="/github-mark-white.svg"
                    alt="github Matheus Willock"
                    width='2rem'
                />
            </Link>

            <Link href="https://www.linkedin.com/in/matheuswillock/" isExternal>
                <Image
                    src="/In-White-48.png"
                    alt="Linkedin Matheus Willock"
                    width='2rem'
                />
            </Link>
        </Flex>
    )

}
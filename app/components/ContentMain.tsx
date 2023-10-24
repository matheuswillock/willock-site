import { Flex, Heading, Text} from "@chakra-ui/react";

import ContactArea from './ContactArea';

export default function ContentMain() {
  return (
    <Flex alignItems='center' flexDirection='column' margin='10' >
      <Heading as='h1' fontSize='3.2rem' margin='2.6rem 0 3.2rem 0' alignSelf='flex-start'>
        Olá, Matheus Willock aqui! 👋
      </Heading>

      <Flex alignItems='center' flexDirection='column' gap='6' >
        <Text alignSelf='flex-start'>
          Sou um apaixonado desenvolvedor de software, dedicado à criação de soluções inovadoras.
        </Text>

        <Text>
          Tenho experiência em empresas de renome no mercado e estou sempre em busca de desafios que ampliem meu conhecimento e aprimorem minhas habilidades.
        </Text>

        <Heading as='h2' alignSelf='flex-start' fontSize='2.6rem' margin='2.6rem 0 0'>
          A minha Jornada até aqui...
        </Heading>        

        <Text>
          Atualmente, ocupo o cargo de Software Engineer na XP.Inc, contribuindo com o desenvolvimento de soluções .Net/C# de alta performance que vão desde integrações com CRM Salesforce até aplicações que contribuem com as audiencias de clientes. <br />Trabalhando sempre de forma colaborativa com equipes multidisciplinares, utilizando metodologias ágeis,  para criar aplicações personalizadas que atendem às necessidades dos nossos valiosos clientes.
        </Text>

        <Text>
          Antes de ingressar na XP.Inc, fui Software Engineer no Mercado Livre, onde tive a oportunidade de trabalhar com uma variedade de tecnologias, incluindo Java, Node.js e React. <br />Essa experiência diversificada me permitiu contribuir significativamente para o desenvolvimento de soluções inovadoras na plataforma Supermercado do Mercado Livre, que se tornaram um pilar fundamental no ecossistema da empresa.
        </Text>

        <Text fontSize='1.5rem' as='em' color='whiteAlpha.700' marginTop='0.8rem' >
          Acredito que o aprendizado contínuo e a paixão por inovação são fundamentais no mundo da tecnologia!
        </Text>
      </Flex>      

      <ContactArea />

    </Flex>
  )
  
}
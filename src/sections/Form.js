import React from 'react';
import { Box, Image, Flex, Button, Card,Text } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';




const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);






const Contact = () => (
  <Section.Container id="Me contacter" Background={Background}>
    <Section.Header name="Me contacter" />

    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Fade bottom>
      <Text
        fontWeight='bold'
        color='rgb(124, 55, 173)'
        fontfamily= 'Cabin'
        fontSize='48px'
            >

    Vous avez des questions, un projet ? </Text>
    </Fade>
    </Flex>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
    <Fade bottom>

          <Card
  fontSize={6}
  fontWeight='bold'
  width='75%'
  p={5}
  my={5}
  bg='#f6f6ff'
  borderRadius={8}
  boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
>



<Text
  fontWeight='bold'
  color='rgb(124, 55, 173)'
  fontfamily= 'Cabin'
  fontSize='24px'
      >

<i aria-hidden="true" class="fa fa-phone"></i> 0761649406 </Text>
<Text
  fontWeight='bold'
  color='rgb(124, 55, 173)'
  fontfamily= 'Cabin'
  fontSize='24px'
      >
<i class="fa fa-envelope" aria-hidden="true"></i> degryse-mehdi@outlook.fr </Text>
<Text
  fontWeight='bold'
  color='rgb(124, 55, 173)'
  fontfamily= 'Cabin'
  fontSize='24px'
      ><i class="fa fa-skype"></i> live:degryse-mehdi</Text>


</Card>
</Fade>
</Flex>






      

      <Fade right />

  </Section.Container>
);

export default Contact;

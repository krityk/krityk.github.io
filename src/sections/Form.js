import React from 'react';
import { Box, Image, Flex, Button } from 'rebass';
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
        <div>
          <h3> Vous avez des questions, un projet ?</h3>
          <a class="SocialLink__IconLink-sc-13bp2vw-0 dFGqYq">
          <span aria-hidden="true" class="fa fa-phone">0761649406</span></a>


          <div>

  </div>

          <form name="contact" method="POST" data-netlify="true" action="../src/sections/FormSend.js" >
          <Flex>
          <Box
    p={3}
    width={1/2}
    color='magenta'
    bg='black'>
    <p>Nom:</p>
    <p>Email:</p>
    <p>Message:</p>
    </Box>
    <Box
    p={3}
    width={1/2}
    color='magenta'
    bg='black'>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message" />
    </Box>
    </Flex>


              <Button variant='primary' type="submit">Send</Button>

          </form>
        </div>
      </Fade>

      <Fade right />
    </Flex>
  </Section.Container>
);

export default Contact;

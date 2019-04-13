import React from 'react';
import { Box, Image, Flex, Button, Card } from 'rebass';
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

const iStyle = {
  font: 'normal normal normal 14px/1 FontAwesome',
    font-size: 'inherit',
    text-rendering: 'auto',
    -webkit-font-smoothing: 'antialiased',
  };




const Contact = () => (
  <Section.Container id="Me contacter" Background={Background}>
    <Section.Header name="Me contacter" />

    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Fade bottom>
        <div>
          <h3> Vous avez des questions, un projet ?</h3>


   <span><i aria-hidden="true" class="fa fa-phone" style={iStyle}></i> 0761649406</span>
   <span><i class="fa fa-envelope" aria-hidden="true"></i> Degryse-mehdi@outlook.fr</span>
  <span><i class="fa fa-skype"></i> Obeh #3605 </span>








        </div>
      </Fade>

      <Fade right />
    </Flex>
  </Section.Container>
);

export default Contact;

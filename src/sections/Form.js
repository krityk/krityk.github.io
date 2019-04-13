import React from 'react';
import { Box, Image, Flex, Button } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import SocialLink from '../components/SocialLink';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';



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

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;



const Contact = () => (
  <Section.Container id="Me contacter" Background={Background}>
    <Section.Header name="Me contacter" />

    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Fade bottom>
        <div>
          <h3> Vous avez des questions, un projet ?</h3>

          <Card
  fontSize={6}
  fontWeight='bold'
  width={[ 1, 1, 1/2 ]}
  p={5}
  my={5}
  bg='#f6f6ff'
  borderRadius={8}
  boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
>
  Card
</Card>



        </div>
      </Fade>

      <Fade right />
    </Flex>
  </Section.Container>
);

export default Contact;

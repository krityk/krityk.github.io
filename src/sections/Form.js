import React from 'react';
import { Box, Image, Flex } from 'rebass';
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

const Form = () => (
  <Section.Container id="Form" Background={Background}>
    <Section.Header name="Me contacter" />

    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Fade bottom>
        <div>
          <h3> Vous avez des questions, un projet ? n'hesitez pas lol </h3>

          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Nom: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Adresse Mail: <input type="email" name="email" />
              </label>
            </p>

            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </Fade>

      <Fade right />
    </Flex>
  </Section.Container>
);

export default Form;

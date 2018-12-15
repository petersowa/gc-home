import React from 'react';
import { Item, Title, P } from './Layout/ui';
import { MarkdownContent } from './Markdown';

const Project = () => (
  <div>
    <Item>
      <Title>Fire Todo</Title>
      <P>
        An open source project with code available on{' '}
        <a href="https://github.com/petersowa/starter-react-app">GitHub</a>.
      </P>
      <P>
        A multi-user todo list application. A signup is available to create a
        new account or a Google login account be used.
      </P>
      <P>
        Take a look at{' '}
        <a href="https://firetodo.devspeter.space">firetodo.devspeter.space</a>
      </P>
    </Item>
    <Item>
      <Title>Year Date App</Title>
      <P>
        Take a look at{' '}
        <a href="https://year-date-page.stackblitz.io">Year Date</a>
      </P>
    </Item>
    <Item>
      <Title>My GitHub Page</Title>
      <P>
        Take a look at{' '}
        <a href="https://github.com/petersowa">GitHub projects.</a>
      </P>
    </Item>
    <Item>
      <MarkdownContent inputMarkdown={require('../md-pages/About.md')} />
    </Item>
  </div>
);

export default Project;

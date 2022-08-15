import React from 'react';
import { Text } from '../../index';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Foundation/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const CONTENT = 'The quick brown fox jumps over the lazy dog.';

export const Story = () => (
  <div className="flex flex-col space-y-8">
    <Text variant="hero">{CONTENT}</Text>
    <Text variant="display">{CONTENT}</Text>
    <Text variant="heading">{CONTENT}</Text>
    <Text variant="body">{CONTENT}</Text>
    <Text link href="https://www.google.com/">
      {CONTENT}
    </Text>
    <Text link href="https://www.google.com/" external>
      {CONTENT}
    </Text>
    <Text clickable>{CONTENT}</Text>
  </div>
);

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}>{CONTENT}</Text>;

export const Hero = Template.bind({});
Hero.args = {
  variant: 'hero',
};

export const Display = Template.bind({});
Display.args = {
  variant: 'display',
};

export const Heading = Template.bind({});
Heading.args = {
  variant: 'heading',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body',
};

export const Link = Template.bind({});
Link.story = {
  name: 'Link (Anchor)',
};
Link.args = {
  link: true,
  href: 'https://www.google.com',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  link: true,
  href: 'https://www.google.com',
  external: true,
};

export const ExternalLinkWithoutIcon = Template.bind({});
ExternalLinkWithoutIcon.args = {
  link: true,
  href: 'https://www.google.com',
  external: true,
  hideExternalLinkIcon: true,
};

export const Clickable = Template.bind({});
Clickable.story = {
  name: 'Clickable (Button)',
};
Clickable.args = {
  clickable: true,
};

export const API = Template.bind({});

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from '../../index';
import { bannerVariant, bannerSize, bannerRounded } from './markdowns';
import { BannerProps } from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
  markdown: 'banner',
  parameters: {
    componentSubtitle: 'Banners contain messages that communicate information to the user.',
    status: 'released',
  },
} as ComponentMeta<typeof Banner>;

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat ac ex non dictum. Ut rutrum nibh sed placerat tempus.';

export const Story = (args: BannerProps) => (
  <div className="flex flex-col space-y-4">
    <Banner variant="default" size="default" title="Title" content={loremText} rounded />
    <Banner variant="info" size="default" title="Title" content={loremText} rounded />
    <Banner variant="dark" size="default" title="Title" content={loremText} rounded />
    <Banner variant="brand" size="default" title="Title" content={loremText} rounded />
    <Banner variant="danger" size="default" title="Title" content={loremText} rounded />
    <Banner variant="warning" size="default" title="Title" content={loremText} rounded />
    <Banner variant="success" size="default" title="Title" content={loremText} rounded />
  </div>
);

export const Variant = (args: BannerProps) => (
  <div className="flex flex-col space-y-4">
    <Banner variant="default" size="default" title="Title" content={loremText} rounded />
    <Banner variant="info" size="default" title="Title" content={loremText} rounded />
    <Banner variant="dark" size="default" title="Title" content={loremText} rounded />
    <Banner variant="brand" size="default" title="Title" content={loremText} rounded />
    <Banner variant="danger" size="default" title="Title" content={loremText} rounded />
    <Banner variant="warning" size="default" title="Title" content={loremText} rounded />
    <Banner variant="success" size="default" title="Title" content={loremText} rounded />
  </div>
);

Variant.story = {
  name: 'Banner Variants',
  parameters: {
    markdown: 'banner',
    layout: 'centered',
    docs: {
      storyDescription: bannerVariant,
    },
    code: false,
  },
};

export const Size = (args: BannerProps) => (
  <div className="flex flex-col space-y-4">
    <Banner variant="default" size="default" title="Title" content={loremText} rounded />
    <Banner variant="default" size="compact" title="Title" content={loremText} rounded />
  </div>
);

Size.story = {
  name: 'Banner Sizes',
  parameters: {
    markdown: 'banner',
    layout: 'centered',
    docs: {
      storyDescription: bannerSize,
    },
    code: false,
  },
};

export const Rounded = (args: BannerProps) => (
  <div className="flex flex-col space-y-4">
    <Banner variant="success" size="default" title="Title" content={loremText} rounded />
    <Banner variant="success" size="default" title="Title" content={loremText} />
  </div>
);

Rounded.story = {
  name: 'Rounded Banner',
  parameters: {
    markdown: 'banner',
    layout: 'centered',
    docs: {
      storyDescription: bannerRounded,
    },
  },
};

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;
export const API = Template.bind({});
API.args = {
  title: 'TItle',
  content: loremText,
};

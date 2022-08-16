import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '../../index';

export default {
  title: 'Foundation/Image',
  component: Image,
  parameters: {
    componentSubtitle: 'An image is visual representation of an information.',
    status: 'released',
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Story = () => (
  <div className="flex space-x-8">
    <Image src="https://picsum.photos/200/200" alt="Image" />
    <Image src="https://picsum.photos/200/200" alt="Image" rounded="large" />
    <Image src="https://picsum.photos/200/200" alt="Image" rounded="full" />
    <Image src="https://picsum.photos/200/200" alt="Image" rounded="none" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Image',
};

export const DefaultRounded = Template.bind({});
DefaultRounded.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Image',
  rounded: 'default',
};

export const LargeRounded = Template.bind({});
LargeRounded.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Image',
  rounded: 'large',
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Image',
  rounded: 'full',
};

export const NotRounded = Template.bind({});
NotRounded.args = {
  src: 'https://picsum.photos/200/200',
  alt: 'Image',
  rounded: 'none',
};

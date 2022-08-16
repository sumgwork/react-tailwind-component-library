import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../index';
import { buttonVariant, buttonIcon, buttonSize, buttonDisabled, fullWidthButton } from './markdowns';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' }, onBlur: { action: 'blurred' } },
  markdown: 'button',
  parameters: {
    componentSubtitle:
      'Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.',
    status: 'released',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Story = () => (
  <div className="flex flex-row space-x-4 justify-center">
    <div className="flex flex-col space-y-4 flex-wrap align-bottom">
      <Button>Label</Button>
      <Button variant="brand">Label</Button>
      <Button variant="fade">Label</Button>

      <Button size="compact">Label</Button>
      <Button size="compact" variant="brand">
        Brand
      </Button>
      <Button size="compact" variant="fade">
        Fade
      </Button>

      <Button size="large">Label</Button>
      <Button size="large" variant="brand">
        Brand
      </Button>
      <Button size="large" variant="fade">
        Fade
      </Button>
    </div>
    <div className="flex flex-col space-y-4 flex-wrap align-bottom">
      <Button iconLeft="Tag">Label</Button>
      <Button iconLeft="Tag" variant="brand">
        Label
      </Button>
      <Button iconLeft="Tag" variant="fade">
        Label
      </Button>

      <Button iconLeft="Tag" size="compact">
        Label
      </Button>
      <Button iconLeft="Tag" size="compact" variant="brand">
        Brand
      </Button>
      <Button iconLeft="Tag" size="compact" variant="fade">
        Fade
      </Button>

      <Button iconLeft="Tag" size="large">
        Default
      </Button>
      <Button iconLeft="Tag" size="large" variant="brand">
        Brand
      </Button>
      <Button iconLeft="Tag" size="large" variant="fade">
        Fade
      </Button>
    </div>

    <div className="flex flex-col space-y-4 flex-wrap align-bottom">
      <Button iconRight="Tag">Label</Button>
      <Button iconRight="Tag" variant="brand">
        Label
      </Button>
      <Button iconRight="Tag" variant="fade">
        Label
      </Button>

      <Button iconRight="Tag" size="compact">
        Label
      </Button>
      <Button iconRight="Tag" size="compact" variant="brand">
        Brand
      </Button>
      <Button iconRight="Tag" size="compact" variant="fade">
        Fade
      </Button>

      <Button iconRight="Tag" size="large">
        Default
      </Button>
      <Button iconRight="Tag" size="large" variant="brand">
        Brand
      </Button>
      <Button iconRight="Tag" size="large" variant="fade">
        Fade
      </Button>
    </div>

    <div className="flex flex-col space-y-4 flex-wrap align-bottom">
      <Button iconLeft="Tag" iconRight="Tag">
        Label
      </Button>
      <Button iconLeft="Tag" iconRight="Tag" variant="brand">
        Label
      </Button>
      <Button iconLeft="Tag" iconRight="Tag" variant="fade">
        Label
      </Button>

      <Button iconLeft="Tag" iconRight="Tag" size="compact">
        Label
      </Button>
      <Button iconLeft="Tag" iconRight="Tag" size="compact" variant="brand">
        Brand
      </Button>
      <Button iconLeft="Tag" iconRight="Tag" size="compact" variant="fade">
        Fade
      </Button>

      <Button iconLeft="Tag" iconRight="Tag" size="large">
        Default
      </Button>
      <Button iconLeft="Tag" iconRight="Tag" size="large" variant="brand">
        Brand
      </Button>
      <Button iconLeft="Tag" iconRight="Tag" size="large" variant="fade">
        Fade
      </Button>
    </div>
  </div>
);

export const Variant = () => (
  <div className="flex flex-row space-x-4">
    <Button variant="default">Default</Button>
    <Button variant="brand">Brand</Button>
    <Button variant="fade">Fade</Button>
  </div>
);

Variant.story = {
  name: 'Button Variants',
  parameters: {
    markdown: 'button',
    layout: 'centered',
    docs: {
      storyDescription: buttonVariant,
    },
    code: false,
  },
};

export const Size = () => (
  <div className="flex flex-row space-x-4">
    <Button size="default">Default</Button>
    <Button size="large">Large</Button>
    <Button size="compact">Compact</Button>
  </div>
);

Size.story = {
  name: 'Button Sizes',
  parameters: {
    markdown: 'button',
    layout: 'centered',
    docs: {
      storyDescription: buttonSize,
    },
  },
};

export const Icon = () => (
  <div className="flex flex-row space-x-4">
    <Button iconLeft="Calendar">Left</Button>
    <Button iconRight="Check">Right</Button>
    <Button iconLeft="ChevronLeft" iconRight="ChevronRight">
      Both
    </Button>
    <Button iconLeft="Plus"></Button>
    <Button iconRight="Minus"></Button>
    <Button iconLeft="Plus" iconRight="Minus"></Button>
  </div>
);

Icon.story = {
  name: 'Button with Icon',
  parameters: {
    markdown: 'button',
    layout: 'centered',
    docs: {
      storyDescription: buttonIcon,
    },
  },
};

export const Disabled = () => (
  <div className="flex flex-row space-x-4">
    <Button disabled>Disabled</Button>
    <Button variant="brand" disabled>
      Disabled
    </Button>
    <Button variant="fade" disabled>
      Disabled
    </Button>
  </div>
);

Disabled.story = {
  name: 'Disabled Button',
  parameters: {
    markdown: 'button',
    layout: 'centered',
    docs: {
      storyDescription: buttonDisabled,
    },
  },
};

export const Loading = () => (
  <div className="flex flex-row space-x-4">
    <Button isLoading minWidth={160}>
      Save
    </Button>
    <Button variant="brand" isLoading>
      Submit
    </Button>
  </div>
);

Loading.story = {
  name: 'In Loading State',
  parameters: {
    markdown: 'button',
    docs: {
      storyDescription: fullWidthButton,
    },
  },
};

export const Block = () => (
  <div className="flex flex-col space-y-4">
    <Button block>Block</Button>
    <Button size="large" block>
      Block
    </Button>
    <Button size="compact" block>
      Block
    </Button>
  </div>
);

Block.story = {
  name: 'Block / Full Width',
  parameters: {
    markdown: 'button',
    docs: {
      storyDescription: fullWidthButton,
    },
  },
};

export const API = Template.bind({});

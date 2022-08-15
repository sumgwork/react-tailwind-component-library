import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../../index';
import * as icons from '../../icons';

export default {
  title: 'Foundation/Icons',
  component: Icon,
  parameters: {
    componentSubtitle: 'Icons are visual representations of commands, devices, directories, or common actions.',
    status: 'released',
  },
} as ComponentMeta<typeof Icon>;

const iconNames = Object.keys(icons) as (keyof typeof icons)[];

export const Icons = () => {
  return (
    <div className="flex flex-wrap">
      {iconNames.map((iconName) => (
        <div key={iconName} className="border rounded p-4 m-4 text-center w-40">
          <div className="flex align-middle justify-center pb-2">
            <Icon name={iconName} className="text-primary-base" width={40} />
          </div>
          <hr />
          <div className="pt-2">"{iconName}"</div>
        </div>
      ))}
    </div>
  );
};

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const WithName = Template.bind({});
WithName.args = {
  name: 'Calendar',
};

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
  name: 'Check',
  height: 200,
  width: 200,
};

export const WithColor = Template.bind({});
WithColor.args = {
  name: 'Close',
  height: 200,
  width: 200,
  color: 'error',
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  name: 'Check',
  height: 200,
  width: 200,
  color: 'inherit',
  className: 'text-success-dark',
};

export const AsTextVariant = Template.bind({});
AsTextVariant.args = {
  name: 'Check',
  variant: 'hero',
  size: 2,
};

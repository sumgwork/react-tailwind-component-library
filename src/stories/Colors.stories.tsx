import React from 'react';
import { Text } from '../index';

export default {
  title: 'Foundation/Colors',
};

const ColorCard = ({ label, colors }: { label: string; colors: string[] }) => (
  <div className="p-4">
    <Text tag="h2" variant="heading" weight="bold" size={2}>
      {label}
    </Text>
    <div className="flex flex-wrap mb-4">
      {colors.map((color) => (
        <Color bgClassName={color} key={color} />
      ))}
    </div>
    <hr />
  </div>
);

/**
 * This component is just a workaround for making sure that all color classes
 * are purged/included from the storybook when tailwindcss (v3) compiler executes.
 *
 * These colors are defined in design system but not utilised yet in the component library.
 */
const PurgeHelper = () => (
  <>
    {/* <div className="bg-success-fade" />
    <div className="bg-primary-fade">
    <div className="bg-primary-base">
    <div className="bg-primary-light">
    <div className="bg-primary-dark">
    <div className="bg-highlight-fade">
    <div className="bg-highlight-base">
    <div className="bg-highlight-light">
    <div className="bg-highlight-dark">
<div className="bg-success-base" />
    <div className="bg-success-dark" />
    <div className="bg-success-fade" />
    <div className="bg-danger-base" />
    <div className="bg-danger-dark" />
    <div className="bg-danger-fade" /><div className="bg-warning-base" />
    <div className="bg-warning-dark" />
    <div className="bg-warning-fade" />
    <div className="bg-info-base" />
    <div className="bg-info-dark" />
    <div className="bg-info-fade" />
    <div className="bg-gray-0" />
    <div className="bg-gray-50" />
    <div className="bg-gray-100" />
    <div className="bg-gray-200" />
    <div className="bg-gray-300" />
    <div className="bg-gray-400" />
    <div className="bg-gray-600" />
    <div className="bg-gray-800" />
    <div className="bg-gray-900" />
    <div className="bg-gray-1000" />
    <div className="bg-focused" />
    <div className="bg-hover" /> */}
  </>
);

const Color: React.FC<{
  bgClassName: string;
}> = ({ bgClassName }) => (
  <div className="mr-4 mt-4">
    <div className={`block bg-${bgClassName} w-32 h-12`} />
    <Text tag="div" className="text-center" size={2}>
      {bgClassName}
    </Text>
  </div>
);

export const Colors = () => (
  <>
    <PurgeHelper />
    <Text tag="h1" variant="heading" weight="bold" size={1}>
      Colors
    </Text>

    <ColorCard label="Primary" colors={['primary-base', 'primary-light', 'primary-dark', 'primary-fade']} />
    <ColorCard label="Highlight" colors={['highlight-base', 'highlight-light', 'highlight-dark', 'highlight-fade']} />
    <ColorCard label="Success" colors={['success-base', 'success-dark', 'success-fade']} />
    <ColorCard label="Info" colors={['info-base', 'info-dark', 'info-fade']} />
    <ColorCard label="Danger" colors={['danger-base', 'danger-dark', 'danger-fade']} />
    <ColorCard label="Warning" colors={['warning-base', 'warning-dark', 'warning-fade']} />
    <ColorCard label="Gray" colors={['gray-0', 'gray-50', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-600', 'gray-800', 'gray-900', 'gray-1000']} />
    <ColorCard label="Accessibility" colors={['focused', 'hover']} />
  </>
);

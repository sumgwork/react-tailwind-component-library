import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as icons from '../../icons';
import classnames from 'classnames';
import { Text } from '../../index';
import { ThemeContext } from '../../context/ThemeContext';

export const VALID_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'] as const;
export const TEXT_VARIANTS = ['hero', 'display', 'heading', 'body'] as const;
export const TEXT_WEIGHTS = ['bold', 'medium', 'regular', 'light'] as const;
export const TEXT_SIZES = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export interface ITextProps {
  /**
   * Defines whether the text is displayed as hero, display, heading, or body
   * @default body
   */
  variant?: typeof TEXT_VARIANTS[number];
  /**
   * Defines whether the text is regular, bold, medium, or light
   * @default regular
   */
  weight?: typeof TEXT_WEIGHTS[number];
  /**
   * Defines size of text, with 1 being the largest and 9 being the smallest
   * @default 1
   */
  size?: typeof TEXT_SIZES[number];
}

export const textPropTypes = {
  variant: PropTypes.oneOf(TEXT_VARIANTS),
  weight: PropTypes.oneOf(TEXT_WEIGHTS),
  size: PropTypes.oneOf(TEXT_SIZES),
};

export const ICON_COLORS = ['inherit', 'default', 'highlight', 'white', 'brand', 'success', 'error', 'info'] as const;
export interface IconProps extends ITextProps {
  /**
   * Defines title for the icon
   * @default ""
   */
  title?: string;
  /**
   * Defines the icon to be displayed
   */
  name: keyof typeof icons;
  /**
   * Lets the icon inherit inline classes
   * @default ""
   */
  className?: string;
  /**
   * To customise height of the icon
   */
  height?: number;
  /**
   * To customise width of the icon
   */
  width?: number;
  /**
   * Defines color of the icon, use inherit to use custom className
   * @default default
   */
  color?: typeof ICON_COLORS[number];
  /**
   * Defines alternate text (for screen readers)
   */
  alt?: string;
  /**
   * Defines the handler been called when the icon is clicked
   */
  onClick?: () => void;
  /**
   * Attributes to Cypress integration
   */
  'data-cy'?: string;
}

const Icon: React.FC<IconProps> = ({ name, title, height, width, variant, weight, size, color, alt, 'data-cy': dataCy, className, onClick }) => {
  const {
    theme: { ICON },
  } = useContext(ThemeContext);

  const variantStyles = ICON.variant[color!];

  const cls = classnames(variantStyles, className);
  const iconHeight = height || width || '1em';
  const iconWidth = width || height || '1em';

  const IconTag = icons[name];

  return (
    <Text className={cls} size={size} variant={variant} weight={weight} role="img" data-cy={dataCy} alt={alt || name} aria-label={alt || name}>
      <IconTag height={iconHeight} width={iconWidth} title={title} data-testid="icon" onClick={onClick} />
    </Text>
  );
};

Icon.propTypes = {
  title: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons) as (keyof typeof icons)[]).isRequired,
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.oneOf(ICON_COLORS),
  alt: PropTypes.string,
  onClick: PropTypes.func,
  'data-cy': PropTypes.string,
  ...textPropTypes,
};

Icon.defaultProps = {
  title: '',
  className: '',
  color: 'default',
  variant: 'body',
  size: 1,
  'data-cy': 'icon',
  alt: '',
};

export default Icon;

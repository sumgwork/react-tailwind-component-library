import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';
import { Icon, Text } from '../..';
import * as icons from '../../icons';

const sizes = ['compact', 'default', 'large'] as const;
const variants = ['default', 'fade', 'brand'] as const;
const types = ['button', 'submit', 'reset'] as const;

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * Defines size of the button
   */
  size?: typeof sizes[number];
  /**
   * Defines if the button needs to have a minimum width (in px)
   * Else manages size according to content
   */
  minWidth?: number;
  /**
   * Defines variant of the button
   */
  variant?: typeof variants[number];
  /**
   * Defines icon to be shown on left side of text
   */
  iconLeft?: keyof typeof icons;
  /**
   * Defines icon to be shown on right side of text
   */
  iconRight?: keyof typeof icons;
  /**
   * Defines when button expands to full width of parent
   */
  block?: boolean;
  /**
   * Defines when button is disabled
   */
  disabled?: boolean;
  /**
   * Any additional classname to be applied to button
   */
  className?: string;
  /**
   * Type asscoiated with button
   */
  type?: typeof types[number];
  /**
   * Defines when button is in loading state
   */
  isLoading?: boolean;
  /**
   * Attributes to Cypress integration
   */
  'data-cy'?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { size, variant, iconLeft, iconRight, children, block, disabled, className, type, isLoading, minWidth, 'data-cy': dataCy, ...rest } = props;
  const {
    theme: { BUTTON },
  } = useContext(ThemeContext);

  const baseStyles = BUTTON.base;
  const variantStyles = BUTTON.variant[variant!].base;
  const activeStyles = BUTTON.variant[variant!].active;
  const disabledStyles = BUTTON.variant[variant!].disabled;
  const sizeStyles = BUTTON.size[size!];
  const textSize = BUTTON.textSize[size!];
  const iconSize = BUTTON.iconHeight[size!];
  const blockStyles = block ? 'w-full' : '';

  const cls = classnames(baseStyles, variantStyles, disabled ? disabledStyles : activeStyles, sizeStyles, blockStyles, className);

  // Adjustments when button has no children but only icon
  const isSingleIconOnly = React.Children.count(children) === 0 && (iconLeft || iconRight) && !(iconLeft && iconRight);
  const iconLeftClass = isSingleIconOnly ? '' : 'mr-2';
  const iconRightClass = isSingleIconOnly ? '' : 'ml-2';

  return (
    <button className={cls} ref={ref} type={type} disabled={disabled} data-cy={dataCy} style={{ minWidth: minWidth ? `${minWidth}px` : '' }} {...rest}>
      {iconLeft && !isLoading && <Icon name={iconLeft} color="inherit" className={iconLeftClass} variant="body" height={iconSize} title={iconLeft} />}

      {!isSingleIconOnly && !isLoading && (
        <Text size={textSize as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9} weight="medium" variant="heading">
          {children}
        </Text>
      )}
      {isLoading && <Icon name="Spinner" color="inherit" className="animate-spin" width={32} />}
      {iconRight && !isLoading && <Icon name={iconRight} color="inherit" className={iconRightClass} variant="body" height={iconSize} title={iconRight} />}
    </button>
  );
});

Button.propTypes = {
  size: PropTypes.oneOf(sizes),
  minWidth: PropTypes.number,
  variant: PropTypes.oneOf(variants),
  iconLeft: PropTypes.oneOf(Object.keys(icons) as (keyof typeof icons)[]),
  iconRight: PropTypes.oneOf(Object.keys(icons) as (keyof typeof icons)[]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(types),
  isLoading: PropTypes.bool,
  'data-cy': PropTypes.string,
};

Button.defaultProps = {
  size: 'default',
  variant: 'default',
  block: false,
  disabled: false,
  type: 'button',
  isLoading: false,
  'data-cy': 'button',
};

export default Button;

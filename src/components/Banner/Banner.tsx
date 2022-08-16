import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';
import { Text } from '../../index';

const bannerVariants = ['default', 'success', 'danger', 'info', 'warning', 'brand', 'dark'] as const;
const bannerSizes = ['default', 'compact'] as const;

export interface BannerProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Defines the styles used for the Banner
   */
  variant?: typeof bannerVariants[number];
  /**
   * Defines the size for the Banner
   */
  size?: typeof bannerSizes[number];
  /**
   * Defines the title for the banner
   */
  title: string;
  /**
   * Defines the string content for the banner
   */
  content: string;
  /**
   * Defines whether the banner is rounded
   */
  rounded?: boolean;
  /**
   * Attributes to Cypress integration
   */
  'data-cy'?: string;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>((props, ref) => {
  const {
    theme: { BANNER },
  } = useContext(ThemeContext);

  const { variant, size, title, content, className, rounded, 'data-cy': dataCy, ...rest } = props;

  const baseStyle = BANNER.base;
  const variantStyle = BANNER.variant[variant!];
  const sizeStyle = BANNER.size[size!];
  const roundedStyle = rounded ? BANNER.rounded : '';

  const cls = classnames(baseStyle, variantStyle, sizeStyle, roundedStyle, className);

  return (
    <div className={cls} role="alert" ref={ref} data-cy={dataCy} {...rest}>
      <Text tag="h5" variant="heading" weight="medium" size={5}>
        {title || ''}
      </Text>
      <Text size={3}>{content || ''}</Text>
    </div>
  );
});

Banner.defaultProps = {
  variant: 'default',
  size: 'default',
  rounded: false,
  'data-cy': 'banner',
};

Banner.propTypes = {
  variant: PropTypes.oneOf(bannerVariants),
  size: PropTypes.oneOf(bannerSizes),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  'data-cy': PropTypes.string,
};

export default Banner;

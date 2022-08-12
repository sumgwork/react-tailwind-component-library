import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';
// import Icon from '../Icon/Icon';

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

export interface TextProps extends ITextProps {
  /**
   * Defines optional id for the text element
   */
  id?: string;
  /**
   * Defines tag for the text element, like `p`, `h1`, `h2`, etc.
   */
  tag?: typeof VALID_TAGS[number];
  /**
   * Uses italic text if provided
   */
  italic?: boolean;
  /**
   * Defines if the text takes additional classnames from parent element
   */
  className?: string;
  /**
   * Defines any aria role attribute
   */
  role?: string;
  /**
   * Defines alternate text (for icons)
   */
  alt?: string;
  /**
   * Defines if this text will be used as a link
   */
  link?: boolean;
  /**
   * Defines if the text appears as clickable link
   */
  clickable?: boolean;
  /**
   * Defines if clicking on this text fires an event
   */
  onClick?: () => void;
  /**
   * Defines if this text will be used as a link
   */
  href?: string;
  /**
   * Defines if it links to external page, should open in new tab/window
   */
  external?: boolean;
  /**
   * Hide external link icon
   */
  hideExternalLinkIcon?: boolean;
  /**
   * Attributes to Cypress integration
   */
  'data-cy'?: string;
  /**
   * React children to this component which defines the text to be shown
   */
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  variant,
  weight,
  size,
  tag,
  children,
  italic,
  className,
  role,
  link,
  onClick,
  clickable,
  href,
  external,
  hideExternalLinkIcon,
  'data-cy': dataCy,
  ...rest
}) => {
  const {
    theme: { TEXT },
  } = useContext(ThemeContext);

  const baseStyle = TEXT.base;

  let variantStyle: string = '';
  let weightStyle: string = '';
  let sizeStyle: string = '';

  let ariaRole: string = '';

  // hero allows only 4 sizes
  if (variant === 'hero') {
    variantStyle = TEXT.variant.hero.base;
    weightStyle = TEXT.weight[weight!];
    // restrict max size to 4 for hero. For anything bigger, keep it at 4
    sizeStyle = !size || size > 4 ? TEXT.variant.hero[4] : TEXT.variant.hero[size];
  }

  // for display
  else if (variant === 'display') {
    variantStyle = TEXT.variant.display.base;
    sizeStyle = TEXT.variant.display[size!];
    weightStyle = TEXT.weight[weight!];
  }

  // for heading, accept all weights and sizes
  else if (variant === 'heading') {
    variantStyle = TEXT.variant.heading.base;
    sizeStyle = TEXT.variant.heading[size!];
    weightStyle = TEXT.weight[weight!];
  }

  // everything else will fall in body variant, where only size 1-4 are accepted
  else {
    variantStyle = TEXT.variant.body.base;
    // restrict max size to 4 for body. For anything bigger, keep it at 4
    sizeStyle = TEXT.variant.body[!size || size > 4 ? 4 : size];
    weightStyle = TEXT.weight[weight!];
  }

  const italicStyle = italic ? TEXT.italic : '';

  const linkStyle = link || clickable ? TEXT.link : '';

  const cls = classnames(baseStyle, variantStyle, weightStyle, sizeStyle, italicStyle, linkStyle, className);

  const Tag = tag! as keyof JSX.IntrinsicElements;

  // Supply aria role if tag is h1-6
  if (!ariaRole && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag!)) {
    role = 'heading';
  }

  if (link && href && !clickable) {
    return (
      <a className={cls} role="link" href={href} target={external ? '_blank' : '_self'} {...rest}>
        {children}
        {/* {external && !hideExternalLinkIcon && <Icon name="ExternalLink" className={linkStyle} />} */}
      </a>
    );
  }

  if (clickable && onClick) {
    return (
      <button onClick={onClick} role="button" className={cls}>
        {children}
      </button>
    );
  }

  return (
    <Tag className={cls} role={role} data-cy={dataCy} {...rest}>
      {children}
    </Tag>
  );
};

Text.defaultProps = {
  variant: 'body',
  weight: 'regular',
  size: 1,
  tag: 'span',
  italic: false,
  role: '',
  className: '',
  alt: '',
  link: false,
  clickable: false,
  external: false,
  'data-cy': 'text',
};

Text.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.oneOf(VALID_TAGS),
  italic: PropTypes.bool,
  className: PropTypes.string,
  role: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  external: PropTypes.bool,
  hideExternalLinkIcon: PropTypes.bool,
  'data-cy': PropTypes.string,
  ...textPropTypes,
};

export default Text;

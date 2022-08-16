import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  /**
   * Defines how much is the image rounded
   */
  rounded?: 'default' | 'large' | 'full' | 'none';
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { rounded, src, alt, width } = props;
  const {
    theme: { IMAGE },
  } = useContext(ThemeContext);

  const baseStyle = IMAGE.base;
  const roundedStyle = IMAGE.rounded[rounded!];

  const imageClasses = classnames(baseStyle, roundedStyle);

  return (
    <div
      style={{
        width: width || 'auto',
        height: 'auto',
      }}
    >
      <img src={src} alt={alt || 'image'} className={imageClasses} />
    </div>
  );
});

Image.propTypes = {
  rounded: PropTypes.oneOf(['default', 'large', 'full', 'none']),
};

Image.defaultProps = {
  rounded: 'default',
};

export default Image;

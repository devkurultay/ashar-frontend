import React from 'react'
import classNames from 'classnames'

import './style.css'

const widthClasses = {
  half: 'half-width'
}

const CardContent = (
  {
    children,
    className,
    width,
    noBackground,
    noPadding,
    noPaddingOnDesktop,
    paddingOnTablet,
    horizontalPaddingOnTablet,
    leftPadding,
    fullOnTablet,
    fullOnMobile,
    fullOnLarge,
    clickable,
    fullWidth,
    withShadow,
    ...restProps
  }
) => {
  const widthClass = widthClasses[width]

  const styleClasses = classNames(
    'card-content',
    className,
    {
      [widthClass]: !!widthClass,
      'no-background': noBackground, // Transparent background
      'no-padding': noPadding, // No Padding
      'padding-on-tablet': paddingOnTablet, // Padding on tablet and lower
      'horizontal-padding-on-tablet': horizontalPaddingOnTablet, // No Padding
      'left-padding': leftPadding, // No Padding
      'full-on-tablet': fullOnTablet, // No padding for tablet and lower
      'full-on-mobile': fullOnMobile, // No padding for mobile
      'full-on-large': fullOnLarge, // No padding for large screen
      'clickable': clickable, // Add shadow
      'full-width': fullWidth, // No max width
      'with-shadow': withShadow, // Add shadow
      'no-padding-on-desktop': noPaddingOnDesktop // Add shadow
    }
  )

  return (
    <div className={styleClasses} style={{ marginTop: restProps.marginTop, ...restProps.style }}>
      {children}
    </div>
  )
}

export default CardContent

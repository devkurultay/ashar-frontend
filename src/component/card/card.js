import React from 'react'
import classNames from 'classnames'

import './style.scss'

export const cardTypes = {
  mobile: 'mobile',
  tablet: 'tablet'
}

const cardTypeClass = {
  mobile: 'card-mobile',
  tablet: 'card-tablet'
}

const Card = (
  {
    children,
    className,
    cardType,
    lastBlock,
    firstBlock,
    singleBlock,
    noPadding,
    horizontalPadding,
    ...restProps
  }
) => {
  const classnames = classNames(
    'card',
    className,
    cardTypes,
    cardTypeClass[cardType],
    { 'last-block': lastBlock }, // Bottom margin
    { 'first-block': firstBlock }, // Top margin
    { 'single-block': singleBlock }, // Top and Bottom margin
    { 'padding': horizontalPadding }, // padding left and right
    { 'no-padding': noPadding } // no left and right puddings
  )

  return (
    <div {...restProps} className={classnames}>
      {children}
    </div>
  )

}

export default Card

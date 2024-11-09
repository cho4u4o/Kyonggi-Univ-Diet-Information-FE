import React, { useCallback, useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  color: #e0e0e0;
  &:hover {
    color: #00abaa;
  }
`

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    <Button {...restProps}>
      <FaAngleLeft size="20" />
      {children}
    </Button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    <Button {...restProps}>
      <FaAngleRight size="20" />
      {children}
    </Button>
  )
}

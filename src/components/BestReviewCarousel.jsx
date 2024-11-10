import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './BestReviewCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import styled from '@emotion/styled'
import Card from './BestReviewCard'

const reviews = Array.from({ length: 7 }).map((_, i) => ({
  score: i + 1,
  restaurant: '경기드림타워',
  comment:
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
}))

const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 20px;
  --slide-height: 19rem;
  --slide-spacing: 2rem;
  --slide-size: 380px;
  @media (max-width: 480px) {
    --slide-size: 260px;
  }
`

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const CarouselItemWrapper = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`

const CarouselItem = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  display: flex;
`

const CarouselControls = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`

const CarouselButtons = styled.div`
  width: 200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`

const CarouselIndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
`

const CarouselIndicator = ({ slides, emblaApi }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <CarouselIndicatorWrapper>
      {slides.map((_, index) => (
        <hr
          key={index}
          style={{
            border: 'none',
            width: `calc(${100 / slides.length}%)`,
            height: '3px',
            backgroundColor: index === selectedIndex ? '#00abaa' : '#e0e0e0',
            transition: 'background-color 0.3s ease-in-out',
          }}
        ></hr>
      ))}
    </CarouselIndicatorWrapper>
  )
}

const Carousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <>
      <CarouselContainer>
        <CarouselWrapper ref={emblaRef}>
          <CarouselItemWrapper>
            {slides.map((index) => (
              <CarouselItem key={index}>
                <Card
                  score={reviews[index]?.score}
                  restaurant={reviews[index]?.restaurant}
                  comment={reviews[index]?.comment}
                />
              </CarouselItem>
            ))}
          </CarouselItemWrapper>
        </CarouselWrapper>
        <CarouselControls>
          <CarouselButtons>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <CarouselIndicator slides={slides} emblaApi={emblaApi} />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </CarouselButtons>
        </CarouselControls>
      </CarouselContainer>
    </>
  )
}

export default Carousel

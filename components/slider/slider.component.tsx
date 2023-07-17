"use client";

import cn from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import {
  useEffect,
  useState,
  useCallback,
  type FC,
  type ReactNode,
  type Component,
} from "react";
import ComponentStyles from "./slider.module.scss";

// import { SliderArrow } from "@components/icons";

interface IPropsButton {
  enabled: boolean;
  onClick: () => void;
}

const SliderArrow = () => (
  <svg
    width="8"
    height="10"
    viewBox="0 0 8 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.82967 4.18081C7.39839 4.57892 7.39838 5.42118 6.82967 5.81928L2.16165 9.08687C1.2634 9.71564 0.154093 8.64919 0.747007 7.72688L2.15237 5.54076C2.36413 5.21135 2.36413 4.78865 2.15237 4.45924L0.747056 2.2732C0.15414 1.35088 1.26345 0.284431 2.1617 0.913209L6.82967 4.18081Z"
      fill="black"
    />
  </svg>
);

const PrevButton = ({ enabled, onClick }: IPropsButton) => (
  <button
    className={cn(ComponentStyles.button, ComponentStyles.prevButton, {
      [ComponentStyles.disabled]: !enabled,
    })}
    onClick={onClick}
    disabled={!enabled}
  >
    <SliderArrow />
  </button>
);

const NextButton = ({ enabled, onClick }: IPropsButton) => (
  <button
    className={cn(ComponentStyles.button, ComponentStyles.nextButton, {
      [ComponentStyles.disabled]: !enabled,
    })}
    onClick={onClick}
    disabled={!enabled}
  >
    <SliderArrow />
  </button>
);

interface SliderProps {
  className?: string;
  children: ReactNode | Component | any;
  slidesToScroll?: number;
  draggable?: boolean;
  dragFree?: boolean;
  loop?: boolean;
  py?: string;
  withNavigate?: boolean;
}

export const Slider: FC<SliderProps> = ({
  className = "",
  children,
  slidesToScroll = 1,
  draggable = true,
  dragFree = false,
  loop = false,
  withNavigate = true,
  py = "",
}) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop,
    draggable,
    align: "start",
    slidesToScroll,
    containScroll: "trimSnaps",
    skipSnaps: false,
    dragFree,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.reInit();
    return () => embla.destroy();
  }, [embla, onSelect]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const rootClassName = cn(ComponentStyles.root, className);

  return (
    <div className={rootClassName}>
      {withNavigate && (
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      )}
      <div className={cn(ComponentStyles.viewport, py!)} ref={viewportRef}>
        <div className={ComponentStyles.container}>{children}</div>
      </div>
      {withNavigate && (
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      )}
    </div>
  );
};

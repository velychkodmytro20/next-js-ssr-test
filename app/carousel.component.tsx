// import { ImageType, type News } from "@prisma/client";
import CarouselStyles from "./carousel.module.scss";
import Link from "next/link";
// import { NewsCard } from "@components/common";
import { Slider } from "../components/slider/slider.component";
// import {
//   TranslationKeys,
//   TranslationMainKeys,
//   TranslationsSubKeysList,
// } from "@constants";
// import { getTranslationsSync } from "@helpers";
// import { type TranslationsTypes, type LanguageType } from "@interfaces";

interface Props {
  items: any;
  withNavigate?: boolean;
}

export const Carousel: React.FC<Props> = ({ items, withNavigate = false }) => {
  return (
    <div className={CarouselStyles.root}>
      <div className={CarouselStyles.hotNews}>
        <div className={CarouselStyles.hotNewsLabel}>Exclusive</div>
        <div className={CarouselStyles.slider}>
          <Slider dragFree py={"py-2"} withNavigate={withNavigate}>
            {items?.map((item: any) => (
              // <NewsCard
              //   key={item.id}
              //   item={item}
              //   className={CarouselStyles.item}
              //   variant={ImageType.VERTICAL}
              //   locale={locale}
              // />
              <Link
                href={`news/${item.slug}`}
                key={item.id}
                // className={rootClassName}
              >
                {/* <div className={ComponentStyles.imageContainer}>
                  {item.imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      // className={ComponentStyles.image}
                      height={119}
                      width={223}
                      src={
                        imageLoader(item.imageUrl as string) ||
                        DEFAULT_PREVIEW_IMAGE_URL
                      }
                      alt={item[locale]?.title}
                      {...imgProps}
                    />
                  )}
                </div> */}
                <div>
                  <h4>{item.title}</h4>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

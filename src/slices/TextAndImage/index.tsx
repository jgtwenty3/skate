import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { JSX } from "react";
import { ParallaxImage } from "./ParallaxImage";

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice }: TextAndImageProps): JSX.Element => {
  const theme = slice.primary.theme;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "sticky top-[calc(var(--index)*2rem)]",
        theme === "2Gray" && "bg-texture bg-brand-gray text-black",
        theme === "1Blue" && "bg-texture bg-brand-blue text-white",
      
      )}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div className={clsx("flex flex-col items-center gap-8 text-center md:items-start md:text-left",
        slice.variation === "imageOnLeft" && "md:order-2"
        )}>
          <Heading size = "lg" as="h2">
              <PrismicText field={slice.primary.heading} />
          </Heading>
          <div className="max-w-md text-lg leading-relaxed">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink field = {slice.primary.button} color = {theme === "1Blue"? "orange": "lime"}>
            {slice.primary.button.text}
          </ButtonLink>
        </div>
        <ParallaxImage
          foregroundImage={slice.primary.foreground_image}
          backgroundImage={slice.primary.backgroundimage}
        />
        
      </div>
    </Bounded>
  );
};

export default TextAndImage;
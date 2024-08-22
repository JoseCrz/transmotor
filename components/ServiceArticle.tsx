import Link from "next/link";
import Image, { ImageProps } from "next/image";

type ServiceArticleProps = {
  href: string;
  imageSrc: ImageProps["src"];
  title: string;
  text: string;
};

export function ServiceArticle({
  href,
  imageSrc,
  title,
  text,
}: ServiceArticleProps) {
  return (
    <Link href={href}>
      <article className="relative overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt=""
          fill
          placeholder="blur"
          className="absolute inset-0 object-cover"
        />
        <div className="relative min-h-[560px] bg-gradient-to-b from-black/80 from-40% to-transparent px-6 pt-20 text-white">
          <h3 className="text-4xl">{title}</h3>
          <p className="mt-6">{text}</p>
        </div>
      </article>
    </Link>
  );
}

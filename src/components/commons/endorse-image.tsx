import Image from 'next/image';
import Head from 'next/head';
import { ReactEventHandler } from 'react';

type Props = {
  idPokemon: number;
  size: number;
  requestedSize?: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  alt?: string;
  onError?: ReactEventHandler<HTMLImageElement>;
};

const PNG_IMAGE_URL =
  'https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

const WEBP_IMAGE_URL = 'https://cdn.statically.io/gh/afiiif/pokemon-assets/main/artwork/webp';

/**
 * Vercel image optimization for free-tier has 1000 image limitation.
 * Therefore, only pokemon generation 1 will use Next Image component.
 */
export default function EndorseImage({
  idPokemon,
  size,
  requestedSize: requestedSizeTemp,
  priority,
  className,
  imgClassName,
  alt = 'pokemon',
  onError,
  ...props
}: Props & JSX.IntrinsicElements['picture']) {
  const pngSrc = `${PNG_IMAGE_URL}/${idPokemon}.png`;

  if (idPokemon <= 151) {
    return (
      <Image
        src="https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-1/239742816_4403094813086308_2628419020692959472_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEO6nmewrYG7CZFaLLbQlhIcztn41NNew5zO2fjU017DpCWzhYxcyLRZCAV9u4Lc_r0oFYeAwEHbYPUeQ6RwI6Y&_nc_ohc=wMKwW9FD4K4AX9Kd0TG&_nc_ht=scontent-cgk1-2.xx&oh=00_AfAyQxDu2WDc_i80h5QeS3QSe_G6RfH799hL75UUQUBzFA&oe=64CA10FE"
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className={className}
        onError={onError}
      />
    );
  }

  const requestedSize = requestedSizeTemp || size * 1.5;

  const webpSrc = `${WEBP_IMAGE_URL}/${requestedSize}x${requestedSize}/${idPokemon}.webp`;

  return (
    <>
      {priority && (
        <Head>
          <link rel="preload" as="image" href={webpSrc} />
        </Head>
      )}

      <picture className={className} onError={onError} {...props}>
        <source srcSet={webpSrc} type="image/webp" />
        <source srcSet={pngSrc} type="image/png" />
        <img
          src={pngSrc}
          alt={alt}
          loading={priority ? undefined : 'lazy'}
          className={imgClassName}
          width={size}
          height={size}
        />
      </picture>
    </>
  );
}
/* eslint-disable react/require-default-props */
import Head from 'next/head'
import React, { FC, Fragment, ReactNode } from 'react'
import config from '../../../config/seo_meta.json'

interface OgImage {
  url?: string
  width?: string
  height?: string
  alt?: string
}

interface SEOProps {
  title?: string
  description?: string
  robots?: string
  openGraph?: {
    title?: string
    type?: string
    locale?: string
    description?: string
    site_name?: string
    url?: string
    images?: OgImage[]
  }
  children?: ReactNode
}

const ogImage = ({ width, height, alt }: OgImage, index: number) => {
  // generate full URL for OG image url with store base URL
  const imgUrl = config.openGraph.url
  return (
    <Fragment key={`og:image:${index}`}>
      <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      />
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  )
}

// eslint-disable-next-line react/function-component-definition
const SEO: FC<SEOProps> = ({
  title,
  description,
  openGraph,
  robots,
  children,
}) => (
  <Head>
    <title key="title">
      {title ? `${config.titleTemplate.replace(/%s/g, title)}` : config.title}
    </title>
    <meta
      key="description"
      name="description"
      content={description || config.description}
    />
    <meta
      key="og:type"
      property="og:type"
      content={openGraph?.type ?? config.openGraph.type}
    />
    <meta
      key="og:title"
      property="og:title"
      content={
        openGraph?.title ?? config.openGraph.title ?? title ?? config.title
      }
    />
    <meta
      key="og:description"
      property="og:description"
      content={
        openGraph?.description ??
        config.openGraph.description ??
        description ??
        config.description
      }
    />
    <meta
      key="og:site_name"
      property="og:site_name"
      content={openGraph?.site_name ?? config.openGraph.site_name}
    />
    <meta
      key="og:url"
      property="og:url"
      content={openGraph?.url ?? config.openGraph.url}
    />
    {openGraph?.locale && (
      <meta key="og:locale" property="og:locale" content={openGraph.locale} />
    )}
    {openGraph?.images?.length
      ? openGraph.images.map((img, index) => ogImage(img, index))
      : ogImage(config.openGraph.images[0], 0)}
    {config.twitter.site && (
      <meta
        key="twitter:site"
        name="twitter:site"
        content={config.twitter.site}
      />
    )}
    {config.twitter.handle && (
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={config.twitter.handle}
      />
    )}
    <meta key="robots" name="robots" content={robots ?? 'index,follow'} />
    <meta key="googlebot" name="googlebot" content={robots ?? 'index,follow'} />
    {children}
  </Head>
)

export default SEO

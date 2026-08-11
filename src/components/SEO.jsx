import { Helmet } from "react-helmet-async";

export const SEO = ({
    title,
    description,
    image,
    imageAlt = "Codix Charity Foundation",
    noindex = false,
}) => {
    const siteUrl = 'https://www.codixcharityfoundation.org/';

    // Dynamic canonical URL pointing to the official production URL
    const cleanPath = typeof window !== 'undefined' 
        ? (window.location.pathname.startsWith('/') ? window.location.pathname.substring(1) : window.location.pathname)
        : '';
    const canonicalUrl = `${siteUrl}${cleanPath}`;

    // Sanitize image URL to prevent double slashes and apply fallback image
    const fallbackImage = 'codixLogo.jpeg';
    const targetImage = image || fallbackImage;
    const cleanImage = targetImage.startsWith('/') ? targetImage.substring(1) : targetImage;
    const imageUrl = `${siteUrl}${cleanImage}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots directive */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content={imageAlt} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={imageAlt} />
        </Helmet>
    );
};
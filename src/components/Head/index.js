import Head from "next/head";

export default function MyHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/icons/icon-64x64.png" />

      {/* PWA METATAGS */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Five Nights at Freddy API"
      />
      <meta
        name="keywords"
        content="Five Nights at Freddy API,API,FNAF,FNAF API,Five Nights at Freddy"
      />

      <meta name="theme-color" content="#111" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content="Five Nights at Freddy API" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="msapplication-navbutton-color" content="#e5e5e5" />
      <meta name="msapplication-TileColor" content="#111" />
      <meta name="msapplication-TileImage" content="/icons/icon-128x128.png" />

      <meta name="application-name" content="Davi's Blog" />
      <meta
        name="msapplication-tooltip"
        content="Five Nights at Freddy API"
      />
      <meta name="msapplication-starturl" content="/" />

      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* <meta name="nightmode" content="enable/disable" /> */}

      <meta name="layoutmode" content="fitscreen/standard" />

      <meta name="imagemode" content="force" />

      <meta name="screen-orientation" content="portrait"></meta>

      <link
        href="/icons/icon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/icons/icon-64x64.png"
        rel="icon"
        type="image/png"
        sizes="64x64"
      />
      <link
        href="/icons/icon-128x128.png"
        rel="icon"
        type="image/png"
        sizes="128x128"
      />
      <link
        href="/icons/icon-192x192.png"
        rel="icon"
        type="image/png"
        sizes="192x192"
      />
      <link
        href="/icons/icon-256x256.png"
        rel="icon"
        type="image/png"
        sizes="256x256"
      />
      <link
        href="/icons/icon-384x384.png"
        rel="icon"
        type="image/png"
        sizes="384x384"
      />
      <link
        href="/icons/icon-512x512.png"
        rel="icon"
        type="image/png"
        sizes="512x512"
      />

      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" sizes="64x64" />
      <link
        href="/icons/icon-128x128.png"
        rel="apple-touch-icon"
        sizes="128x128"
      />
      <link
        href="/icons/icon-256x256.png"
        rel="apple-touch-icon"
        sizes="256x256"
      />
      {/* <link href="/icons/icon-96x96.png" rel="apple-touch-icon" sizes="96x96" /> */}

      <link href="/icons/icon-512x512.png" rel="apple-touch-startup-image" />

      <link
        href="icons/icon-32x32.png"
        rel="mask-icon"
        sizes="32x32"
        color="red"
      />

      <link href="icons/icon-192x192.png" rel="icon" sizes="192x192" />

      <link
        href="/icons/icon-64x64.png"
        rel="apple-touch-icon-precomposed"
        sizes="64x64"
      />
      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" sizes="64x64" />

      <link href="/manifest.json" rel="manifest"></link>
    </Head>
  );
}

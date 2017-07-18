import React from 'react';
import Document, { Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


class Reactify extends Document {

    render() {
      const sheet = new ServerStyleSheet()
      const main = sheet.collectStyles(<Main />)
      const styleTags = sheet.getStyleElement()
        return (
            <html>
            <Head>
              <title>Reactify</title>
              { styleTags }
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
              <link href="//cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet" />
              <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css" rel="stylesheet" />
              <link rel="shortcut icon" type="image/png" href="../static/img/favicon.png" ></link>
            </Head>
              <body>
                  <div className='root'>
                    { main }
                  </div>
                  <NextScript />
              </body>
            </html>
        )
    }
}

export default Reactify

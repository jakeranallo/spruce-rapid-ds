import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/global.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/tokens.scss'
      ]
    }
    )
  ]
};

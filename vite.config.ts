import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    EnvironmentPlugin('all'),
    react({
      jsxImportSource: '@welldone-software/why-did-you-render'
    }),
    tsconfigPaths(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg?o)$/i,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false // https://github.com/svg/svgo/issues/1128
              },
              cleanupIDs: {
                minify: false,
                remove: false
              },
              convertPathData: false
            }
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
            }
          }
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 80
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true
      },
      cache: false,
      cacheLocation: undefined
    })
  ]
});

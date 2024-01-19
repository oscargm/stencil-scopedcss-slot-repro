import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-scoped',
  extras: {
    enableImportInjection: true,
    experimentalImportInjection: true,
    experimentalSlotFixes: true,
    scopedSlotTextContentFix: true,
    experimentalScopedSlotChanges: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};

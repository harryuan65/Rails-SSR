import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';

const pages: {
  [key: string]: () => Promise<{
    [key: string]: any;
  }>;
} = import.meta.glob('../src/Pages/**/*.tsx');

const resolve = (name: string) => {
  const importPage = pages[`../src/Pages/${name}.tsx`];

  if (!importPage)
    throw new Error(
      `Unknown page ${name}. Is it located under Pages with a .tsx extension?`
    );
  return importPage().then((module) => module.default);
};

createInertiaApp({
  id: 'root',
  resolve,
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});

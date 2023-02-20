import createCache from '@emotion/cache'
import {prefixer} from "stylis";
import rtlPlugin from 'stylis-plugin-rtl';

const emotionCache = () => {
  return createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
};

export default emotionCache;
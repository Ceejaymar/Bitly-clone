import { login, apiKey } from './secret-keys';

const bitlysdk = new window.BitlySDK({
  login,
  apiKey
});

export {bitlysdk};
export const configRequest = {
  headers: {
    Authorization: `${import.meta.env.VITE_TWITCH_TOKEN}`,
    'Client-Id': `${import.meta.env.VITE_CLIENT_ID}`,
  },
};

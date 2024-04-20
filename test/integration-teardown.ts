require('tsconfig-paths/register');

import createApp from '@/test/support/CreateApp';

export default async () => {
    await createApp().shutdown();
};

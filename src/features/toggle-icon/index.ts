import { accountControllerGetAccount, authControllerGetSessionInfo } from '@/shared/api/generated';
import { setBrowserInterval, setIcon } from '@/shared/lib/chrome';

export const startToggleIcon = () => {
  setBrowserInterval('update-block-rules', 5 * 1000, async () => {
    console.log('first');
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      setIcon('/hand.png');
      return;
    }
    const isBlockingEnabled = await accountControllerGetAccount().then((r) => r.isBlockingEnabled);

    if (!isBlockingEnabled) {
      setIcon('/sleep.png');
      return;
    }
    setIcon('/shield.png');
  });
};

import { accountControllerGetAccount, authControllerGetSessionInfo, BlockItemDtoType } from '@/shared/api/generated';
import { NetRule, RuleActionType, RuleResourceType, setBrowserInterval, setNetRules } from '@/shared/lib/chrome';
import { blockListControllerGetList } from './../../shared/api/generated';

export const startUpdateBlockRules = () => {
  setBrowserInterval('update-block-rules', 5 * 1000, async () => {
    console.log('first');
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );
    if (!isAuth) {
      return await setNetRules([]);
    }
    const isBlockingEnabled = await accountControllerGetAccount().then((r) => r.isBlockingEnabled);

    if (!isBlockingEnabled) {
      return await setNetRules([]);
    }
    const rules = await getListNetRules();
    console.log(rules);
    setNetRules(rules);
  });
};

const getListNetRules = async () => {
  const blockList = await blockListControllerGetList();
  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: {
          type: RuleActionType.BLOCK,
        },
        condition: item.data.startsWith('regexp:')
          ? {
              regexFilter: item.data.replace('regexp:', ''),
              resourceTypes: [RuleResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [RuleResourceType.MAIN_FRAME],
            },
      }),
    );
};

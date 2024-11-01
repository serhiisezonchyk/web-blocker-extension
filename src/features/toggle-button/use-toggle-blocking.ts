import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account';

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();
  const patchAccountMutation = useUpdateAccountMutation();
  const toggleBlocking = () => {
    if (accountQuery.data) {
      patchAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };

  return {
    toggleBlocking,
    isLoading: patchAccountMutation.isPending,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    isReady: accountQuery.isSuccess,
  };
}

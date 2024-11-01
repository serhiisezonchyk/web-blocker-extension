import { accountControllerGetAccount, accountControllerPatchAccount } from '@/shared/api/generated';
import { queryClient } from '@/shared/api/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';

const accountKey = ['account'];

export function useAccountQuery() {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: accountKey,
  });
}

export function useUpdateAccountMutation() {
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: accountKey });
      const prevState = queryClient.getQueryData(accountKey);
      queryClient.setQueryData(accountKey, data);
      return {
        prevState,
        data,
      };
    },
    onError: (err, data, context) => {
      queryClient.setQueryData(accountKey, context?.prevState);
    },
    async onSettled(newData) {
      await queryClient.invalidateQueries({ queryKey: accountKey });
    },
  });
}

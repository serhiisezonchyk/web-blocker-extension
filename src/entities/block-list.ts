import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from '@/shared/api/generated';
import { queryClient } from '@/shared/api/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';

const blockListKey = ['block-list'] as unknown[];
export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
  });
}

export function useAddBlockItemMutation() {
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    onMutate: async (newItem) => {
      await queryClient.cancelQueries({ queryKey: blockListKey });

      const previousItems = queryClient.getQueryData(blockListKey);

      queryClient.setQueryData(blockListKey, (old: any) => [...(old || []), newItem]);

      return { previousItems };
    },
    onError: (err, newItem, context) => {
      queryClient.setQueryData(blockListKey, context?.previousItems);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}

export function useRemoveBlockItemMutation() {
  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    onMutate: async (itemToRemove) => {
      await queryClient.cancelQueries({ queryKey: blockListKey });

      const previousItems = queryClient.getQueryData(blockListKey);

      queryClient.setQueryData(blockListKey, (old: any) => (old || []).filter((item: any) => item.id !== itemToRemove));

      return { previousItems };
    },
    onError: (err, itemToRemove, context) => {
      queryClient.setQueryData(blockListKey, context?.previousItems);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}

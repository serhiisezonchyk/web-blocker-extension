import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type Props = {
  className?: string;
};

const Spinner = (props: Props) => {
  return <Loader2 className={cn('animate-spin', props.className)} />;
};

export default Spinner;

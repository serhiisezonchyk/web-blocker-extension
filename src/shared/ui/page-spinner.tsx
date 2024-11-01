import { cn } from '@/lib/utils';
import Spinner from './spinner';

type Props = {
  className?: string;
};

const PageSpinner = (props: Props) => {
  return (
    <div
      className={cn('fixed left-0 right-0 top-0 bottom-0 grid place-content-center bg-foreground/10', props.className)}
    >
      <Spinner className="size-16 z-10" />
    </div>
  );
};

export default PageSpinner;

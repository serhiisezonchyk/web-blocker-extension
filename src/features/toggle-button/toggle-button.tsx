import { Button } from '@/components/ui/button';
import { useToggleBlocking } from './use-toggle-blocking';

type Props = {
  className?: string;
};

const ToggleButton = (props: Props) => {
  const { isBlockingEnabled, toggleBlocking, isLoading, isReady } = useToggleBlocking();

  if (!isReady) return null;

  return (
    <Button
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={isBlockingEnabled ? 'destructive' : 'secondary'}
      className={props.className}
    >
      {isBlockingEnabled ? 'Disable' : 'Enable'}
    </Button>
  );
};

export default ToggleButton;

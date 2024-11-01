import { Button } from '@/components/ui/button';
import Layout from '@/components/ui/layuout';
import ToggleButton from '@/features/toggle-button/toggle-button';
import { ADMIN_URL } from '@/shared/constants';
import { createTab } from '@/shared/lib/chrome';
import Logo from '@/shared/ui/logo';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Layout>
      <Logo />
      <div className="flex gap-2">
        <ToggleButton className="grow" />
        <Button className="grow" variant={'outline'} onClick={() => createTab(ADMIN_URL)}>
          Manage
        </Button>
      </div>
    </Layout>
  );
};

export default HomePage;

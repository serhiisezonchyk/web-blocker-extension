import Layout from '@/components/ui/layuout';
import { ADMIN_SIGN_IN_URL } from '@/shared/constants';
import { createTab } from '@/shared/lib/chrome';
import { Button } from '@/shared/ui/button';
import Logo from '@/shared/ui/logo';

const NotAuthPage = () => {
  return (
    <Layout>
      <Logo className="w-fit" />
      <h2 className="text-2xl w-full">You are not authorized!</h2>
      <Button
        variant={'default'}
        onClick={() => {
          createTab(ADMIN_SIGN_IN_URL);
        }}
      >
        Sign in
      </Button>
    </Layout>
  );
};

export default NotAuthPage;

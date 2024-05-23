import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SignInFormProps {
  formActionText: string;
  linkActionText: string;
  linkAction: string;
}
const SignInForm = ({ formActionText }: SignInFormProps) => {
  return (
    <div
      className='
        text-gray-500
        text-sm
        mt-2
        flex
        justify-center
        gap-2
        select-none
      '
    >
      <form method='post' action='/api/auth/signin'>
        <h1
          className='
            text-3xl
            font-semibold
            text-white
            select-none
            text-
          '
        >
          {formActionText}
        </h1>
        <div
          className='
            space-y-4
            mt-5    
          '
        >
          <Input
            type='email'
            name='email'
            placeholder='Email'
            className='
              bg-[#333]
              w-full
              inline-block
              placeholder:text-gray-400
              placeholder:text-xs
            '
          />
          <Button
            variant='destructive'
            className='
              w-full
            '
          >
            {formActionText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

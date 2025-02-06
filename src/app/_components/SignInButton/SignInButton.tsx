'use client';

// import { useRouter } from 'next/router';
import { createClient } from '@/utils/supabase/client';
import Button from '@/components/Common/Button/Button';

const SignInButton = () => {
	const supabase = createClient();
	// const router = useRouter();

	const handleSignin = async () => {
		// const { data, error } = await supabase.auth.signInWithOAuth({
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: `${window.location.origin}/auth/callback`,
			},
		});

		if (error) {
			console.error('Error signing in:', error.message);
			return;
		}
	};

	return <Button handleClick={handleSignin} buttonLabel="SIGN IN" />;
};

export default SignInButton;

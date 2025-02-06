'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

const AuthCallback = () => {
	const router = useRouter();
	const supabase = createClient();

	useEffect(() => {
		const processAuth = async () => {
			await supabase.auth.getSession();
			router.push('/bag');
		};

		processAuth();
	}, [router, supabase.auth]);

	return <div>Processing...</div>;
};

export default AuthCallback;

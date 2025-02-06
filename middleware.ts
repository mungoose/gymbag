import { type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
	const response = await updateSession(request);

	const { pathname } = request.nextUrl;

	// Redirect if not logged in and not on the login page
	const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/auth');
	if (!isAuthPage) {
		const user = request.cookies.get('sb-access-token');
		if (!user) {
			const loginUrl = request.nextUrl.clone();
			loginUrl.pathname = '/login';
			return Response.redirect(loginUrl);
		}
	}

	return response;
}

export const config = {
	matcher: [
		'/bag/:path*',
		'/exercise/:path*',
		'/history/:path*',
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		// '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
};

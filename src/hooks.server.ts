
  import { redirect } from "@sveltejs/kit";

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  // -- define the routes of we want to be possible to access without auth
  const unprotectedRoutes = [
    '/login', '/register',
  ];

  // -- verify if requested path is public
  function isPathAllowed(path: string) {
      return unprotectedRoutes.some(allowedPath =>
        path === allowedPath || path.startsWith(allowedPath + '/')
      );
    }

    export const handle = async ({event, resolve}) => {

      const sessionCookie = event.cookies.get('token');

      if(!isPathAllowed(event.url.pathname)){
        console.log("entrei no bloco")
        if(!sessionCookie){
          throw redirect(303, '/login')
        }

        const response = await resolve(event)
        return response

      } else {
        if(sessionCookie) throw redirect(302, '/acesso/reservas')
        const response = await resolve(event)
        return response
      }
    }
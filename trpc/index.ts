import { publicProdecure, router } from './trpc';
import { clerkClient } from "@clerk/nextjs";
 
export const appRouter = router({
  authCallback: publicProdecure.query(() => {
    const {getUser} = clerkClient.users.getUser(userId);
    const user = getUser()

    if(!user.id || !user.email) throw new TRPCError({code: "UNAUTHORIZED"})
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id
      }
    })

    if(!dbUser) {
      await db.user.create ({
        data: {
          id: user.id,
          email: user.email
        }
      })
    }

    return {success: true}
  })
  })
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
import { ourFileRouter } from "./core";
import { createNextRouteHandler } from "uploadthing/server";
 
// Export routes for Next App Router
export const { POST } = createNextRouteHandler({
  router: ourFileRouter,
});
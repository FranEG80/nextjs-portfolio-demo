
// Examples API POST
// api/posts                 -> slug == undefined           -- get all posts
// api/posts/react           -> slug == [ react ]           -- get post titleID == react
// api/posts/react/lesson1   -> slug == [ react, lesson1 ]  -- get post titleID == react and lesson1

import runMiddleware from "../../../helpers/runMiddleware";
import buildResponse from "../../../middleware/buildResponse";
import cors from "../../../middleware/cors";

export default async function handler (req, res) {
  // Middlewares
  await runMiddleware(req, res, buildResponse)
  await runMiddleware(req, res, cors)
  
  const { response } = req
  response.status = 'OK'
  res.status(200).json(response);
};

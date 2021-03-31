import runMiddleware from "../../helpers/runMiddleware"
import buildResponse from "../../middleware/buildResponse"
import cors from "../../middleware/cors"

export default async function handler (req, res) {
  // Middlewares
  await runMiddleware(req, res, buildResponse)
  await runMiddleware(req, res, cors)

  const { response } = req
  response.status = projects.length > 0 ? 'OK' : 'KO'
  response.data = projects

  res.status(200).json(response)
}
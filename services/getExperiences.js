import fetcher from "./fetcher"

const getExperiences = async () => {
  const response = await fetcher('/experiences')

  return {
    experiences: response.data,
    statusCode: response.status
  }
}

export default getExperiences
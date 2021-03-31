import fetcher from "./fetcher"

const getSkills = async () => {
  const response = await fetcher('/skills')

  return {
    skills: response.data,
    statusCode: response.statusCode
  }
}

export default getSkills
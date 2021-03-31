const buildResponse = (req, _, next) => {
  const { headers, url, method, query, body } = req;
  req.response = {
    data: [],
    status: 'KO',
    info: {
      request: `${headers.host}${url}`,
      method,
      "user-agent": headers["user-agent"],
      query,
      body,
    },
  };
  next();
};

export default buildResponse;

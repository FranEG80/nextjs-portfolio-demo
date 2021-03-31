import Layout from "../components/Layout";

const _error = ({ statusCode }) => (
  <Layout title="Uppppss!!! Something goes wrong" footer={false}>
    <p className="text-center">
      {statusCode
        ? `Could not load your user data: Status code ${statusCode}`
        : "Could not get that page, sorry."}
    </p>
  </Layout>
);

export default _error;

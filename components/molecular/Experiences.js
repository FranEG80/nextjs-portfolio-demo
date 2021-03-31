import Link from "next/link";
import Error from "../../pages/_error";

const Experiences = ({ experiences, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  
  return (
    <div className="col-md-8 py-2">
      <div className="card bg-light animate__animated animate__fadeInRight">
        <div className="card-body">
          <h1>Experience</h1>
          <ul>
            {experiences.map(({ title, from, to, description }, index) => (
              <li key={index}>
                <h3>{title}</h3>
                <h5>
                  {from} {to ? `- ${to}` : `- ${new Date().getFullYear()}`}
                </h5>
                <p>
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <Link href="/hireme">
            <a className="btn btn-light my-2">Know More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experiences;

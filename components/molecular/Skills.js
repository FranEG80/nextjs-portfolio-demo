import getSkills from "../../services/getSkills";
import Error from "../../pages/_error"

const Skills = ({skills, statusCode}) => {
  if (statusCode) {
    return <Error statusCode={statusCode}/>
  }

  return (
    <div className="col-md-4 py-2">
      <div className="card bg-light animate__animated animate__fadeInLeft">
        <div className="card-body">
          <h1>Skills</h1>
          {skills.map(({ skill, percentage }, i) => (
            <div className="py-3" key={i}>
              <h5>{skill}</h5>
              <div className="progress ">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${percentage}%` }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills
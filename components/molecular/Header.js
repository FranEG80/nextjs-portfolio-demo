import Link from "next/link";

const Header = () => (
  <header className="row">
    <div className="col-md-12">
      <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="/profile.png" alt="" className="img-fluid w-75 rounded" />
          </div>
          <div className="col-md-8">
            <h1>Fran Enríquez</h1>
            <h3>Full Stack Developer</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae atque ullam perferendis harum, nisi porro voluptate,
              iste consequuntur enim reprehenderit architecto consectetur cum?
              Totam ad molestias natus illum illo officia.
            </p>
            <Link href="/hireme">
              <a className="btn btn-outline-light">Hire Me</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header
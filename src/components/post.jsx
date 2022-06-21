import classes from "./post.module.css";

export function Post() {
  return (
    <article className={classes.post}>
      <header>
        <div className={classes.author}>
          <img
            className={classes.avatar}
            src="https://github.com/diogoizele.png"
          />
          <div className={classes.authorInfo}>
            <strong>Diogo Izele</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>
      <div className={classes.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉<a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}

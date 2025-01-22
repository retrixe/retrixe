import styles from './PageContent.module.scss'
import TypedContent from './TypedContent'

function HomePage(): React.JSX.Element {
  // TODO: Show the title in different languages: Chinese, Korean, Japanese, English, French, Ukrainian, Arabic, Swedish, Hindi, Marathi
  // TODO: Fade the top and bottom of the page as you scroll
  // TODO: Fade animations for projects that show up?
  // TODO: Image placeholders before they load
  // TODO: Move much of this into Astro

  return (
    <>
      <div className={styles.segment}>
        <div>
          <TypedContent component='h1' content='Hej o/' speed={100} />
          <br />
          <p>
            I'm a student at MIT World Peace University, with years of experience working on many
            different projects. Formerly worked full-time at Apconic Software Pvt Ltd for a year,
            and in my spare time, I work on multiple open-source projects.
          </p>
        </div>
        <img className={styles['header-pic']} src='https://github.com/retrixe.png' alt='ibu' />
      </div>
      <div className={styles.segment}>
        <ul className={styles.list}>
          <li>
            🎆 I have in-depth experience using JavaScript (TypeScript, Node.js, React, React Native
            and associated tools like Babel and webpack), Java, Kotlin and Golang (a personal
            favourite). I'm also familiar with using MySQL/MariaDB, PostgreSQL, MongoDB and Redis.
            I've worked with and studied many more technologies, so this is hardly an exhaustive
            list.
          </li>
          <li>
            🐧 I'm highly experienced with using Linux and system administration (tools like
            systemd, package management with apt/rpm, repairing broken systems, livepatch/kpatch,
            maintenance, system partitioning, database setup, nginx, etc).
          </li>
          <li>🔍 I'm really good at googling and following the xkcd tech support cheat sheet.</li>
          <li>
            🌱 I’m currently learning how to write a programming language and getting more familiar
            with C++ and Rust.
          </li>
          <li>
            🎓 I'm currently studying a bachelor's degree in Computer Science at MIT World Peace
            University.
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.segment}>projects go here</div>
      <hr />
      <div className={styles.segment}>
        <ul className={styles.list}>
          <li>
            💬 Ask me about anything I know! I'm sure I can help you out and point you in the right
            direction, from hardware and software issues to programming problems, especially with
            languages I know, and otherwise having read about many different technologies.
          </li>
          <li>
            📫 How to reach me: <a href='mailto:contact@retrixe.xyz'>contact@retrixe.xyz</a> :^) I'm{' '}
            <a href='https://github.com/retrixe'>@retrixe</a> on GitHub, and I have a Discord server
            for my projects <a href='https://discord.gg/MFSJa9TpPS'>here</a>.
          </li>
          <li>⚡ Fun fact: Samsung is currently ~20% of South Korea’s GDP.</li>
          <li>🐛 Good tip: Minimise external dependencies in your projects.</li>
        </ul>
      </div>
    </>
  )
}

export default HomePage

import { useEffect, useState } from 'react'
import styles from './PageContent.module.scss'
import TypedContent from './TypedContent'
import Button from '../../ui/Button'

const hellos = [
  '你好 o/', // Chinese
  '안녕하세요 o/', // Korean
  'いらっしゃいませ o/', // Japanese ('Welcome' not 'Hello' but well /shrug)
  'Hello o/', // English
  'Bonjour o/', // French
  'привіт o/', // Ukrainian
  'مرحبًا o/', // Arabic
  'Hej o/', // Swedish
  'नमस्ते o/', // Hindi
  'नमस्कार o/', // Marathi
]

function HomePage(): React.JSX.Element {
  // TODO: Fade the top and bottom of the page as you scroll
  // TODO: Image placeholders before they load
  // TODO: Move much of this into Astro
  // TODO: Missing icons in Buttons
  // TODO: Overhaul the Button styles to match Concinnity

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const [hello, setHello] = useState(hellos[2]!) // yeah? why not? yeah im a little bit of a weeb?
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  useEffect(() => setHello(hellos[Math.floor(Math.random() * hellos.length)]!), [])

  return (
    <>
      <header className={styles.header}>
        <div>
          <TypedContent component='h1' content={hello} speed={100} />
          <br />
          <p>
            I'm a student at MIT World Peace University, with years of experience working on many
            different projects. Formerly worked full-time at Apconic Software Pvt Ltd for a year,
            and in my spare time, I work on multiple open-source projects.
          </p>
        </div>
        <img className={styles['header-pic']} src='https://github.com/retrixe.png' alt='ibu' />
      </header>
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
      <div className={styles.segment}>
        <div>
          <h2>EnderChat</h2>
          <br />
          <p>An app for Android/iOS to chat on Minecraft servers from your phone.</p>
          <br />
          <a
            href='https://play.google.com/store/apps/details?id=com.enderchat'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button>EnderChat on Play Store</Button>
          </a>{' '}
          <a href='https://github.com/retrixe/EnderChat' target='_blank' rel='noopener noreferrer'>
            <Button>GitHub</Button>
          </a>
        </div>
        {/* TODO: Image */}
      </div>
      <hr />
      <div className={styles.segment}>
        <div>
          <h2>octyne/ecthelion</h2>
          <br />
          <p>
            A process manager with an HTTP API for console and file access.
            <br />
            Ecthelion complements Octyne as the web dashboard for remote administration.
          </p>
          <br />
          <a href='https://github.com/retrixe/octyne' target='_blank' rel='noopener noreferrer'>
            <Button>octyne on GitHub</Button>
          </a>{' '}
          <a href='https://github.com/retrixe/ecthelion' target='_blank' rel='noopener noreferrer'>
            <Button>Ecthelion on GitHub</Button>
          </a>
        </div>
        {/* TODO: Image */}
      </div>
      <hr />
      <div className={styles.segment}>
        <div>
          <h2>imprint</h2>
          <br />
          <p>
            An small, intuitive app to flash ISOs and disk images to external drives e.g. USB
            drives.
          </p>
          <br />
          <a href='https://github.com/retrixe/imprint' target='_blank' rel='noopener noreferrer'>
            <Button>imprint on GitHub</Button>
          </a>
        </div>
        {/* TODO: Image */}
      </div>
      <hr />
      <div className={styles.segment}>
        <div>
          <h2>concinnity</h2>
          <br />
          <p>Watch videos together with others on the internet.</p>
          <br />
          <a href='https://concinnity.retrixe.xyz' target='_blank' rel='noopener noreferrer'>
            <Button>Try it out!</Button>
          </a>{' '}
          <a href='https://github.com/retrixe/concinnity' target='_blank' rel='noopener noreferrer'>
            <Button>concinnity on GitHub</Button>
          </a>
        </div>
        {/* TODO: Image */}
      </div>
      <hr />
      <div className={styles.segment}>
        <div>
          <h2>IveBot</h2>
          <br />
          <p>
            The bot that made the iPhone X. A multipurpose Discord bot with a large suite of
            features.
          </p>
          <br />
          <a href='https://ivebot.vercel.app' target='_blank' rel='noopener noreferrer'>
            <Button>IveBot dashboard</Button>
          </a>
        </div>
        {/* TODO: Image */}
      </div>
      <hr />
      <div className={styles.segment}>
        <div>
          <h2>MythicMC</h2>
          <br />
          <p>A Minecraft server with factions, survival, creative, minigames and PvP.</p>
          <br />
          <p>
            My work on MythicMC has been extensive, e.g. developing plugins to control game
            behaviour, control player permissions, a fully custom{' '}
            <a href='https://store.mythicmc.org'>storefront</a>, handling system administration,
            etc.
          </p>
          <br />
          <a href='https://mythicmc.org' target='_blank' rel='noopener noreferrer'>
            <Button>MythicMC website</Button>
          </a>
        </div>
        {/* TODO: Image */}
      </div>
      <hr />
      <div className={styles['text-segment']}>
        <h2>...and more</h2>
        <br />
        <p>
          <a href='https://gitlab.com/retrixe'>
            My GitLab has some random Minecraft mods and plugins I wrote for fun :^)
          </a>
        </p>
        <br />
        <p>
          📰 I have a bunch of projects I no longer maintain, but they still might be interesting to
          someone: <a href='https://github.com/retrixe/modpack'>modpack</a>,{' '}
          <a href='https://github.com/retrixe/bug-tracker'>bug-tracker</a>,{' '}
          <a href='https://github.com/retrixe/coupe-video'>coupe-video</a>,{' '}
          <a href='https://github.com/cerulean-app'>cerulean</a>,{' '}
          <a href='https://github.com/ezchat'>ez.chat</a>,{' '}
          <a href='https://github.com/retrixe/area51'>Area51</a>,{' '}
          <a href='https://github.com/retrixe/decaffeinater'>decaffeinater</a>, and reconsole.
        </p>
      </div>
      <hr />
      <div className={styles['text-segment']}>
        <h2>Reach me at...</h2>
        <br />
        <p>
          📫 <a href='mailto:contact@retrixe.xyz'>contact@retrixe.xyz</a> :^) I'm{' '}
          <a href='https://github.com/retrixe'>@retrixe</a> on GitHub, and I have a Discord server
          for my projects <a href='https://discord.gg/MFSJa9TpPS'>here</a>.
        </p>
        <br />
        <p>
          💬 Ask me about... anything, really! I have a lot of different interests I'd love to talk
          about, and if you need help with anything hardware/software, I'm sure I can point you in
          the right direction!
        </p>
      </div>
      <hr />
      <footer className={styles.footer}>
        <p>⚡ Fun fact: Samsung is currently ~20% of South Korea’s GDP.</p>
        <p>🐛 Good tip: Minimise external dependencies in your projects.</p>
      </footer>
    </>
  )
}

export default HomePage

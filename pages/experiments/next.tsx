import Meta from '../../src/layout/Meta'
import TopBar from '../../src/layout/TopBar'
import CentredContent from '../../src/layout/CentredContent'
import TypedContent from '../../src/components/TypedContent'
import { useState } from 'react'

function HomePage(): JSX.Element {
  // FIXME: Work without JavaScript
  // FIXME: This is kinda ugly, to be quite honest
  const [titleRendered, setTitleRendered] = useState(false)

  return (
    <>
      <Meta
        title={"Home - retrixe's site"}
        description='The home page to my website.'
        url='https://retrixe.xyz/'
      />
      <TopBar />
      <CentredContent>
        <TypedContent
          component='h1'
          content={`Hey, I'm ibu o/`}
          speed={100}
          onFinish={() => {
            setTitleRendered(true)
          }}
        />
        <br />
        {titleRendered && (
          <ul>
            <li>
              {/* FIXME: could we dynamically calculate this?... */}
              <TypedContent component='h2' content='✨ Age: 20' speed={25} />
            </li>
            <br />
            <li>
              {/* FIXME: this could be better... */}
              <TypedContent
                component='h2'
                content='🎆 Experience: Java, Kotlin, Golang, Rust, Python, TypeScript, and more'
                speed={25}
              />
            </li>
            <br />
            <li>
              <TypedContent
                component='h2'
                content={`🎓 Pursuing bachelor's degree in CS at MIT World Peace University`}
                speed={25}
              />
            </li>
            <br />
            <li>
              <TypedContent component='h2' content='📫 Mail me at contact@retrixe.xyz' speed={25} />
            </li>
            <br />
            <li>
              <TypedContent component='h2' content='💬 Reach me via Discord here' speed={25} />
            </li>
            <br />
            <li>
              <TypedContent component='h2' content='🐧 Fedora Workstation 40' speed={25} />
            </li>
          </ul>
        )}
      </CentredContent>
    </>
  )
}

export default HomePage

/* TODO
- top and bottom of the page fade away as you scroll
- description fades in (or, slides/fades in from the sides)
- image placeholders before they load?
- just go with regular cards for projects nothing fancy
- shiny links
- page transitions

format of website:
<heading>
<content>
<cards with projects>
<random shit at the end maybe>

I'm a student at MIT World Peace University, with years of experience working on many different projects. Formerly worked full-time at Apconic Software Pvt Ltd for a year, and in my spare time, I work on multiple open-source projects.

- 🎆 I have in-depth experience using JavaScript (TypeScript, Node.js, React, React Native and associated tools like Babel and webpack), Java, Kotlin and Golang (a personal favourite). I started learning programming with Python, but I haven't worked with it seriously in a long time. I've used databases like MySQL/MariaDB, MongoDB, PostgreSQL and Redis and I'm interested in using more like Cassandra and Elastisearch in the future. I've worked with a variety of technologies and read about many more, so this is by no means an exhaustive list.
- 🐧 I'm highly experienced with using Linux and system administration (tools like systemd, package management with apt/rpm, repairing broken systems, livepatch/kpatch, maintenance, system partitioning, database setup, nginx, etc).
- 🔍 I'm really good at googling and following the xkcd tech support cheat sheet.
- 🔭 I’m currently working on:
  - [EnderChat](https://github.com/retrixe/EnderChat) (a modern React Native rewrite of ChatCraft),
  - [octyne](https://github.com/retrixe/octyne)/[ecthelion](https://github.com/retrixe/ecthelion) (a process manager with an HTTP API/dashboard),
  - [writer](https://github.com/retrixe/writer) (GUI app to flash ISOs),
  - [modpack](https://github.com/retrixe/modpack) (an installer for my personal Fabric mods),
  - [bug-tracker](https://github.com/retrixe/bug-tracker) (a GitHub issues clone),
  - [coupe-video](https://github.com/retrixe/coupe-video) (website to cut videos with your CPU, no watermarks or uploading),
  - and last but not least, extensive work on [MythicMC](https://github.com/mythicmc) including a custom [store](https://store.mythicmc.org) and many plugins in Java/Kotlin.
  - [You can find my GitLab for fun projects as well.](https://gitlab.com/retrixe) This isn't an exhaustive list, I work on many projects in my spare time.
- 🌱 I’m currently learning how to write a programming language and getting more familiar with C++ and Rust.
- 🎓 I'm currently studying a bachelor's degree in Computer Science at MIT World Peace University.
- 📰 I've previously worked on [ez.chat (could restart in free time)](https://github.com/ezchat), [Area51](https://github.com/retrixe/area51) (serve files over HTTP), [decaffeinater](https://github.com/retrixe/decaffeinater), reconsole and electron-installer-linux.
- 💬 Ask me about anything I know! I'm sure I can help you out and point you in the right direction, from hardware and software issues to programming problems, especially with languages I know, and otherwise having read about many different technologies.
- 📫 How to reach me: [contact@retrixe.xyz](mailto:contact@retrixe.xyz) I'm [@retrixe](https://github.com/retrixe) on GitHub, and I have a Discord server for my projects [here](https://discord.gg/MFSJa9TpPS).
- ⚡ Fun fact: Samsung is currently ~20% of South Korea’s GDP.
- 🐛 Good tip: Minimise external dependencies in your projects.
*/

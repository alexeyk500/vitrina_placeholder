import classes from './page.module.css'
import Image from 'next/image'

import appView from '../../public/app_view.jpg'

export default function Home() {
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>
        {'Скоро здесь будет сервис\n"МегаВитрина"'}
      </h1>
      <div className={classes.imageContainer}>
        <Image src={appView} alt="main app page" className={classes.img}/>
      </div>
      <div className={classes.authority}>
        {`© разработка и дизайн A500Studio  2023 г.`}
      </div>

    </main>
  )
}

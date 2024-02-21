// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import State from './components/state'
import Qstate from './qcomps/state'
import StateObj from './components/stateObj'
import StuckForm from './qcomps/stuckForm'
import TyCrash from './qcomps/thankYouCrash'
import Snapshot from './components/snapshot'
import Snapshot2 from './components/snapshot2'
import QueueUpd from './components/queueUpdates'
import Shopping from './qcomps/shoppingCart'
import UpdObj from './components/updObjects'
import UpdObjForm from './qcomps/updObjectsForm'
import ArtistsArr from './components/artistsArr'
import ArtistsRemoveArr from './qcomps/artistsRemoveArr'
import ArrObj from './qcomps/arrObj'

export default function Home() {
  return (
    <div className={styles.main}>
        {/*<Profile />*/}
        {/*<State />*/}
        {/*<Qstate />*/}
        {/*<StateObj />*/}
        {/*<StuckForm />*/}
        {/*<TyCrash />*/}
        {/*<Snapshot2 />*/}
        {/*<QueueUpd />*/}
        {/*<Shopping />*/}
        {/*<UpdObj />*/}
        {/*<UpdObjForm />*/}
        {/*<ArtistsArr />*/}
        {/*<ArtistsRemoveArr />*/}
        <ArrObj />
    </div>
  )
}

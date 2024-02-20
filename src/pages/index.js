// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './components/gallery'
import Profile_mistake from './qcomps/profile_mistake'
import Firstcomp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import TodoList from "./qcomps/todos";
import Profile_props from "./components/profile_props"
import Gallery_props from './qcomps/gallery_props'
import Square from './components/square'
import Propitem from './components/props_item'
import Qpropitem from './qcomps/props_item'
import Listplain from './components/list_plain'
import Listkeys from './components/list_keys'
import Qlistkeysid from './qcomps/list_keys_id'
import Qrecipts from './qcomps/recipes'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        {/*<Gallery />*/}
        {/*<Profile_mistake />*/}
        {/*<Firstcomp />*/}
        <Bio />
        <TodoList />
        {/*<Profile_props />*/}
        <Gallery_props />
        {/*<Square />*/}
        {/*<Propitem />*/}
        <Qpropitem />
        {/*<Listplain />*/}
        {/*<Listkeys />*/}
        <Qlistkeysid />
        <Qrecipts />
    </div>
  )
}


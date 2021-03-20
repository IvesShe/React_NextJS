import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Button from '../components/Button'


const Home = ()=> {

  function gotoA(){
    Router.push('/turnA')
  }

  return (
    <>
      <div>我是首頁</div>
      <div><Link href="/turnA"><a>跳轉turnA頁面</a></Link></div>
      <div><Link href="/turnB"><a>跳轉turnB頁面</a></Link></div>
      <div>
        <button onClick={gotoA}>編程跳轉A</button>
        <button onClick={gotoA}>編程跳轉A---</button>
      </div>
      <Button>按鍵測試</Button>
    </>
  )
}

export default Home
import React from 'react';
import Video from './Video';
import A from  './Videos/A.mp4';
import B from  './Videos/B.mp4';
import C from  './Videos/C.mp4';
// import D from  './Videos/D.mp4';
import E from  './Videos/E.mp4';
import F from  './Videos/F.mp4';
import G from  './Videos/G.mp4';
import J from  './Videos/J.mp4';
function App() {

const first='https://v16m.tiktokcdn.com/e09f91444098b6d1404eb565fee731d8/60329c9f/video/tos/useast2a/tos-useast2a-ve-0068c002/0c735836ffab4848af9e3db264cd9efc/?a=1233&br=5372&bt=2686&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102211146550101151490020451659F&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=MzYzPDtweTZ1MzMzaDczM0ApaTU0NjgzaTtpNzY6Mzo2NmdlLjJta2pmLWpgLS0yMTZzczAwLzM1MmM0LjEvXy8yYTM6Yw%3D%3D&vl=&vr=';
const second="https://v16m.tiktokcdn.com/2dac5556dc0f0e72c6e88b569293e393/60329f6d/video/tos/alisg/tos-alisg-pve-0037c001/194aedf1be06425a90d755e5e6846729/?a=1233&br=4238&bt=2119&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102211158500101151192461A522CDD&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M3NteWZ3ZWhzMzMzZTczM0ApOzhoZGZmZzw7N2c2ZzxlPGctX2ptZHM2cDNgLS02MTRzczZeYzAyMDMxNS5iMzMzMV46Yw%3D%3D&vl=&vr=" ;
const third="https://v77.tiktokcdn.com/886946c8bbbfe3cd2070551cde81625e/60329ca6/video/tos/useast2a/tos-useast2a-ve-0068c003/e1c6b32be24045e097a31d053ad7816d/?a=1233&br=3838&bt=1919&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102211146550101151490020451659F&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=am15dWg5dmhuMzMzOjczM0ApZGc3NDo8Zjs0NzZoZmk8OmczNWdsMW0uYl9gLS1iMTZzczQxXi80Nl80YV5eYWFiLjE6Yw%3D%3D&vl=&vr=";
return (
    <>
      <div className='app'>
        {/* <h1>Hi this is a tiktok clone</h1> */}
        <div className='main_video_container'>
          <Video likes={313} source={J}/>
          <Video likes={934} source={B}/>
          <Video likes={999} source={C}/>
          {/* <Video likes={34} source={D}/> */}
          <Video likes={1045} source={E}/>
          <Video likes={1045} source={F}/>
          <Video likes={999} source={G}/>
          {/* <Video likes={34} source={H}/>
          <Video likes={1045} source={I}/> */}
          <Video likes={1045} source={A}/>
        </div>
      </div>
    </>
  )
}

export default App

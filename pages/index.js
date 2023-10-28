import Head from 'next/head'
import MainLayout from '@/components/MainLayout'
import { Carousel } from 'antd'


export default function Home() {
  return (
    <>
      <MainLayout>
      <section>
        <Carousel autoplay level={2}>
          <div>
            <img style={{width:'100%', maxHeight:'450px'}} src='/carousel/next.svg'/>
          </div>
          <div>
            <img style={{width:'100%', maxHeight:'450px'}} src='/carousel/next.svg'/>
          </div>
          <div>
            <img style={{width:'100%', maxHeight:'450px'}} src='/carousel/next.svg'/>
          </div>
        </Carousel>
      </section> 
      </MainLayout>
    </>
  )
}

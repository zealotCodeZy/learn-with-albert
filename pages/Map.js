import Head from 'next/head'
import MainLayout from '@/components/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout>
      <section>
        Map projects begin here. Now show the position of our school.jlkjlkjlkjljl
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9252.458204095834!2d-118.12637444490731!3d34.05858151890758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c58d91d65d47%3A0x358fa24c39b0407!2z5LiB6IOW5a2Q5bm_5Zy6!5e0!3m2!1szh-CN!2sus!4v1698536715953!5m2!1szh-CN!2sus" width="600" height="450" style={{}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section> 
      </MainLayout>
    </>
  )
}

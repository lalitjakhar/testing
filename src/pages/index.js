import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <section className={styles.tempelate_page_body}>
        <div className={styles.page_inner_body}>
          <div className={styles.page_head}>
            <div className={styles.page_head_content}>
              <p>Your Current Plan</p>
              <h5>Starter Trial &#8226;500MAUs</h5>
            </div>
          </div>
          <div className={styles.plan_choose_body}>
            <h2>Choose a plan</h2>
            <div class={`${styles.bill_content} form-check form-switch px-3`}>
              <h4>Billed Monthly</h4>
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <h4>Billed Anually</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
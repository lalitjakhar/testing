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
              <p>Your Current Plan:</p>
              <h5>Starter Trial &#8226;500MAUs</h5>
            </div>
          </div>
          <div className={styles.plan_choose_body}>
            <h2>Choose a plan</h2>
            <div className={`${styles.bill_content} form-check form-switch`}>
              <div className={`${styles.bill_content_monthly} form-switch-text`}>
                <span>Billed monthly</span>
              </div>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <div className={`${styles.bill_content_anually} form-switch-text`}>
                <span>Billed anually</span>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-4">
                <div className={styles.membership_card_body}>
                  <div className={styles.membership_body_content}>
                    <h5>Starter</h5>
                    <h1>$19</h1>
                  </div>
                  <div className={styles.membership_list_contents}>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className={styles.membership_button_content}>
                    <button type="button" class="btn btn-outline-danger">Choose Plan</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.membership_card_body}>
                  <div className={styles.membership_body_content}>
                    <h5>Pro</h5>
                    <h1>$99 <span>/per month</span></h1>
                  </div>
                  <div className={styles.membership_button_content}>
                    <button type="button" class="btn btn-danger">Choose Plan</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.membership_card_body}>
                  <div className={styles.membership_body_content}>
                    <h5>Enterprise</h5>
                    <h1>Let's Talk</h1>
                  </div>
                  <div className={styles.membership_button_content}>
                    <button type="button" class="btn btn-outline-danger">Contact Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
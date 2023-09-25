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
                      <li>500MAUs</li>
                      <li>3 Projects</li>
                      <li>Unlimited Guides</li>
                      <li>Unlimited Flows</li>
                      <li>Unlimited Branded Themes</li>
                      <li>Email Support</li>
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
                  <div className={styles.membership_card_drop}>
                    <div class="btn-group">
                      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        2500 MAUs
                      </button>
                      <ul className={`${styles.drop_show_body} dropdown-menu`}>
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.membership_list_contents}>
                    <ul>
                      <li>All Starter Features</li>
                      <li>Unlimited Projects</li>
                      <li>Unlimited fully costumisable themes</li>
                      <li>A dedicated customer success manager</li>
                    </ul>
                  </div>
                  <div className={styles.membership_button_content}>
                    <button type="button" class="btn btn-danger">Choose Plan</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className={styles.membership_card_body}>
                  <div className={`${styles.membership_body_content} pb-5`}>
                    <h5>Enterprise</h5>
                    <h1>Let's Talk</h1>
                  </div>
                  <div className={styles.membership_list_contents}>
                    <ul>
                      <li>All Pro Features</li>
                      <li>Unlimited MAUs</li>
                      <li>Dedicated Environment</li>
                      <li>Enterprise Account Administration</li>
                      <li>Premium Support & Services</li>
                    </ul>
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
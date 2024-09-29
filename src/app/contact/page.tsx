import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/signature-dark.png";
import Navbar from "@/components/Navbar";
import styles from "../../styles/Contact.module.scss";
import ContactForm from "@/components/Contactform";
import "../../app/globals.css";

export default function Contact() {
  return (
    <>
      <main className={styles.contact}>
        <div className={styles.contactLogoContainer}>
          <Link href="/">
            <Image className="contact__logo" src={Logo} alt="Ozzie's Logo" height={150} width={200}></Image>
          </Link>
          <Navbar />
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            <h1 className={styles.contactText}> Lets navigate the seas of opportunity together!</h1>
          </div>
          <div className={styles.contactContent}>
            <p className={styles.contactParagraph}>
              Looking for a photographer who can perfectly capture your special moments? Contact me today! Whether it’s 
              workshops or landscape photography, Ozzie brings creativity, professionalism, and attention to
              detail to every shoot. Fill out the form below to inquire about availability and pricing, and let’s create memories you’ll cherish
              forever! Don't miss out—get in touch now!
            </p>
          </div>
        </div>

        <article className={styles.contactContent}>
          <form action="https://formsubmit.co/7d373894c22552f7b2056bcfa9178c5b" method="POST">
            <p>Send a message in a bottle our way!</p>
            <h2 className={styles.contactText}>Contact Us</h2>
            <div className={styles.contactContainer}>
              <ContactForm label="Name:" name="Name" type="text" id="name" />
              <ContactForm label="Phone Number:" name="Phone Number" type="tel" id="phoneNumber" />
              <ContactForm label="Email:" name="Email" type="email" id="email" />
              <ContactForm label="Message:" name="Message" type="text" id="Message" />

              <button className="contact__form-button button">Set Sail</button>
            </div>
          </form>
        </article>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactSubtext}>Contact:</h2>
          <a className={styles.contactSubtext} href="tel:3055103802">
            (305)-510-3802
          </a>
          <br />
          <a className={styles.contactSubtext} href="mailto: captozzie@hotmail.com">
            captozzie@hotmail.com
          </a>
        </div>
      </main>
    </>
  );
}

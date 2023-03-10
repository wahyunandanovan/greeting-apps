import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import React from 'react';

interface FormInterface {
  greeting: string;
  name: string;
}

export default function Home() {
  const [formData, setFormData] = React.useState<FormInterface>({
    greeting: '',
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Kirim formData ke server atau lakukan aksi lain yang diinginkan
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form className={styles.submit_form} onSubmit={handleSubmit}>
          <label>
            Ucapan:
            <input type="text" name="greeting" value={formData.greeting} onChange={handleChange} />
          </label>
          <label>
            Nama:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <button type="submit">Kirim</button>
          <h1>tessss</h1>
          <h1>tessss</h1>
        </form>
      </main>
    </>
  );
}

import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import './../css/parallax.css';
import './../css/about-me.css';
import './../css/pageborder.css';
import HomePage from '../pages/index';
export default function App(props: AppProps & { colorScheme: ColorScheme }) {

  return (
    <>
      <Head>
        <title>e</title>
      </Head>
          <NotificationsProvider>
            <HomePage />
          </NotificationsProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

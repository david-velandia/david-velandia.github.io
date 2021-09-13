import React from 'react';
import Head from 'next/head';

import { MainLayout } from '@/layouts';
import { Card, CardTitle, CardContent, Grid } from '@/atoms';
import { useTranslation } from 'react-i18next';
import {
  Link,
  List,
  ListItem,
  ListText,
  MainText,
  Button,
  IconMail,
  IconLinkedIn,
} from './Home.styles';

export const Home = () => {
  const [t] = useTranslation();

  function handleDownloadClick() {}

  return (
    <MainLayout>
      <Head>
        <title>David Velandia - Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid desktop={7} tablet={12} mobile={12} spacing={5}>
        <Card>
          <CardTitle>Test</CardTitle>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo debitis dolores, odit
            voluptatibus, rem ea dicta quis inventore laborum sapiente explicabo, deleniti enim
            quibusdam? Beatae laudantium ad eius perspiciatis?
          </CardContent>
        </Card>
      </Grid>

      <Grid desktop={5} tablet={12} mobile={12} spacing={5}>
        <Card>
          <CardTitle>{t('cv.contact.title')}</CardTitle>
          <CardContent>
            <MainText>{t('cv.contact.content')}</MainText>
            <List>
              <ListItem>
                <Link href={`mailto:${t('cv.contact.email')}`}>
                  <IconMail />
                  <ListText>{t('cv.contact.email')}</ListText>
                </Link>
              </ListItem>
              <ListItem>
                <Link href={t('cv.contact.linkedIn')} rel="noreferrer" target="_blank">
                  <IconLinkedIn />
                  <ListText>andres-david-velandia</ListText>
                </Link>
              </ListItem>
            </List>
            <Button variant="secondary" handleClick={handleDownloadClick}>
              Download CV
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam error eum, voluptate
        commodi laborum doloribus culpa, modi itaque voluptatem nemo a cum optio? Architecto quasi
        quod numquam consequatur labore cum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non dicta commodi animi
        voluptatibus corporis distinctio at, iste maxime, expedita officia mollitia, enim aliquid
        cumque dolor nam excepturi sit recusandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo debitis dolores, odit
        voluptatibus, rem ea dicta quis inventore laborum sapiente explicabo, deleniti enim
        quibusdam? Beatae laudantium ad eius perspiciatis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam error eum, voluptate
        commodi laborum doloribus culpa, modi itaque voluptatem nemo a cum optio? Architecto quasi
        quod numquam consequatur labore cum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non dicta commodi animi
        voluptatibus corporis distinctio at, iste maxime, expedita officia mollitia, enim aliquid
        cumque dolor nam excepturi sit recusandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo debitis dolores, odit
        voluptatibus, rem ea dicta quis inventore laborum sapiente explicabo, deleniti enim
        quibusdam? Beatae laudantium ad eius perspiciatis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam error eum, voluptate
        commodi laborum doloribus culpa, modi itaque voluptatem nemo a cum optio? Architecto quasi
        quod numquam consequatur labore cum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non dicta commodi animi
        voluptatibus corporis distinctio at, iste maxime, expedita officia mollitia, enim aliquid
        cumque dolor nam excepturi sit recusandae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo debitis dolores, odit
        voluptatibus, rem ea dicta quis inventore laborum sapiente explicabo, deleniti enim
        quibusdam? Beatae laudantium ad eius perspiciatis?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam error eum, voluptate
        commodi laborum doloribus culpa, modi itaque voluptatem nemo a cum optio? Architecto quasi
        quod numquam consequatur labore cum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non dicta commodi animi
        voluptatibus corporis distinctio at, iste maxime, expedita officia mollitia, enim aliquid
        cumque dolor nam excepturi sit recusandae.
      </p>
    </MainLayout>
  );
};

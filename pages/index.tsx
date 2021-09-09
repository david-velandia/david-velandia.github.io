import React from 'react';
import { MainLayout } from '@/layouts';
import { Card, CardTitle, CardContent, Grid } from '@/atoms';
import { IconLinkedIn, IconMail } from '@/atoms/Icons';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t] = useTranslation();

  return (
    <MainLayout>
      <Grid desktop={6} tablet={6} mobile={12} spacing={5} noLeftSpacing>
        <Card>
          <CardTitle>Test</CardTitle>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo debitis dolores, odit
            voluptatibus, rem ea dicta quis inventore laborum sapiente explicabo, deleniti enim
            quibusdam? Beatae laudantium ad eius perspiciatis?
          </CardContent>
        </Card>
      </Grid>

      <Grid desktop={6} tablet={6} mobile={12} spacing={5}>
        <Card>
          <CardTitle>{t('cv.contact.title')}</CardTitle>
          <CardContent>
            {t('cv.contact.content')}
            <ul>
              <li>
                <a href={`mailto:${t('cv.contact.email')}`}>
                  <IconMail />
                  {t('cv.contact.email')}
                </a>
              </li>
              <li>
                <a href={t('cv.contact.linkedIn')} rel="noreferrer" target="_blank">
                  <IconLinkedIn />
                  andres-david-velandia
                </a>
              </li>
            </ul>
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
}

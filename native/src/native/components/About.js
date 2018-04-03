import React from 'react';

import { Container, Content, Text, H1, H2, H3, Button } from 'native-base';
import Spacer from './Spacer';

const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>The Test task is done</H1>
      <Spacer size={10} />
      <Text>I have been using Firebase as a starter for storing accounts and mongoDB for storing images with related data</Text>

      <Spacer size={30} />
      <H2>Used technologies:</H2>
      <Spacer size={10} />
      <Text>I have connected firebase and mongoDB and configured the login, also there is an email confirmation integrated by a third-party service. Basically, here we have React Native on the client side with Redux and 2 types of db services (firebase, mLab). </Text>

      <Spacer size={30} />
      <H3>A note from the author</H3>
      <Spacer size={10} />
      <Text> I look forward to an interview!                       @Rostyslav Gogolauri. </Text>
    </Content>
  </Container>
);

export default About;

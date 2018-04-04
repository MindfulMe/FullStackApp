import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import ScansContainer from '../../containers/Scans';
import ScansComponent from '../components/Scans';
import ScanViewComponent from '../components/Scan';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/Profile';

import AboutComponent from '../components/About';

const Index = (
  <Stack>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={"Rosty"}
          icon={() => <Icon name="moon" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={AboutComponent} />
        </Stack>

        <Stack
          key="scans"
          title="My Scans"
          icon={() => <Icon name="star" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="scans" component={ScansContainer} Layout={ScansComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="cloud" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
          <Scene
            back
            key="forgotPassword"
            title="FORGOT PASSWORD"
            {...DefaultProps.navbarProps}
            component={ForgotPasswordContainer}
            Layout={ForgotPasswordComponent}
          />
          <Scene
            back
            key="updateProfile"
            title="UPDATE PROFILE"
            {...DefaultProps.navbarProps}
            component={UpdateProfileContainer}
            Layout={UpdateProfileComponent}
          />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="scan"
      title="PHOTO"
      {...DefaultProps.navbarProps}
      component={ScansContainer}
      Layout={ScanViewComponent}
    />
  </Stack>
);

export default Index;

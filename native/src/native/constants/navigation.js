import Colors from '../../../native-base-theme/variables/commonColor';

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: 'white' },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: 'center',
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
    },
    backButtonTintColor: Colors.textColor,
  },

  tabProps: {
    swipeEnabled: true,
    activeBackgroundColor: 'rgba(255,255,255,0.1)',
    inactiveBackgroundColor: "rgba(0,102,255,0.7)",
    tabBarStyle: { backgroundColor: "white" },
  },

  icons: {
    style: { color: 'black' },
  },
};

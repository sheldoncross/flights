import { StyleSheet, Platform, SafeAreaView, View } from 'react-native';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Hidden } from '@mui/material';

function WebCenter({ children }: { children: React.ReactNode }) {
  if (Platform.OS !== 'web') {
    return (
      <View>
        {children}
      </View>
    )
  }
  return (
    <View style={styles.webCenter}>
      {children}
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Tabs 
            value={0} 
            aria-label="Tab Navigation"
            orientation="vertical"
            indicatorColor="primary"
            textColor="primary"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Tab One" />
            <Tab label="Tab Two" />
            <Tab label="Tab Three" />
          </Tabs>
        </View> 
        <View style={styles.content}>
          <WebCenter>
            <Tabs 
              value={0} 
              aria-label="Tab Navigation"
              orientation="horizontal"
              indicatorColor="primary"
              textColor="primary"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
            </Tabs>
            <View>
              {/* Insert cards here */}
            </View>
          </WebCenter>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webCenter: {
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    width: 150
  },
  content: { 
    flexBasis: '90%',
    marginTop: 10
  }
});

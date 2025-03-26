import { StyleSheet, Platform, SafeAreaView, View } from 'react-native';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
    <SafeAreaView style={styles.sidebar}>
          <View style={styles.sidebarTabs}>
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
      <WebCenter>
        <View style={styles.mainContent}>
          <p>Main Content</p>
        </View>
      </WebCenter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webCenter: {
    maxWidth: 600, // Or whatever width you need
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%', // Ensure it takes full width of parent
  },
  sidebarTabs: {
    width: 150, // Adjust width as needed
  },
  mainContent: {
    flex: 1,
    padding: 10
  },
  sidebar: {
    flex: 1,
    flexDirection: 'row'
  }  
});

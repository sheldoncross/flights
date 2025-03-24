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
    <SafeAreaView style={styles.container}>
      <WebCenter>
        <View>
            <Tabs value={0} aria-label="Tab Navigation">
              <Tab label="Tab One" />
              <Tab label="Tab Two" />
              <Tab label="Tab Three" />
            </Tabs>
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
});

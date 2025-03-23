import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

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
          {/* ScrollView consisting of cards with sidebar for naviagation and initial elements */}
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

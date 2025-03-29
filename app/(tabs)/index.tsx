import { StyleSheet, Platform, SafeAreaView, View, ScrollView, Text } from 'react-native';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
        <View style={styles.leftColumn}>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>✈️</Text>
          </View>
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
        </View>
        <View style={styles.content}>
          <WebCenter>
            <Typography variant="h4" component="h1" gutterBottom sx={{ paddingX: 2, paddingTop: 0, textAlign: 'center' }}>
              Flights
            </Typography>
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
            <ScrollView style={styles.scrollViewContainer} >
              <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 1</Typography></CardContent></Card>
              <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 2</Typography></CardContent></Card>
              <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 3</Typography></CardContent></Card>
              <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 4</Typography></CardContent></Card>
              <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 5</Typography></CardContent></Card>
            </ScrollView>
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
  leftColumn: {
    width: 150,
    display: 'flex',
    flexDirection: 'column',
  },
  emojiContainer: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
  },
  sidebar: {
    width: 150,
  },
  content: {
    flexBasis: '90%',
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
    width: '100%',
  },
});

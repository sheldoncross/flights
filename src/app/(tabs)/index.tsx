import { StyleSheet, Platform, SafeAreaView, View, ScrollView, Text, ViewStyle, TextStyle } from 'react-native';
import React, { useState, useEffect } from 'react';
import { initializeDatabase } from '../../backend/database';
import { addUserMessage } from '../../backend/database/operations';
import { SQLiteDatabase } from 'expo-sqlite';

// Conditionally import MUI components only for web
const MUIComponents = Platform.OS === 'web' 
  ? {
    Tabs: require('@mui/material/Tabs').default,
    Tab: require('@mui/material/Tab').default,
    Card: require('@mui/material/Card').default,
    CardContent: require('@mui/material/CardContent').default,
    Typography: require('@mui/material/Typography').default,
    TextField: require('@mui/material/TextField').default,
  } 
  : {
    Tabs: () => null,
    Tab: () => null,
    Card: () => null,
    CardContent: () => null,
    Typography: () => null,
    TextField: () => null,
  };

// Use the conditionally imported components
const { Tabs, Tab, Card, CardContent, Typography, TextField } = MUIComponents;

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
  const [database, setDatabase] = useState<SQLiteDatabase | null>(null);
  
  useEffect(() => {
    const initDb = async () => {
      const db = await initializeDatabase();
      // setDatabase(db);
    };
    initDb();
  }, []);

  // 1. Add state for the input field
  const [inputValue, setInputValue] = useState('');

  // 3. Define the submission handler function
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return; // Don't send empty messages
    if (!database) return; // Don't send if database isn't initialized

    console.log("Sending message:", inputValue);

    // addUserMessage(database, inputValue, true)

    setInputValue('');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>✈️</Text>
          </View>
          <View style={styles.sidebar}>
            {Platform.OS === 'web' && (
              <Tabs 
                value={0} 
                aria-label="Tab Navigation"
                orientation="vertical"
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Tab One" />
                <Tab label="Tab Two" />
                <Tab label="Tab Three" />
              </Tabs>
            )}
          </View>
        </View>
        <View style={styles.content}>
          <WebCenter>
            {Platform.OS === 'web' && (
              <Typography variant="h4" component="h1" gutterBottom sx={{ paddingX: 2, paddingTop: 0, textAlign: 'center' }}>
                Flights
              </Typography>
            )}
            {Platform.OS !== 'web' && (
              <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 10 }}>
                Flights
              </Text>
            )}
            <View style={styles.contentTabs}>
              {Platform.OS === 'web' && (
                <Tabs 
                  value={0} 
                  aria-label="Tab Navigation"
                  orientation="horizontal"
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Tab One" />
                  <Tab label="Tab Two" />
                  <Tab label="Tab Three" />
                </Tabs>
              )}
            </View>
            <View>
              <ScrollView style={styles.messagesScrollView}>
                <View style={[styles.messageContainer, styles.userMessage]}>
                  <Text>Hi there!</Text>
                </View>
                <View style={[styles.messageContainer, styles.botMessage]}>
                  <Text>Hello! How can I help you plan your trip today?</Text>
                </View>
                <View style={[styles.messageContainer, styles.userMessage]}>
                  <Text>I'm thinking of going to Hawaii.</Text>
                </View>
                <View style={[styles.messageContainer, styles.botMessage]}>
                  <Text>Great choice! Which island are you interested in?</Text>
                </View>
              </ScrollView>
              {Platform.OS === 'web' && (
                <TextField
                  label="Your message"
                  variant="outlined"
                  sx={{ marginX: 2, marginTop: 2 }}
                  value={inputValue}
                  onChange={(
                    e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => setInputValue(e.target.value)}
                  onKeyPress={(
                    e : React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
                  ) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
              )}
            </View>
            <ScrollView style={styles.scrollViewContainer}>
              {Platform.OS === 'web' && (
                <>
                  <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 1</Typography></CardContent></Card>
                  <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 2</Typography></CardContent></Card>
                  <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 3</Typography></CardContent></Card>
                  <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 4</Typography></CardContent></Card>
                  <Card sx={{ marginY: 1, marginX: 2 }}><CardContent><Typography>Card 5</Typography></CardContent></Card>
                </>
              )}
              {Platform.OS !== 'web' && (
                <>
                  <View style={styles.cardStyle}><Text>Card 1</Text></View>
                  <View style={styles.cardStyle}><Text>Card 2</Text></View>
                  <View style={styles.cardStyle}><Text>Card 3</Text></View>
                  <View style={styles.cardStyle}><Text>Card 4</Text></View>
                  <View style={styles.cardStyle}><Text>Card 5</Text></View>
                </>
              )}
            </ScrollView>
          </WebCenter>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Create properly typed styles
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
  contentTabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    flexDirection: 'column',
    height: Platform.OS === 'web' ? '100vh' as any : '100%',
  },
  scrollViewContainer: {
    flex: 1,
    width: '100%',
  },
  messagesScrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messageContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 8,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
  },
  botMessage: {
    backgroundColor: '#E5E5EA',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
  },
  cardStyle: {
    margin: 8,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
});

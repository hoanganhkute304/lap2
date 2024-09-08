import React, { useState, useEffect } from 'react';
import {
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar
} from 'react-native';

const App = () => {
  const [isPortrait, setIsPortrait] = useState(true);
  const screenWidth = Dimensions.get('window').width;

  // Xử lý thay đổi hướng màn hình
  const handleOrientationChange = () => {
    const { height, width } = Dimensions.get('window');
    setIsPortrait(height > width);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Tùy chỉnh thanh trạng thái */}
      <StatusBar
        barStyle={isPortrait ? 'dark-content' : 'light-content'}
        backgroundColor={isPortrait ? 'white' : 'black'}
      />
      
      {}
      <Image
        source={{ uri: 'https://editors.dexerto.com/wp-content/uploads/2024/03/04/jujutsu-kaisen-sukuna.jpeg' }}
        style={{
          width: screenWidth * 0.8,
          height: isPortrait ? (screenWidth * 0.8) * 0.5 : (screenWidth * 0.4),
        }}
      />
      
      {/* Nút bấm thay đổi dựa trên hướng màn hình */}
      <View style={[styles.buttonContainer, { flexDirection: isPortrait ? 'column' : 'row' }]}>
        <View style={{ ...styles.button, width: screenWidth / 2 - 20 }}>
          <Button title="Button 1" onPress={() => {}} />
        </View>
        <View style={{ ...styles.button, width: screenWidth / 2 - 20 }}>
          <Button title="Button 2" onPress={() => {}} />
        </View>
      </View>

      {/* Trường nhập liệu với KeyboardAvoidingView */}
      <TextInput style={styles.input} placeholder="Enter text" />
    </KeyboardAvoidingView>
  );
};

// Thiết lập kiểu dáng riêng cho từng nền tảng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Platform.select({
      ios: 20,
      android: 10,
    }),
  },
  buttonContainer: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginTop: 20,
  },
});

export default App;

import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { theme } from '../theme/theme';

function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn.duration(600)} style={styles.content}>
        <Animated.Image
          entering={FadeInDown.duration(600).delay(200)}
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Medbud logo"
        />
        <Animated.Text
          entering={FadeInDown.duration(600).delay(400)}
          style={styles.title}
        >
          Medbud
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.duration(600).delay(600)}
          style={styles.tagline}
        >
          Personal nurse right in your pocket
        </Animated.Text>
      </Animated.View>
      <Animated.View entering={FadeInDown.duration(600).delay(800)}>
        <Button
          mode="contained"
          onPress={() => navigation.replace('MainApp')}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          accessibilityLabel="Get started with Medbud"
        >
          Get Started
        </Button>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontFamily: theme.typography.bold.fontFamily,
    fontWeight: theme.typography.bold.fontWeight,
    fontSize: 36,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  tagline: {
    fontFamily: theme.typography.regular.fontFamily,
    fontSize: theme.typography.regular.fontSize,
    color: theme.colors.disabled,
    textAlign: 'center',
    maxWidth: 300,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    elevation: 2,
    marginBottom: theme.spacing.lg,
    shadowColor: theme.colors.text,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonContent: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
  },
  buttonLabel: {
    fontFamily: theme.typography.medium.fontFamily,
    fontSize: theme.typography.regular.fontSize,
    color: '#FFFFFF',
  },
});

export default SplashScreen;
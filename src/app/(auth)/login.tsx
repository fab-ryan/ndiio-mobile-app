import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, TextInput, Button } from '@/src/components';
import { ArrowIconButton } from '@/src/shared';
import { useThemeColor, useForm } from '@/src/hooks';
import { LoginInterfaceInputs } from '@/src/types';
import { authLoginSchema } from '@/src/schemas';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<LoginInterfaceInputs, typeof authLoginSchema>(
    {
      email: '',
      password: '',
    },
    authLoginSchema,
    'all',
  );

  useEffect(() => {
    router.navigate('/(tabs)/');
  }, [router]);

  const handleLogin = (data: any) => {
    router.navigate('/(tabs)');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ArrowIconButton />

      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Welcome back to Ndiio.com</Text>
        <Text
          style={{
            color: useThemeColor({}, 'light_grey'),
            textAlign: 'center',
            marginTop: 20,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Sign in to continue to your account and explore the latest features
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          control={control}
          name='email'
          label='Email/Username'
          required
          keyboardType='email-address'
          placeholder='Enter your email'
          error={errors.email?.message?.toString()}
        />
        <View style={{ height: 20 }} />
        <TextInput
          control={control}
          name='password'
          label='Password'
          required
          secureTextEntry
          placeholder='Enter your password'
          error={errors.password?.message?.toString()}
        />
        <View style={{ height: 40 }} />
        <Button
          title='Sign in'
          onPress={handleSubmit(handleLogin)}
          disabled={!isValid}
        >
          Sign in
        </Button>
      </View>
      <View style={styles.footerContainer}>
        <Link
          href='/(auth)/forgotPassword'
          style={{
            color: useThemeColor({}, 'text'),
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Forgot password?
        </Link>
        <Link
          href='/(auth)/register'
          style={{
            color: useThemeColor({}, 'primary'),
            textAlign: 'center',
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Sign up
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
    marginTop: 15,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 20,
  },
});

import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, TextInput, Button } from '@/components';
import { ArrowIconButton } from '@/shared';
import { useThemeColor, useForm } from '@/hooks';
import { ForgotPasswordInterfaceInputs } from '@/types';
import { forgotPasswordSchema } from '@/schemas';
import { useRouter } from 'expo-router';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const {
    control,

    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ForgotPasswordInterfaceInputs, typeof forgotPasswordSchema>(
    {
      email: '',
    },
    forgotPasswordSchema,
    'all',
  );

  const handleLogin = (data: any) => {
    router.navigate('/(auth)/verification');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ArrowIconButton href='/(auth)/login' />
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Reset Password</Text>
        <Text
          style={{
            color: useThemeColor({}, 'light_grey'),
            textAlign: 'left',
            marginTop: 20,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Enter your email address or Phone Number to reset your password
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
        <Button
          title='Reset Password'
          onPress={handleSubmit(handleLogin)}
          disabled={!isValid}
        >
            Reset Password
        </Button>
        <View style={{ height: 20 }} />
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
});

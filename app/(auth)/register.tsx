import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from '@/components';
import { useForm, useThemeColor } from '@/hooks';
import { registerSchema } from '@/schemas';
import { ArrowIconButton } from '@/shared';
import { RegisterInterfaceInputs } from '@/types';
import { StyleSheet } from 'react-native';

export default function RegisterScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterInterfaceInputs, typeof registerSchema>(
    {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    registerSchema,
    'all',
  );
  const handleRegister = (data: any) => {
    console.log(data);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ArrowIconButton href='/(auth)/login' />
      <ScrollView>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Create an account</Text>
          <Text
            style={{
              color: useThemeColor({}, 'light_grey'),
              textAlign: 'left',
              marginTop: 20,
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            Enter your details to create an account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            control={control}
            name='name'
            label='Name'
            required
            placeholder='Enter your name'
            error={errors.name?.message?.toString()}
          />
          <View style={{ height: 20 }} />
          <TextInput
            control={control}
            name='phone'
            label='Phone Number'
            required
            placeholder='Enter your phone number'
            error={errors.phone?.message?.toString()}
          />
          <View style={{ height: 20 }} />

          <TextInput
            control={control}
            name='email'
            label='Email'
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
          <View style={{ height: 20 }} />
          <TextInput
            control={control}
            name='confirmPassword'
            label='Confirm Password'
            required
            secureTextEntry
            placeholder='Confirm your password'
            error={errors.confirmPassword?.message?.toString()}
          />
          <View style={{ height: 20 }} />
          <Button
            title='Create Account'
            onPress={handleSubmit(handleRegister)}
            disabled={!isValid}
          >
            Create Account
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    padding: 20,
    flexDirection: 'column',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
});

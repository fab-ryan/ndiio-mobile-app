import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, TextInput, Button } from '@/components';
import { useForm, useThemeColor } from '@/hooks';
import { VerificationInterfaceInputs } from '@/types';
import { verificationSchema } from '@/schemas';
import { useRouter } from 'expo-router';

export default function VerificationScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<VerificationInterfaceInputs, typeof verificationSchema>(
    {
      code: '',
    },
    verificationSchema,
    'all',
  );

  const handleLogin = (data: any) => {
    router.navigate('/(auth)/updatePassword');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Verify your account</Text>
        <Text
          style={{
            color: useThemeColor({}, 'light_grey'),
            textAlign: 'left',
            marginTop: 20,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Enter the code sent to your email address
        </Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          control={control}
          name='code'
          label='Verification Code'
          required
          keyboardType='number-pad'
          placeholder='Enter the code'
          error={errors.code?.message?.toString()}
        />
        <View style={{ height: 20 }} />
        <Button
          title='Verify Account'
          onPress={handleSubmit(handleLogin)}
          disabled={!isValid}
        >
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
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

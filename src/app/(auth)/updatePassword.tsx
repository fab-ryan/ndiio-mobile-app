import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, TextInput, Button } from '@/src/components';
import { useForm, useThemeColor } from '@/src/hooks';
import { updatePasswordSchema } from '@/src/schemas';
import { UpdatePasswordInterfaceInputs } from '@/src/types';
import { height } from '@/src/constants';

export default function UpdatePasswordScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UpdatePasswordInterfaceInputs, typeof updatePasswordSchema>(
    {
      password: '',
      confirmPassword: '',
    },
    updatePasswordSchema,
    'all',
  );

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>Update Password</Text>
        <Text
          style={{
            color: useThemeColor({}, 'light_grey'),
            textAlign: 'left',
            marginTop: 20,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          Enter your new password
        </Text>
      </View>

      <View style={styles.formContainer}>
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
          title='Update Password'
          onPress={handleSubmit(handleLogin)}
          disabled={!isValid}
        >
        Save Updates
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    paddingHorizontal: 20,
    marginTop: height * 0.1,
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: height * 0.1,
  },
});

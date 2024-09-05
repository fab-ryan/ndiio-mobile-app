import { useState } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  TextInputProps,
  TextInput as DefaultTextInput,
  Pressable,
} from 'react-native';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { Text } from './ThemedText';
import { Colors } from '@/constants/Colors';
import { Icon } from './ThemedIcon';
import { IconsEnum } from '@/utils';
import { useThemeColor } from '@/hooks';

type InputTextProps = {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  error?: string | boolean;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  required?: boolean;
};

type ControlledTextInputProps<T> = InputTextProps &
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Partial<ControllerProps<T>> &
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Pick<ControllerProps<T>, 'name'> &
  TextInputProps;

function TextInputField({
  style,
  placeholder,
  containerStyle,
  secureTextEntry,
  label,
  keyboardType,
  error,
  onBlur = () => {},
  onFocus = () => {},
  required = false,
  ...props
}: InputTextProps & TextInputProps) {
  const [isFocused, setOnFocus] = useState(false);
  const [secure, setSecure] = useState(secureTextEntry);
  const hasPhonePadKeyboard = keyboardType === 'phone-pad';
  const toggleFocus = () => {
    setOnFocus(!isFocused);
  };
  const toggleSecure = () => {
    setSecure(!secure);
  };
  const onBlurhandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(e);
    toggleFocus();
  };

  const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus(e);
    toggleFocus();
  };

  const color = useThemeColor({ light: '#11181C', dark: '#fff' }, 'primary');

  let _style: StyleProp<TextStyle> = [style];
  if (secureTextEntry) {
    _style = [
      ..._style,
      {
        paddingRight: 40,
      },
    ];
  }

  if (isFocused) {
    _style = [
      ..._style,
      {
        borderColor: Colors.light.primary,
      },
    ];
  }
  if (error) {
    _style = [
      ..._style,
      {
        borderColor: '#F00',
      },
    ];
  }

  if (hasPhonePadKeyboard) {
    _style = [
      ..._style,
      {
        textAlign: 'center',
      },
    ];
  }

  return (
    <View
      style={[
        {
          width: '100%',
        },
      ]}
    >
      {label && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            style={{
              marginBottom: 15,
              color: Colors.light.light_grey,
              fontSize: 18,
            }}
          >
            {label}
          </Text>
          {required && (
            <Text
              style={{
                color: Colors.light.red,
                marginLeft: 5,
                fontSize: 18,
              }}
            >
              *
            </Text>
          )}
        </View>
      )}
      <View>
        <DefaultTextInput
          style={[
            styles.inputContainer,
            _style,
            {
              color,
            },
          ]}
          placeholder={placeholder}
          secureTextEntry={secure}
          keyboardType={keyboardType}
          onBlur={onBlurhandler}
          onFocus={onFocusHandler}
          {...props}
        />
        {secureTextEntry && (
          <Pressable
            onPress={toggleSecure}
            style={{
              position: 'absolute',
              top: 0,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              right: 0,
              width: 48,
            }}
          >
            <Icon
              name={secure ? 'eye' : 'eye-with-line'}
              type={IconsEnum.entypo}
              size={20}
              color={Colors.light.light_grey}
            />
          </Pressable>
        )}
      </View>

      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
}

export const TextInput = <T extends FieldValues = FieldValues>({
  control,
  name,
  rules,
  ...props
}: ControlledTextInputProps<T>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInputField
          {...props}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
      name={name}
    />
  );
};

export const SearchInput = ({
  control,
  placeholder,
}: {
  placeholder?: string;
  control: any;
}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        control={control}
        name='search'
        label=''
        placeholder={placeholder}
        style={{
          borderColor: 'transparent',
          borderWidth: 0,
        }}
      />
      <Pressable style={styles.searchIcon}>
        <Icon
          name='search'
          type={IconsEnum.feather}
          size={20}
          color='#0C1A30'
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    borderColor: Colors.light.light_grey,
  },
  errorMessage: {
    color: '#F00',
    marginTop: 5,
    fontSize: 14,
  },
  searchContainer: {
    width: '100%',
    position: 'relative',
    borderWidth: 0.2,
    borderColor: Colors.light.light_grey,
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 13,
  },
});

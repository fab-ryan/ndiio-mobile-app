import { BackButton, View, Icon, Text } from '@/src/components';
import { Colors } from '@/src/constants';
import { useThemeColor } from '@/src/hooks';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { IconsEnum } from '@/src/utils';
import { Href } from 'expo-router';
import { Pressable } from 'react-native';

interface ArrowIconButtonProps {
  href?: Href;
}
export const ArrowIconButton = ({ href = '/' }: ArrowIconButtonProps) => {
  return (
    <View>
      <BackButton href={href}>
        <Icon
          name='chevron-small-left'
          type={IconsEnum.entypo}
          size={34}
        />
      </BackButton>
    </View>
  );
};

export const TopBar = () => {
  const color = useThemeColor({}, 'primary');
  const iconColor = useThemeColor({}, 'tabIconDefault');
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors[colorScheme ?? 'light'].background,
        shadowColor: Colors[colorScheme ?? 'light'].blue,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 2,
        marginTop: 0,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color,
            textAlign: 'center',
          }}
        >
          Ndiio
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          right: 20,
          top: 20,
        }}
      >
        <Notification color={iconColor} />

        <Cart color={iconColor} />
      </View>
    </View>
  );
};

const Notification = ({ color }: { color: string }) => {
  return (
    <View>
      <Icon
        name='notifications-sharp'
        type={IconsEnum.ionicon}
        size={24}
        color={color}
      />
      <View style={{ position: 'absolute', top: 0, right: 0 }}>
        <View
          style={{
            backgroundColor: 'red',
            width: 10,
            height: 10,
            borderRadius: 5,
          }}
        ></View>
      </View>
    </View>
  );
};

const Cart = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        position: 'relative',
        marginLeft: 20,
      }}
    >
      <Icon
        name='cart'
        type={IconsEnum.ionicon}
        size={24}
        color={color}
      />
      <View style={{ position: 'absolute', top: 0, right: 0 }}>
        <View
          style={{
            backgroundColor: 'red',
            width: 10,
            height: 10,
            borderRadius: 5,
          }}
        ></View>
      </View>
    </View>
  );
};
interface TopBarProps {
  title: string;
  onPress?: () => void;
}

export const TopBarWithBackButton = ({ title , onPress}: TopBarProps) => {
  const iconColor = useThemeColor({}, 'tabIconDefault');
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors[colorScheme ?? 'light'].background,
        shadowColor: Colors[colorScheme ?? 'light'].blue,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 2,
        marginTop: 0,
      }}
    >
      <Pressable
        onPress={() => onPress && onPress()}
        style={{
          position: 'absolute',
          left: 20,
          top: 15,
          zIndex: 100,
        }}
      >
        <Icon
          name='chevron-small-left'
          type={IconsEnum.entypo}
          size={ 34}
        />
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 700, textAlign: 'center' }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          right: 20,
          top: 20,
        }}
      >
        <Notification color={iconColor} />

        <Cart color={iconColor} />
      </View>
    </View>
  );
};

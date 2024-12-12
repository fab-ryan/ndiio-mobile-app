import { Modal as DefaultModal, ModalBaseProps } from 'react-native';
import { PropsWithChildren } from 'react';
import { BlurView, BlurViewProps } from 'expo-blur';
import { View } from './ThemedView';

interface ThemedModalProps {
  visible: boolean;
  onClose: () => void;
}

export function Modal({
  children,
  visible,
  onClose,
  intensity = 10,
  tint = 'regular',
  ...props
}: PropsWithChildren<ThemedModalProps> & ModalBaseProps & BlurViewProps) {
  return (
    <DefaultModal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      {...props}
    >
      <BlurView
        intensity={intensity}
        tint={tint}
        style={{
          flex:1,
          width: '100%',
          height: '100%',


        }

        }
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            {children}
          </View>
        </View>
      </BlurView>
    </DefaultModal>
  );
}

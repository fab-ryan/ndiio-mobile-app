import { BackButton, View, Icon } from '@/components';
import { IconsEnum } from '@/utils';
import { Href } from 'expo-router';

interface ArrowIconButtonProps {
  href?: Href;
}
export const ArrowIconButton = ({ href='/' }: ArrowIconButtonProps) => {
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

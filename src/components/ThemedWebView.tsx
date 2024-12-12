import RenderHtml from 'react-native-render-html';
import { width } from '../constants';

interface WebviewProps {
  content: string;
}
export const Webview = ({ content }: WebviewProps) => {
  
  return (
    <RenderHtml
      source={{ html: `${content}` }}
      contentWidth={width}
    />
  );
};

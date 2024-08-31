import { useForm, Mode } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const useMyForm = <T extends typeof Object, schema>(
  data: T,
  schema?: schema,
  mode: Mode = 'onBlur',
) => {
  const { control, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: data as T,
    // @ts-ignore
    resolver: schema && yupResolver(schema),
    mode,
  });
  return { control, handleSubmit, watch, setValue, formState };
};

export default useMyForm as <T, schema>(
  data: T,
  schema?: schema,
mode?: Mode,
) => ReturnType<typeof useForm>;
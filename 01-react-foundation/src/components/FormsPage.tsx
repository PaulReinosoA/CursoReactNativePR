import { useForm } from 'react-hook-form';

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: 'paulreinoso@gmail.com',
      password: 'abc123',
    },
  });

  const onSubmit = (myFor: FormInputs) => {
    console.log({ myFor });
  };

  console.log(watch('email'));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>FormsPage</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <input
            type="password"
            placeholder="password"
            {...register('password')}   
          />
          <button type="submit">Ingresar</button>
        </div>
      </form>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};

//* https://react-hook-form.com/get-started
//* con esto no tengo reRenders

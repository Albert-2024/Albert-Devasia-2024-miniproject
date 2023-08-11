import React from 'react';
import { TextInput, Input, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import { Stack } from '@mantine/core';

const Form = () => {
//     const validPhone = (value) => {
//         const isValid = /^\d{10}$/.test(value);
//     }
//     if (!isValid) {
//       setPhoneNumberError('Please enter a valid phone number');
//     } else {
//       setPhoneNumberError('');
//     }

//     setPhoneNumber(value);
//   };
    const form = useForm({
        
        initialValues: {
            email: '',
            name: '',
            phone: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            name: (value) => ((value.length > 2) ? null : 'Invalid name'),
            phone: (value) => ((value.length > 9) ? null : 'Invalid phone')
        }
    });
    const id = useId();


    return (
        <Stack h={400} justify="space-around" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
            <Box maw={400}  c="blue"mx="auto">


                <div className='form' >
                    <form style={{
                        width: '400px',
                        height: '350px',
                    }}
                        onSubmit={form.onSubmit((values) => console.log(values))}>

                        
                        
                        <TextInput
                            mt="lg"
                            placeholder="Your name"
                            label="Full name"
                            radius="md"
                            withAsterisk
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            mt="lg"
                            withAsterisk
                            label="Email"
                            radius="md"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                        />

                        <Input.Wrapper mt='md' id={id}
                            label="Your phone"
                            
                           >

                            <TextInput

                                component={IMaskInput}
                                mask="+91 00000 00000"
                                id={id}
                                radius="md"
                                placeholder="Your phone"
                                {...form.getInputProps('phone')}
                            />
                        </Input.Wrapper>

                        <Checkbox
                            mt="md"
                            label="I agree to sell my privacy"
                            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                        />

                        <Group position="center" mt="md">
                            <Button type="submit">Submit</Button>
                        </Group>
                    </form>

                </div>


            </Box>
        </Stack>
    )
}

export default Form
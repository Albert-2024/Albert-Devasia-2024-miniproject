import React from 'react';
import {TextInput, Input, Checkbox, Button, Group, Box} from '@mantine/core';
import {useForm} from '@mantine/form';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';
import { Center } from '@mantine/core';
import { Stack } from '@mantine/core';

const Form = () => {
    const form = useForm({
      initialValues: {
        email: '',
        termsOfService: false,
      },
  
      validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    });
    const id = useId();


    return (
       <Stack h={400} justify="space-around" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
        <Box maw={400} mx="auto">
            
            
                <div>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
            
                <TextInput
                mt="lg"
                    placeholder="Your name"
                    label="Full name"
                    radius="md"
                    withAsterisk
                />
            <TextInput
                    mt="lg"
                    withAsterisk
                    label="Email"
                    radius="md"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />
               
                <Input.Wrapper mt='md' id={id} label="Your phone" required maw={320} mx="auto">
                   
                    
                 <Input
                        
                        component={IMaskInput}
                        mask="+7 (000) 000-00-00"
                        id={id}
                        radius="md"
                        placeholder="Your phone"
                    />
                </Input.Wrapper>

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
         
            </div>
          
            
        </Box>
       </Stack>
    )
}

export default Form
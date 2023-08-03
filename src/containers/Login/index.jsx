/* eslint-disable no-unused-vars */
import { Box, Flex, Heading, Stack, useColorModeValue,  Button,  Divider, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import FormInput from "../../components/Forms"
import FormInputPassword from "../../components/Forms/passwordForm"
import LoginController from "../../controller/login.controller"

const Login = () => {
  const { show,
     email, 
     password, 
     handleClickShow, 
     setEmail, 
     setPassword, 
     handleClickLogin,
     response
    } = LoginController()

    console.log('check password', response);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'100vh'} py={12} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            maxW={'100vh'}
            my={12}
          >
           <Heading lineHeight={1.1} color={"#730C07"} fontWeight={700} fontSize={'26px'}>Masuk</Heading>

            <Stack spacing={4}>
              <FormInput 
                placeholder={'Email'}
                type={'email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormInputPassword 
                placeholder={'Password'}
                type={'password'}
                value={password}
                onClick={handleClickShow}
                showPassword={show}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>

            <Stack spacing={2} align={'end'} justify={'flex-end'}>
              <Box color={'#EB3F36'}>
                <Link href='#'>Lupa Password</Link>
              </Box>
            </Stack>

            <Stack spacing={20} pt={2}>
              <Button loadingText={'Submitting'}
                rounded={'lg'}
                bg={'#EB3F36'}
                size={'lg'}
                color={'white'}
                minH={'14px'}
                h={'3rem'}
                _hover={{
                  bg: '#EB3F36'
                }}
                onClick={handleClickLogin}
                // isDisabled={password.length > 2}
                >
                  Masuk
                </Button>
            </Stack>

            <Stack spacing={40} pt={3} mt={7}>
              <Divider borderColor={'gray.600'} />
            </Stack>

            <Stack spacing={2} align={'center'} justify={'center'}>
             <Text>Belum punya akun?  <Link href={'/register-email'}> Daftar Sekarang </Link> </Text>
            </Stack>
          </Box>
        </Stack>
      </Flex>
  )
}

export default Login
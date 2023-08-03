import { Box, Flex, Stack, useColorModeValue,  Button,  Divider, Text} from "@chakra-ui/react"
import FormInput from "../../components/Forms"
import { Link } from "react-router-dom"
import FormInputPassword from "../../components/Forms/passwordForm"
import { FaArrowLeft } from 'react-icons/fa';
import RegisController from "../../controller/regis.controller";

const RegisterPassword = () => {
  const { history,
     phone, 
     password, 
     handelClickShow, 
     show, 
     handleClickRegis,
     setPassword,
     setPhone
    } = RegisController()

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
          <Button
            leftIcon={<FaArrowLeft/>} 
            colorScheme="teal"
            color={'#730C07'}
            onClick={() => history('/register-email')}
          >
            Go Back
          </Button>

          <Stack spacing={6} pt={4}>
            <FormInput 
              placeholder={'Nomor Telepon'}
              onChange={(e) => setPhone(e.target.value)}
              type={'number'}
              value={phone}
            />

            <FormInputPassword 
                placeholder={'Password'}
                onChange={(e) => setPassword(e.target.value)}
                type={'password'}
                value={password}
                onClick={handelClickShow}
                showPassword={show}
            />

            <FormInputPassword 
                placeholder={'Konfrimasi Password'}
                onChange={(e) => setPassword(e.target.value)}
                type={'password'}
                value={password}
                onClick={handelClickShow}
                showPassword={show}
            />

          </Stack>

          <Stack spacing={20} pt={8}>
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
              onClick={handleClickRegis}
              >
                Selanjutnya
              </Button>
          </Stack>

          <Stack spacing={40} pt={3} mt={7}>
            <Divider borderColor={'gray.600'} />
          </Stack>

          <Stack spacing={2} align={'center'} justify={'center'}>
           <Text href='#'>Sudah Punya Akun?  <Link href={() => console.log('back to login')}> Masuk </Link> </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterPassword
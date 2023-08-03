import { Box, Flex, Heading, Stack, useColorModeValue,  Button,  Divider, Text} from "@chakra-ui/react"
import FormInput from "../../components/Forms"
import { Link } from "react-router-dom"
import RegisController from "../../controller/regis.controller"

const RegisterEmail = () => {
  const { email, 
    firstName, 
    lastName, 
    setEmail,
    setFirtsName,
    setLastName,
    history
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
         <Heading lineHeight={1.1} color={"#730C07"} fontWeight={700} fontSize={'26px'}>Daftar Sekarang</Heading>

          <Stack spacing={6} pt={4}>
            <FormInput 
              placeholder={'Nama Depan'}
              type={'text'}
              value={firstName}
              onChange={(e) => setFirtsName(e.target.value)}
            />

            <FormInput 
              placeholder={'Nama Belakang'}
              type={'text'}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <FormInput 
              placeholder={'Email'}
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onClick={() => history('/register-password')}
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

export default RegisterEmail
import './styles/global.css'
import ReactLogo from './assets/react.svg'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col justify-center items-center">
      <header className="flex flex-col justify-center items-center mb-10">
        <img src={ReactLogo} className="w-[100px] pb-4" />
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="lg">
          <span className="text-gray-400">
            Login and start playing!
          </span>
        </Text>
      </header>
      <body className="flex flex-col w-[404px] ">
        <section className="flex flex-col gap-3 mb-4">
          <Heading size="sm">E-mail address</Heading>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Type your email" />
          </TextInput.Root>
        </section>
        <section className="flex flex-col gap-3 mb-4">
          <Heading size="sm">Password</Heading>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="**********" />
          </TextInput.Root>
        </section>
        <div className="flex items-center gap-2 mb-8">
          <Checkbox />
          <Text size="sm" textColor="gray-200">
            Remember me for 30 days
          </Text>
        </div>
        <Button>Login</Button>
      </body>
      <footer className="flex flex-col mt-8 justify-center items-center gap-4 ">
        <Text textColor="gray-400">
          Forgot your password?
        </Text>
        <Text textColor="gray-400">
          Don’t have an account? Sign up now!
        </Text>
      </footer>
    </div>
  )
}

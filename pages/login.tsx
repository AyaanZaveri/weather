import { signInWithPopup } from 'firebase/auth'
import Button from '../components/Button'
import { auth, provider } from '../firebase'

export default function Example() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-8">
        <h1 className="font-outfit text-4xl font-bold text-slate-800">Login</h1>
        <Button onClick={() => signInWithPopup(auth, provider)}>
          Sign In With Google
        </Button>
      </div>
    </>
  )
}

import { styled } from "../styles";

const Button = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  border: 0,
  padding: '4px 8px',
  borderRadius: 4,

  span: {
    color: '$green300',
  },

  '&:hover': {
    filter: 'brightness(0.9)'
  }
})

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button>
        <span>Send</span>
      </Button>
    </>
  )
}



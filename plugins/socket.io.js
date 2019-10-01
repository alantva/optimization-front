import io from 'socket.io-client'

export default function($root, inject) {
  const ws = io(process.env.API_URL)

  ws.on('connect', () => {
    console.log('Socket connected!')
  })

  inject('ws', ws)
}

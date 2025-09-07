import { createServer } from 'net'

export const findAvailablePort = async (startPort: number): Promise<number> => {
  const isPortAvailable = (port: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const server = createServer()
      server.listen(port, () => {
        server.close()
        resolve(true)
      })
      server.on('error', () => {
        resolve(false)
      })
    })
  }
  let port = startPort
  while (!(await isPortAvailable(port))) {
    port++
  }
  return port
}

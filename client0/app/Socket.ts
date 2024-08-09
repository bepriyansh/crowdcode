import { io, Socket } from 'socket.io-client';

export const initSocket = async (): Promise<Socket> => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ['websocket'],
    };
    return io(process.env.NEXT_PUBLIC_BACKEND_URL as string, options);
};

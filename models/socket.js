import io from 'socket.io-client';

const socket = io('http://47.109.50.153:3001');
console.log('建立socket链接')

export default socket;

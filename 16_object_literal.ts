const serverCongig: {
    protocol: 'https',
    port: 3001
} = {
    protocol: 'https',
    port: 3001,
}

const startServer2: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (
    protocol: 'http' | 'https', 
    port: 3000 | 3001
    ): 'Server strted' => {
        
        console.log(`Serever started on ${protocol}://serevr:${port}`); 
        return 'Server strted';
}

startServer2(serverCongig.protocol, serverCongig.port);
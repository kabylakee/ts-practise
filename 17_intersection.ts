type Config = {
    protocol: 'https' | 'http';
    port: 3001 | 3000;
};

type Role = {
    role: string;
};

type ConfigWithRole = Config & Role;

const serverCongig2: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'susadmin',
};

const backupConfig: ConfigWithRole = {
    protocol: 'http',
    port: 3000,
    role: 'admin',
};

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer3: StartFunction = (
    protocol: 'http' | 'https', 
    port: 3000 | 3001
    ): 'Server strted' => {
        
        console.log(`Serever started on ${protocol}://serevr:${port}`); 
        return 'Server strted';
}
